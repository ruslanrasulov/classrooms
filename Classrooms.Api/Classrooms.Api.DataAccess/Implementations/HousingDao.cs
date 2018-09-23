using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Classrooms.Api.DataAccess.Extensions;
using Classrooms.Api.DataAccess.Interfaces;
using Classrooms.Api.DataAccess.Settings;
using Classrooms.Api.Domain.Entities;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
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

        public async Task<IEnumerable<HousingDetailedInfo>> GetDetailedInfoAsync()
        {
            var result = await Housings
                .Aggregate()
                .Unwind(h => h.Auditoriums)
                .Group(new BsonDocument
                    {
                        {
                            "_id",
                            new BsonDocument
                            {
                                { "number", "$Number" },
                                { "type", "$Auditoriums.Type" }
                            }
                        },
                        {
                            "CapacityCount",
                            new BsonDocument
                            {
                                { "$sum", "$Auditoriums.Capacity" }
                            }
                        },
                        {
                            "Count",
                            new BsonDocument
                            {
                                { "$sum", 1 }
                            }
                        }
                    })
                .Group(new BsonDocument
                    {
                        {
                            "_id",
                            new BsonDocument
                            {
                                { "number", "$_id.number" }
                            }
                        },
                        {
                            "TotalCapacity",
                            new BsonDocument
                            {
                                { "$sum", "$CapacityCount" }
                            }
                        },
                        {
                            "CountPerType",
                            new BsonDocument
                            {
                                {
                                    "$push",
                                    new BsonDocument
                                    {
                                        { "type", "$_id.type" },
                                        { "count", "$Count" }

                                    }
                                }
                            }
                        }
                    })
                .Project(new BsonDocument
                    {
                        { "Number", "$Number"},
                        { "CountPerType", "$CountPerType" },
                        { "TotalCapacity", "$TotalCapacity" }
                    })
                .ToListAsync();

            return result.Select(r => r.AsHousingDetailedInfo()).ToList();
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