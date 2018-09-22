using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Classrooms.Api.BusinessLogic.Interfaces;
using Classrooms.Api.DataAccess.Interfaces;
using Classrooms.Api.Domain.Entities;

namespace Classrooms.Api.BusinessLogic.Implementations
{
    internal class AuditoriumLogic : IAuditoriumLogic
    {
        private readonly IAuditoriumDao _auditoriumDao;

        public AuditoriumLogic(IAuditoriumDao auditoriumDao)
        {
            _auditoriumDao = auditoriumDao;
        }

        public async Task<Auditorium> AddAsync(Auditorium auditorium)
        {
            if (auditorium == null)
            {
                throw new ArgumentNullException(nameof(auditorium));
            }

            return await _auditoriumDao.AddAsync(auditorium);
        }

        public async Task<IEnumerable<Auditorium>> GetAllAsync()
        {
            return await _auditoriumDao.GetAllAsync();
        }

        public async Task<IEnumerable<AuditoriumDetailedInfo>> GetDetailedInfoAsync()
        {
            return await _auditoriumDao.GetDetailedInfoAsync();
        }

        public async Task RemoveAsync(Auditorium auditorium)
        {
            if (auditorium == null)
            {
                throw new ArgumentNullException(nameof(auditorium));
            }

            await _auditoriumDao.RemoveAsync(auditorium);
        }

        public async Task<Auditorium> UpdateAsync(Auditorium auditorium)
        {
            if (auditorium == null)
            {
                throw new ArgumentNullException(nameof(auditorium));
            }

            return await _auditoriumDao.UpdateAsync(auditorium);
        }
    }
}