using System.Collections.Generic;
using System.Threading.Tasks;
using Classrooms.Api.Domain.Entities;

namespace Classrooms.Api.DataAccess.Interfaces
{
    public interface IHousingDao
    {
        Task<IEnumerable<Housing>> GetAllAsync();

        Task<IEnumerable<HousingDetailedInfo>> GetDetailedInfoAsync();

        Task<Housing> AddAsync(Housing housing);

        Task<Housing> UpdateAsync(Housing housing);

        Task RemoveAsync(Housing housing);
    }
}