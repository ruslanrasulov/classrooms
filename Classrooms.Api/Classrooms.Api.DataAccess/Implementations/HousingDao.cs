using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Classrooms.Api.DataAccess.Interfaces;
using Classrooms.Api.DataAccess.Settings;
using Classrooms.Api.Domain.Entities;
using MongoDB.Driver;

namespace Classrooms.Api.DataAccess.Implementations
{
    internal class HousingDao : BaseDao, IHousingDao
    {
        public HousingDao(IDataAccessSettings settings)
            : base(settings)
        {
        }

        public async Task<Housing> AddAsync(Housing housing)
        {
            await Housings.InsertOneAsync(housing);

            return housing;
        }

        public async Task<Housing> GetById(string id)
        {
            var filter = Builders<Housing>.Filter.Eq("Id", id);
            return await Housings
                .Find(filter)
                .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Housing>> GetAllAsync()
        {
            return await Housings.Find(_ => true).ToListAsync();
        }

        public Task<IEnumerable<HousingDetailedInfo>> GetDetailedInfoAsync()
        {
            throw new NotImplementedException();
        }

        public async Task RemoveAsync(Housing housing)
        {
            var filter = Builders<Housing>.Filter.Eq("Id", housing.Id);
            await Housings.DeleteOneAsync(filter);
        }

        public async Task<Housing> UpdateAsync(Housing housing)
        {
            var filter = Builders<Housing>.Filter.Eq("Id", housing.Id);
            var update = Builders<Housing>.Update.Set(h => h.Number, housing.Number);

            await Housings.UpdateOneAsync(filter, update);

            return await GetById(housing.Id);
        }
    }
}