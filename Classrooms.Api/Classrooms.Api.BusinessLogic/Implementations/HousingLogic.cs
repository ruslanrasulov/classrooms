using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Classrooms.Api.BusinessLogic.Interfaces;
using Classrooms.Api.Domain.Entities;

namespace Classrooms.Api.BusinessLogic.Implementations
{
    internal class HousingLogic : IHousingLogic
    {
        public Task<Housing> AddAsync(Housing housing)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Housing>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<HousingDetailedInfo>> GetDetailedInfoAsync()
        {
            throw new NotImplementedException();
        }

        public Task RemoveAsync(Housing housing)
        {
            throw new NotImplementedException();
        }

        public Task<Housing> UpdateAsync(Housing housing)
        {
            throw new NotImplementedException();
        }
    }
}