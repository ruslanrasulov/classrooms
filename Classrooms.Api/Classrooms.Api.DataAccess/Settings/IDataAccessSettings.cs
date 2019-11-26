namespace Classrooms.Api.DataAccess.Settings
{
    public interface IDataAccessSettings
    {
        string ConnectionString { get; }

        string ClassroomsDatabaseName { get; }
    }
}