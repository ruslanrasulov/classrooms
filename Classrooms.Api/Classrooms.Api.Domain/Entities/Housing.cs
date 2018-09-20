using System.Collections.Generic;

namespace Classrooms.Api.Domain.Entities
{
    public class Housing
    {
        public string Id { get; set; }

        public int Number { get; set; }

        public IEnumerable<Auditorium> Auditoriums { get; set; }
    }
}