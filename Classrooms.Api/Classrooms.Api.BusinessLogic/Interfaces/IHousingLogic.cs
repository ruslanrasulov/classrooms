﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Classrooms.Api.Domain.Entities;

namespace Classrooms.Api.BusinessLogic.Interfaces
{
    public interface IHousingLogic
    {
        Task<Housing> GetById(int id);

        Task<IEnumerable<Housing>> GetAllAsync();

        Task<IEnumerable<HousingDetailedInfo>> GetDetailedInfoAsync();

        Task<Housing> AddAsync(Housing housing);

        Task<Housing> UpdateAsync(Housing housing);

        Task RemoveAsync(Housing housing);
    }
}