using System.Threading.Tasks;
using AutoMapper;
using Classrooms.Api.BusinessLogic.Interfaces;
using Classrooms.Api.Domain.Entities;
using Classrooms.Api.Web.Extensions;
using Classrooms.Api.Web.Models.Housings;
using Microsoft.AspNetCore.Mvc;

namespace Classrooms.Api.Web.Controllers
{
    [Route("api/housings")]
    public class HousingsController : Controller
    {
        private readonly IHousingLogic _housingLogic;
        private readonly IMapper _mapper;

        public HousingsController(IHousingLogic housingLogic, IMapper mapper)
        {
            _housingLogic = housingLogic;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var housings = await _housingLogic.GetAllAsync();
            var housingVms = _mapper.MapEnumerable<Housing, HousingVm>(housings);

            return Ok(housingVms);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(string id)
        {
            if (id == null)
            {
                return BadRequest();
            }

            var housing = await _housingLogic.GetById(id);

            if (housing == null)
            {
                return NotFound();
            }

            var housingVm = _mapper.Map<Housing, HousingVm>(housing);

            return Ok(housingVm);
        }

        [HttpGet("detailed")]
        public async Task<IActionResult> GetDetailedInfo()
        {
            var result = await _housingLogic.GetDetailedInfoAsync();
            var detailedInfo = _mapper.MapEnumerable<HousingDetailedInfo, HousingDetailedInfoVm>(result);

            return Ok(detailedInfo);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]CreateHousingVm createHousingVm)
        {
            if (ModelState.IsValid)
            {
                var housing = _mapper.Map<CreateHousingVm, Housing>(createHousingVm);

                if (await _housingLogic.IsHousingExists(housing.Number))
                {
                    return BadRequest("Housing with that number is already exists");
                }

                var result = await _housingLogic.AddAsync(housing);

                return Created($"api/housings/{result.Id}", result);
            }

            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit([FromBody]EditHousingVm editHousingVm, string id)
        {
            if (!string.Equals(id, editHousingVm.Id))
            {
                return BadRequest("Housing ids must be same");
            }

            if (ModelState.IsValid)
            {
                if (await _housingLogic.IsHousingExists(editHousingVm.Number.Value, editHousingVm.Id))
                {
                    return BadRequest("Housing with that number is already exists");
                }

                var housing = _mapper.Map<EditHousingVm, Housing>(editHousingVm);
                var result = await _housingLogic.UpdateAsync(housing);

                return Ok(result);
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Remove(string id)
        {
            if (id == null)
            {
                return BadRequest();
            }

            await _housingLogic.RemoveAsync(new Housing { Id = id });

            return Ok();
        }
    }
}