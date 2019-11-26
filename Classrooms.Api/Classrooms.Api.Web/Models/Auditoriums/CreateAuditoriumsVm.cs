using System.ComponentModel.DataAnnotations;

namespace Classrooms.Api.Web.Models.Auditoriums
{
    public class CreateAuditoriumsVm
    {
        [Required]
        public string HousingId { get; set; }

        [Required]
        public int? Number { get; set; }

        [Required]
        public int? Capacity { get; set; }

        [Required]
        public int? Floor { get; set; }

        [Required]
        public int? Type { get; set; }
    }
}