using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Classrooms.Api.BusinessLogic.Interfaces;
using Classrooms.Api.DataAccess.Interfaces;
using Classrooms.Api.Domain.Entities;

namespace Classrooms.Api.BusinessLogic.Implementations
{
    internal class HousingLogic : IHousingLogic
    {
        private readonly IHousingDao _housingsDao;

        public HousingLogic(IHousingDao housingsDao)
        {
            _housingsDao = housingsDao;
        }

        public async Task<Housing> AddAsync(Housing housing)
        {
            if (housing == null)
            {
                throw new ArgumentNullException(nameof(housing));
            }

            return await _housingsDao.AddAsync(housing);
        }

        public async Task<Housing> GetById(int id)
        {
            return await _housingsDao.GetById(id);
        }

        public async Task<IEnumerable<Housing>> GetAllAsync()
        {
            return await _housingsDao.GetAllAsync();
        }

        public async Task<IEnumerable<HousingDetailedInfo>> GetDetailedInfoAsync()
        {
            return await _housingsDao.GetDetailedInfoAsync();
        }

        public async Task RemoveAsync(Housing housing)
        {
            if (housing == null)
            {
                throw new ArgumentNullException(nameof(housing));
            }

            await _housingsDao.RemoveAsync(housing);
        }

        public async Task<Housing> UpdateAsync(Housing housing)
        {
            if (housing == null)
            {
                throw new ArgumentNullException(nameof(housing));
            }

            return await _housingsDao.UpdateAsync(housing);
        }
    }
}