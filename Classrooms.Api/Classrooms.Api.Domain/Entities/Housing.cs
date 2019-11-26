using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace Classrooms.Api.Domain.Entities
{
    public class Housing
    {
        [BsonId(IdGenerator = typeof(StringObjectIdGenerator))]
        public string Id { get; set; }

        public int Number { get; set; }

        public ICollection<Auditorium> Auditoriums { get; set; }
    }
}