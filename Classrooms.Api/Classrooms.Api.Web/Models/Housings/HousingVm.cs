using System.Collections.Generic;
using Classrooms.Api.Domain.Entities;

namespace Classrooms.Api.Web.Models.Housings
{
    public class HousingVm
    {
        public string Id { get; set; }

        public int Number { get; set; }

        public IEnumerable<Auditorium> Auditoriums { get; set; }
    }
}