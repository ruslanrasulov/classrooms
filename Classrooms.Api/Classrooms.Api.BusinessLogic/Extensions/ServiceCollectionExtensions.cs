using Classrooms.Api.BusinessLogic.Implementations;
using Classrooms.Api.BusinessLogic.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Classrooms.Api.BusinessLogic.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void AddBusinessLogic(this IServiceCollection services)
        {
            services.AddTransient<IAuditoriumLogic, AuditoriumLogic>();
            services.AddTransient<IHousingLogic, HousingLogic>();
        }
    }
}