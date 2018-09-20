namespace Classrooms.Api.Web.Models.Auditoriums
{
    public class AuditoriumVm
    {
        public string Id { get; set; }

        public string HousingId { get; set; }

        public int Number { get; set; }

        public int Floor { get; set; }

        public int Type { get; set; }
    }
}