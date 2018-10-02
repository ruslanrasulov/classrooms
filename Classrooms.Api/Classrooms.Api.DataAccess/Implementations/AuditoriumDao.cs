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
    internal class AuditoriumDao : BaseDao, IAuditoriumDao
    {
        public AuditoriumDao(IDataAccessSettings settings)
            : base(settings)
        {
        }

        public async Task<Auditorium> AddAsync(Auditorium auditorium)
        {
            var filter = Builders<Housing>.Filter.Eq("Id", auditorium.HousingId);
            var housing = await Housings.Find(filter).FirstAsync();

            if (housing == null)
            {
                return null;
            }

            if (housing.Auditoriums == null)
            {
                housing.Auditoriums = new List<Auditorium>();
            }

            auditorium.Id = ObjectId.GenerateNewId().ToString();
            housing.Auditoriums.Add(auditorium);

            await Housings.ReplaceOneAsync(h => string.Equals(h.Id, housing.Id), housing);

            return auditorium;
        }

        public async Task<Auditorium> GetById(string housingId, string auditoriumId)
        {
            var filter = Builders<Housing>.Filter.Eq("Id", housingId);
            var housing = await Housings.Find(filter).FirstOrDefaultAsync();

            return housing?.Auditoriums?.FirstOrDefault(a => string.Equals(a.Id, auditoriumId));
        }

        public async Task<IEnumerable<Auditorium>> GetAllAsync(string housingId)
        {
            var filter = Builders<Housing>.Filter.Eq("Id", housingId);
            var housing = await Housings.Find(filter).FirstOrDefaultAsync();

            if (housing != null)
            {
                return housing.Auditoriums?.ToList() ?? new List<Auditorium>();
            }

            return null;
        }

        public async Task<IEnumerable<AuditoriumDetailedInfo>> GetDetailedInfoAsync()
        {
            var result = await Housings
                .Aggregate()
                .Unwind(field => field.Auditoriums)
                .Project(new BsonDocument
                {
                    { "Id", "$Auditoriums.Id" },
                    { "Number", "$Auditoriums.Number" },
                    { "Capacity", "$Auditoriums.Capacity" },
                    { "HousingNumber", "$Number" },
                    { "Floor", "$Auditoriums.Floor" },
                    { "Type", "$Auditoriums.Type" }
                })
                .ToListAsync();

            return result.Select(r => BsonSerializer.Deserialize<AuditoriumDetailedInfo>(r)).ToList();
        }

        public async Task RemoveAsync(Auditorium auditorium)
        {
            var filter = Builders<Housing>.Filter.Eq("Id", auditorium.HousingId);
            var housing = await Housings.Find(filter).FirstAsync();

            housing.Auditoriums.Remove(housing.Auditoriums.FirstOrDefault(a => string.Equals(a.Id, auditorium.Id)));

            await Housings.ReplaceOneAsync(h => string.Equals(h.Id, housing.Id), housing);
        }

        public async Task<Auditorium> UpdateAsync(Auditorium auditorium)
        {
            var filter = Builders<Housing>.Filter.Eq("Id", auditorium.HousingId);
            var housing = await Housings.Find(filter).FirstOrDefaultAsync();

            if (housing == null || housing.Auditoriums?.Count == 0)
            {
                return null;
            }

            var auditoriumForUpdate = housing.Auditoriums.FirstOrDefault(a => string.Equals(a.Id, auditorium.Id));

            if (auditoriumForUpdate == null)
            {
                return null;
            }

            auditoriumForUpdate.Number = auditorium.Number;
            auditoriumForUpdate.Floor = auditorium.Floor;
            auditoriumForUpdate.Type = auditorium.Type;

            await Housings.ReplaceOneAsync(h => string.Equals(h.Id, housing.Id), housing);

            return auditoriumForUpdate;
        }

        public async Task<bool> IsAuditoriumExists(string housingId, int number)
        {
            var filter = Builders<Housing>.Filter.ElemMatch(
                f => f.Auditoriums,
                f => string.Equals(f.HousingId, housingId) && f.Number == number);

            return (await Housings
                .Find(filter)
                .FirstOrDefaultAsync()) != null;
        }

        public async Task<bool> IsAuditoriumExists(string housingId, int number, string exceptAuditoriumId)
        {
            var filter = Builders<Housing>.Filter.ElemMatch(
                f => f.Auditoriums,
                f => string.Equals(f.HousingId, housingId) && !string.Equals(f.Id, exceptAuditoriumId) && f.Number == number);

            return (await Housings
                .Find(filter)
                .FirstOrDefaultAsync()) != null;
        }
    }
}