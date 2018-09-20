using Classrooms.Api.DataAccess.Settings;
using MongoDB.Driver;

namespace Classrooms.Api.DataAccess.Implementations
{
    internal abstract class BaseDao
    {
        protected BaseDao(IDataAccessSettings settings)
        {
            Client = new MongoClient(settings.ConnectionString);
        }

        protected IMongoClient Client { get; }
    }
}