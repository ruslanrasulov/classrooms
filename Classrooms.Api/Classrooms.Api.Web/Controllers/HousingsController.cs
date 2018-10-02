using System.Threading.Tasks;
using AutoMapper;
using Classrooms.Api.BusinessLogic.Interfaces;
using Classrooms.Api.Domain.Entities;
using Classrooms.Api.Web.Extensions;
using Classrooms.Api.Web.Models.Auditoriums;
using Classrooms.Api.Web.Models.Housings;
using Microsoft.AspNetCore.Mvc;

namespace Classrooms.Api.Web.Controllers
{
    [Route("api/housings")]
    public class HousingsController : Controller
    {
        private readonly IHousingLogic _housingLogic;
        private readonly IAuditoriumLogic _auditoriumLogic;
        private readonly IMapper _mapper;

        public HousingsController(IHousingLogic housingLogic, IAuditoriumLogic auditoriumLogic, IMapper mapper)
        {
            _housingLogic = housingLogic;
            _auditoriumLogic = auditoriumLogic;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var housings = await _housingLogic.GetAllAsync();
            var housingVms = _mapper.MapEnumerable<Housing, HousingVm>(housings);

            return Ok(housingVms);
        }

        [HttpGet("{housingId}/auditoriums")]
        public async Task<IActionResult> GetAuditoriums(string housingId)
        {
            var auditoriumds = await _auditoriumLogic.GetAllAsync(housingId);

            if (auditoriumds == null)
            {
                return NotFound();
            }

            var auditoriumVms = _mapper.MapEnumerable<Auditorium, AuditoriumVm>(auditoriumds);

            return Ok(auditoriumVms);
        }

        [HttpGet("{housingId}/auditoriums/{auditoriumId}")]
        public async Task<IActionResult> GetByAuditoriumId(string housingId, string auditoriumId)
        {
            var result = await _auditoriumLogic.GetById(housingId, auditoriumId);

            if (result == null)
            {
                return NotFound();
            }

            var auditorium = _mapper.Map<Auditorium, AuditoriumVm>(result);

            return Ok(auditorium);
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

        [HttpGet("auditoriums/detailed")]
        public async Task<IActionResult> GetAuditoriumsDetailedInfo()
        {
            var result = await _auditoriumLogic.GetDetailedInfoAsync();
            var auditoriums = _mapper.MapEnumerable<AuditoriumDetailedInfo, AuditoriumDetailedInfoVm>(result);

            return Ok(auditoriums);
        }

        [HttpPost]
        public async Task<IActionResult> AddHousing([FromBody]CreateHousingVm createHousingVm)
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

        [HttpPost("{housingId}/auditoriums")]
        public async Task<IActionResult> AddAuditorium([FromBody]CreateAuditoriumsVm createAuditoriumsVm)
        {
            if (ModelState.IsValid)
            {
                if (await _auditoriumLogic.IsAuditoriumExists(createAuditoriumsVm.HousingId, createAuditoriumsVm.Number))
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

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit([FromBody]EditHousingVm editHousingVm)
        {
            if (ModelState.IsValid)
            {
                if (await _housingLogic.IsHousingExists(editHousingVm.Number, editHousingVm.Id))
                {
                    return BadRequest("Housing with that number is already exists");
                }

                var housing = _mapper.Map<EditHousingVm, Housing>(editHousingVm);
                var result = await _housingLogic.UpdateAsync(housing);

                return Ok(result);
            }

            return BadRequest(ModelState);
        }

        [HttpPut("{housingId}/auditoriums/{auditoriumId}")]
        public async Task<IActionResult> EditAuditorium([FromBody]EditAuditoriumVm editAuditoriumVm)
        {
            if (ModelState.IsValid)
            {
                if (await _auditoriumLogic.IsAuditoriumExists(
                    editAuditoriumVm.HousingId, 
                    editAuditoriumVm.Number, 
                    editAuditoriumVm.Id))
                {
                    return BadRequest("Auditorium with that number is already exists");
                }

                var auditorium = _mapper.Map<EditAuditoriumVm, Auditorium>(editAuditoriumVm);
                var result = await _auditoriumLogic.UpdateAsync(auditorium);

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

        [HttpDelete("{housingId}/auditoriums/{auditoriumId}")]
        public async Task<IActionResult> RemoveAuditorium(string housingId, string auditoriumId)
        {
            await _auditoriumLogic.RemoveAsync(new Auditorium { Id = auditoriumId, HousingId = housingId });

            return Ok();
        }
    }
}