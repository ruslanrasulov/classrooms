namespace Classrooms.Api.Web.Models.Auditoriums
{
    public class CreateAuditoriumsVm
    {
        public string HousingId { get; set; }

        public int Number { get; set; }

        public int Floor { get; set; }

        public int Type { get; set; }
    }
}