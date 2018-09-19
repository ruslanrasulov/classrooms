using System.Collections.Generic;

namespace Classrooms.Api.Domain.Entities
{
    public class Housing
    {
        public int Id { get; set; }

        public int Number { get; set; }

        IEnumerable<Auditorium> Auditoriums { get; set; }
    }
}