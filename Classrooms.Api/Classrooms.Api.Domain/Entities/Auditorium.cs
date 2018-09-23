using Classrooms.Api.Domain.Enums;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace Classrooms.Api.Domain.Entities
{
    public class Auditorium
    {
        [BsonId(IdGenerator = typeof(StringObjectIdGenerator))]
        public string Id { get; set; }

        public string HousingId { get; set; }

        public int Number { get; set; }

        public int Floor { get; set; }

        public AuditoriumTypes Type { get; set; }
    }
}