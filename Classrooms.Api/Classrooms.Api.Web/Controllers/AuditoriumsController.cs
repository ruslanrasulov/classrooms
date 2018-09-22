using System.Threading.Tasks;
using AutoMapper;
using Classrooms.Api.BusinessLogic.Interfaces;
using Classrooms.Api.Domain.Entities;
using Classrooms.Api.Web.Extensions;
using Classrooms.Api.Web.Models.Auditoriums;
using Microsoft.AspNetCore.Mvc;

namespace Classrooms.Api.Web.Controllers
{
    public class AuditoriumsController : Controller
    {
        private readonly IAuditoriumLogic _auditoriumLogic;
        private readonly IMapper _mapper;

        public AuditoriumsController(IAuditoriumLogic auditoriumLogic, IMapper mapper)
        {
            _auditoriumLogic = auditoriumLogic;
            _mapper = mapper;
        }

        [HttpGet("api/[controller]/")]
        public async Task<IActionResult> Get()
        {
            var auditoriumds = await _auditoriumLogic.GetAllAsync();
            var auditoriumVms = _mapper.MapEnumerable<Auditorium, AuditoriumVm>(auditoriumds);

            return Ok(auditoriumVms);
        }

        [HttpGet("api/[controller]/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _auditoriumLogic.GetById(id);
            var auditorium = _mapper.Map<Auditorium, AuditoriumVm>(result);

            return Ok(auditorium);
        }

        [HttpPost("api/[controller]/")]
        public async Task<IActionResult> Post([FromBody]CreateAuditoriumsVm createAuditoriumsVm)
        {
            if (ModelState.IsValid)
            {
                var auditorium = _mapper.Map<CreateAuditoriumsVm, Auditorium>(createAuditoriumsVm);
                var result = await _auditoriumLogic.AddAsync(auditorium);

                return Created($"api/auditoriums/{result.Id}", result);
            }

            return BadRequest(ModelState);
        }

        [HttpPut("api/[controller]/{id}")]
        public async Task<IActionResult> Put([FromBody] EditAuditoriumVm editAuditoriumVm)
        {
            if (ModelState.IsValid)
            {
                var auditorium = _mapper.Map<EditAuditoriumVm, Auditorium>(editAuditoriumVm);
                var result = await _auditoriumLogic.UpdateAsync(auditorium);

                return Ok(result);
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("api/[controller]/{id}")]
        public async Task<IActionResult> Remove(string id)
        {
            await _auditoriumLogic.RemoveAsync(new Auditorium { Id = id });

            return Ok();
        }
    }
}