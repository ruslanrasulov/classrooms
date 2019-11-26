using System.ComponentModel.DataAnnotations;

namespace Classrooms.Api.Web.Models.Housings
{
    public class CreateHousingVm
    {
        [Required]
        public int? Number { get; set; }
    }
}