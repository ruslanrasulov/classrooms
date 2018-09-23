using System.Linq;
using Classrooms.Api.Domain.Entities;
using Classrooms.Api.Domain.Enums;
using MongoDB.Bson;

namespace Classrooms.Api.DataAccess.Extensions
{
    internal static class BsonDocumentExtensions
    {
        //public static Housing AsHousing(this BsonDocument doucment) => new Housing
        //{
        //    Id = doucment["id"].AsString,
        //    Number = doucment["number"].AsInt32,
        //    Auditoriums = doucment["auditoriums"].AsBsonArray.Select(a => a.AsBsonDocument.AsAuditorium())
        //};

        //public static Auditorium AsAuditorium(this BsonDocument document) => new Auditorium
        //{
        //    Id = document["id"].AsString,
        //    HousingId = document["housingId"].AsString,
        //    Floor = document["floor"].AsInt32,
        //    Number = document["number"].AsInt32,
        //    Type = (AuditoriumTypes)document["number"].AsInt32
        //};
    }
}