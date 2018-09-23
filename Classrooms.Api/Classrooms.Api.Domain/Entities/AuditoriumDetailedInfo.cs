using Classrooms.Api.Domain.Enums;

namespace Classrooms.Api.Domain.Entities
{
    public class AuditoriumDetailedInfo
    {
        public string Id { get; set; }

        public int Number { get; set; }

        public int HousingNumber { get; set; }

        public int Capacity { get; set; }

        public int Floor { get; set; }

        public AuditoriumTypes Type { get; set; }
    }
}