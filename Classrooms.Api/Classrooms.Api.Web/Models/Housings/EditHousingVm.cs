using System.ComponentModel.DataAnnotations;

namespace Classrooms.Api.Web.Models.Housings
{
    public class EditHousingVm
    {
        [Required]
        public string Id { get; set; }

        [Required]
        public int? Number { get; set; }
    }
}