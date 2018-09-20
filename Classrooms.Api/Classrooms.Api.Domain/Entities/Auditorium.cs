﻿using Classrooms.Api.Domain.Enums;

namespace Classrooms.Api.Domain.Entities
{
    public class Auditorium
    {
        public string Id { get; set; }

        public string HousingId { get; set; }

        public int Number { get; set; }

        public int Floor { get; set; }

        public AuditoriumTypes Type { get; set; }
    }
}