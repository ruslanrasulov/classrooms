using System.Collections.Generic;
using Classrooms.Api.Domain.Enums;

namespace Classrooms.Api.Domain.Entities
{
    public class HousingDetailedInfo
    {
        public int Number { get; set; }

        public IDictionary<AuditoriumTypes, int> CountPerType { get; set; }

        public int TotalCapacity { get; set; }
    }
}