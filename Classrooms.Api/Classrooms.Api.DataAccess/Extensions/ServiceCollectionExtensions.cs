﻿using Classrooms.Api.DataAccess.Implementations;
using Classrooms.Api.DataAccess.Interfaces;
using Classrooms.Api.DataAccess.Settings;
using Microsoft.Extensions.DependencyInjection;

namespace Classrooms.Api.DataAccess.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void AddDataAccess(this IServiceCollection services, IDataAccessSettings settings)
        {
            services.AddSingleton(settings);
            services.AddTransient<IHousingDao, HousingDao>();
            services.AddTransient<IAuditoriumDao, AuditoriumDao>();
        }
    }
}