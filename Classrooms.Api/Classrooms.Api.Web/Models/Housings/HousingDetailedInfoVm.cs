﻿namespace Classrooms.Api.Web.Models.Housings
{
    public class HousingDetailedInfoVm
    {
        public string Id { get; set; }

        public int Number { get; set; }

        public int ComputerCapacity { get; set; }

        public int LaboratoryCapacity { get; set; }

        public int LectureCapacity { get; set; }

        public int AuditoriumsCapacity { get; set; }
    }
}