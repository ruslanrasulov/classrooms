using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Classrooms.Api.DataAccess.Interfaces;
using Classrooms.Api.DataAccess.Settings;
using Classrooms.Api.Domain.Entities;
using MongoDB.Driver;

namespace Classrooms.Api.DataAccess.Implementations
{
    internal class AuditoriumDao : BaseDao, IAuditoriumDao
    {
        private readonly string _connectionString;

        public AuditoriumDao(IDataAccessSettings settings)
            : base(settings)
        {
        }

        public Task<Auditorium> AddAsync(Auditorium auditorium)
        {
            throw new NotImplementedException();
        }

        public Task<Auditorium> GetById(int id)
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