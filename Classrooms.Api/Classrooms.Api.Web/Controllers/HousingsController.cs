using System.Threading.Tasks;
using AutoMapper;
using Classrooms.Api.BusinessLogic.Interfaces;
using Classrooms.Api.Domain.Entities;
using Classrooms.Api.Web.Extensions;
using Classrooms.Api.Web.Models.Housings;
using Microsoft.AspNetCore.Mvc;

namespace Classrooms.Api.Web.Controllers
{
    public class HousingsController : Controller
    {
        private readonly IHousingLogic _housingLogic;
        private readonly IMapper _mapper;

        public HousingsController(IHousingLogic housingLogic, IMapper mapper)
        {
            _housingLogic = housingLogic;
            _mapper = mapper;
        }

        [HttpGet("api/[controller]")]
        public async Task<IActionResult> Get()
        {
            var housings = await _housingLogic.GetAllAsync();
            var housingVms = _mapper.MapEnumerable<Housing, HousingVm>(housings);

            return Ok(housingVms);
        }

        [HttpGet("api/[controller]/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var housing = await _housingLogic.GetById(id);
            var housingVm = _mapper.Map<Housing, HousingVm>(housing);

            return Ok(housingVm);
        }

        [HttpGet("api/[controller]/detailed")]
        public async Task<IActionResult> GetDetailedInfo()
        {
            var result = await _housingLogic.GetDetailedInfoAsync();
            var detailedInfo = _mapper.MapEnumerable<HousingDetailedInfo, HousingDetailedInfoVm>(result);

            return Ok(detailedInfo);
        }

        [HttpPost("api/[controller]/")]
        public async Task<IActionResult> AddHousing(CreateHousingVm createHousingVm)
        {
            if (ModelState.IsValid)
            {
                var housing = _mapper.Map<CreateHousingVm, Housing>(createHousingVm);
                var result = await _housingLogic.AddAsync(housing);

                return Created($"/housings/{result.Id}", result);
            }

            return BadRequest(ModelState);
        }

        [HttpPut("api/[controller]/{id}")]
        public async Task<IActionResult> Edit(EditHousingVm editHousingVm)
        {
            if (ModelState.IsValid)
            {
                var housing = _mapper.Map<EditHousingVm, Housing>(editHousingVm);
                var result = await _housingLogic.UpdateAsync(housing);

                return Ok(result);
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("api/[controller]/{id}")]
        public async Task<IActionResult> Remove(string id)
        {
            await _housingLogic.RemoveAsync(new Housing { Id = id });

            return Ok();
        }
    }
}