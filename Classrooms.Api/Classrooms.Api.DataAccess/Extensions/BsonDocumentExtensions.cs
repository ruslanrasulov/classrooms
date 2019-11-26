using System.Linq;
using Classrooms.Api.Domain.Entities;
using Classrooms.Api.Domain.Enums;
using MongoDB.Bson;

namespace Classrooms.Api.DataAccess.Extensions
{
    internal static class BsonDocumentExtensions
    {
        public static HousingDetailedInfo AsHousingDetailedInfo(this BsonDocument document) => new HousingDetailedInfo
        {
            Number = document["_id"].AsBsonDocument["number"].AsInt32,
            CountPerType = document["CountPerType"].AsBsonArray.ToDictionary(
                key => (AuditoriumTypes)key["type"].AsInt32,
                value => value["count"].AsInt32),
            TotalCapacity = document["TotalCapacity"].AsInt32
        };
    };
}