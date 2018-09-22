using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Classrooms.Api.DataAccess.Extensions;
using Classrooms.Api.DataAccess.Interfaces;
using Classrooms.Api.DataAccess.Settings;
using Classrooms.Api.Domain.Entities;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Classrooms.Api.DataAccess.Implementations
{
    internal class HousingDao : BaseDao, IHousingDao
    {
        public HousingDao(IDataAccessSettings settings)
            : base(settings)
        {
        }

        public Task<Housing> AddAsync(Housing housing)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Housing>> GetAllAsync()
        {
            var db = Client.GetDatabase("classrooms");
            var housings = db.GetCollection<BsonDocument>("housings");

            using (var cursor = await housings.FindAsync(FilterDefinition<BsonDocument>.Empty))
            {
                var result = new List<Housing>();
                
                while (await cursor.MoveNextAsync())
                {
                    var batch = cursor.Current;

                    foreach (var item in batch)
                    {
                        result.Add(item.AsHousing());
                    }
                }

                return result;
            }
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
