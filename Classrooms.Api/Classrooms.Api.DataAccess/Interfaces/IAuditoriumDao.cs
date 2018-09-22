using System.Collections.Generic;
using System.Threading.Tasks;
using Classrooms.Api.Domain.Entities;

namespace Classrooms.Api.DataAccess.Interfaces
{
    public interface IAuditoriumDao
    {
        Task<Auditorium> GetById(int id);

        Task<IEnumerable<Auditorium>> GetAllAsync();

        Task<IEnumerable<AuditoriumDetailedInfo>> GetDetailedInfoAsync();

        Task<Auditorium> AddAsync(Auditorium auditorium);

        Task<Auditorium> UpdateAsync(Auditorium auditorium);

        Task RemoveAsync(Auditorium auditorium);
    }
}