using System.Threading.Tasks;
using AutoMapper;
using Classrooms.Api.BusinessLogic.Interfaces;
using Classrooms.Api.Domain.Entities;
using Classrooms.Api.Web.Extensions;
using Classrooms.Api.Web.Models.Auditoriums;
using Microsoft.AspNetCore.Mvc;

namespace Classrooms.Api.Web.Controllers
{
    [Route("api/housings/{housingId}/auditoriums")]
    public class AuditoriumsController : Controller
    {
        private readonly IAuditoriumLogic _auditoriumLogic;
        private readonly IMapper _mapper;

        public AuditoriumsController(IAuditoriumLogic auditoriumLogic, IMapper mapper)
        {
            _auditoriumLogic = auditoriumLogic;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(string housingId)
        {
            var auditoriumds = await _auditoriumLogic.GetAllAsync(housingId);

            if (auditoriumds == null)
            {
                return NotFound();
            }

            var auditoriumVms = _mapper.MapEnumerable<Auditorium, AuditoriumVm>(auditoriumds);

            return Ok(auditoriumVms);
        }

        [HttpGet("{auditoriumId}")]
        public async Task<IActionResult> GetById(string housingId, string auditoriumId)
        {
            var result = await _auditoriumLogic.GetById(housingId, auditoriumId);

            if (result == null)
            {
                return NotFound();
            }

            var auditorium = _mapper.Map<Auditorium, AuditoriumVm>(result);

            return Ok(auditorium);
        }

        [HttpGet("/api/housings/auditoriums/detailed")]
        public async Task<IActionResult> GetDetailedInfo()
        {
            var result = await _auditoriumLogic.GetDetailedInfoAsync();
            var auditoriums = _mapper.MapEnumerable<AuditoriumDetailedInfo, AuditoriumDetailedInfoVm>(result);

            return Ok(auditoriums);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]CreateAuditoriumsVm createAuditoriumsVm)
        {
            if (ModelState.IsValid)
            {
                if (await _auditoriumLogic.IsAuditoriumExists(createAuditoriumsVm.HousingId, createAuditoriumsVm.Number.Value))
                {
                    return BadRequest("Auditorium with that number is already exists");
                }

                var auditorium = _mapper.Map<CreateAuditoriumsVm, Auditorium>(createAuditoriumsVm);
                var result = await _auditoriumLogic.AddAsync(auditorium);

                if (result == null)
                {
                    return BadRequest();
                }

                return Created($"api/housings/{result.HousingId}/auditoriums/{result.Id}", result);
            }

            return BadRequest(ModelState);
        }

        [HttpPut("{auditoriumId}")]
        public async Task<IActionResult> Edit([FromBody]EditAuditoriumVm editAuditoriumVm, string auditoriumId)
        {
            if (!string.Equals(auditoriumId, editAuditoriumVm.Id))
            {
                return BadRequest("Auditorium ids must be same");
            }

            if (ModelState.IsValid)
            {
                var isAuditoriumExists = await _auditoriumLogic.IsAuditoriumExists(
                        editAuditoriumVm.HousingId,
                        editAuditoriumVm.Number.Value,
                        editAuditoriumVm.Id);

                if (isAuditoriumExists)
                {
                    return BadRequest("Auditorium with that number is already exists");
                }

                var auditorium = _mapper.Map<EditAuditoriumVm, Auditorium>(editAuditoriumVm);
                var result = await _auditoriumLogic.UpdateAsync(auditorium);

                return Ok(result);
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("{auditoriumId}")]
        public async Task<IActionResult> Remove(string housingId, string auditoriumId)
        {
            await _auditoriumLogic.RemoveAsync(new Auditorium { Id = auditoriumId, HousingId = housingId });

            return Ok();
        }
    }
}