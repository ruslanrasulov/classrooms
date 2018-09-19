using Classrooms.Api.Domain.Enums;

namespace Classrooms.Api.Domain
{
    public class Auditorium
    {
        public int Id { get; set; }

        public int HousingId { get; set; }

        public int Number { get; set; }

        public int Floor { get; set; }

        public AuditoriumTypes Type { get; set; }
    }
}