using AutoMapper;
using Classrooms.Api.Domain.Entities;
using Classrooms.Api.Domain.Enums;
using Classrooms.Api.Web.Models.Auditoriums;
using Classrooms.Api.Web.Models.Housings;

namespace Classrooms.Api.Web.Configuration
{
    public class WebApiProfile : Profile
    {
        public WebApiProfile()
        {
            CreateMap<Auditorium, AuditoriumVm>()
                .ForMember(a => a.Type, opt => opt.ResolveUsing(src => (int)src.Type));
            CreateMap<AuditoriumDetailedInfo, AuditoriumDetailedInfoVm>()
                .ForMember(a => a.Type, opt => opt.ResolveUsing(src => (int)src.Type));
            CreateMap<CreateAuditoriumsVm, Auditorium>()
                .ForMember(a => a.Id, opt => opt.Ignore())
                .ForMember(a => a.Type, opt => opt.ResolveUsing(src => (AuditoriumTypes)src.Type));
            CreateMap<EditAuditoriumVm, Auditorium>()
                .ForMember(a => a.Type, opt => opt.ResolveUsing(src => (AuditoriumTypes)src.Type));
            CreateMap<Housing, HousingVm>();
            CreateMap<CreateHousingVm, Housing>()
                .ForMember(a => a.Auditoriums, opt => opt.Ignore())
                .ForMember(a => a.Id, opt => opt.Ignore());
            CreateMap<EditHousingVm, Housing>()
                .ForMember(a => a.Auditoriums, opt => opt.Ignore());
            CreateMap<HousingDetailedInfo, HousingDetailedInfoVm>();

            AssertConfigurationIsValid();
        }

        private void AssertConfigurationIsValid()
        {
            var configuration = new MapperConfiguration(cfg => 
            {
                cfg.AddProfile(this);
            });
            configuration.AssertConfigurationIsValid();
        }
    }
}