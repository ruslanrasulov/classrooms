namespace Classrooms.Api.DataAccess.Settings
{
    public class DataAccessSettings : IDataAccessSettings
    {
        public string ConnectionString { get; set; }

        public string ClassroomsDatabaseName { get; set; }
    }
}