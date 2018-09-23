using System.Collections.Generic;
using System.Threading.Tasks;
using Classrooms.Api.Domain.Entities;

namespace Classrooms.Api.BusinessLogic.Interfaces
{
    public interface IAuditoriumLogic
    {
        Task<Auditorium> GetById(string housingId, string auditoriumId);

        Task<IEnumerable<Auditorium>> GetAllAsync(string housingId);

        Task<IEnumerable<AuditoriumDetailedInfo>> GetDetailedInfoAsync();

        Task<Auditorium> AddAsync(Auditorium auditorium);

        Task<Auditorium> UpdateAsync(Auditorium auditorium);

        Task RemoveAsync(Auditorium auditorium);
    }
}