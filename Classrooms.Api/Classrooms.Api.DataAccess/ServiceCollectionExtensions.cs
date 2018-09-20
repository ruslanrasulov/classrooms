using Classrooms.Api.DataAccess.Implementations;
using Classrooms.Api.DataAccess.Interfaces;
using Classrooms.Api.DataAccess.Settings;
using Microsoft.Extensions.DependencyInjection;

namespace Classrooms.Api.DataAccess
{
    public static class ServiceCollectionExtensions
    {
        public static void AddDataAccess(this IServiceCollection services, IDataAccessSettings settings)
        {
            services.AddSingleton(settings);
            services.AddTransient<IHousingsDao, HousingsDao>();
            services.AddTransient<IAuditoriumsDao, AuditoriumsDao>();
        }
    }
}