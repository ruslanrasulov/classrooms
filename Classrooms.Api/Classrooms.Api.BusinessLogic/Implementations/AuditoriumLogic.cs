using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Classrooms.Api.BusinessLogic.Interfaces;
using Classrooms.Api.Domain.Entities;

namespace Classrooms.Api.BusinessLogic.Implementations
{
    internal class AuditoriumLogic : IAuditoriumLogic
    {
        public Task<Auditorium> AddAsync(Auditorium auditorium)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Auditorium>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<AuditoriumDetailedInfo>> GetDetailedInfoAsync()
        {
            throw new NotImplementedException();
        }

        public Task RemoveAsync(Auditorium auditorium)
        {
            throw new NotImplementedException();
        }

        public Task<Auditorium> UpdateAsync(Auditorium auditorium)
        {
            throw new NotImplementedException();
        }
    }
}