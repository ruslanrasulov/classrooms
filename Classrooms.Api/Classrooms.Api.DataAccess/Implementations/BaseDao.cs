using Classrooms.Api.DataAccess.Settings;
using Classrooms.Api.Domain.Entities;
using MongoDB.Driver;

namespace Classrooms.Api.DataAccess.Implementations
{
    internal abstract class BaseDao
    {
        private readonly IDataAccessSettings _settings;

        protected BaseDao(IDataAccessSettings settings)
        {
            _settings = settings;
            Client = new MongoClient(settings.ConnectionString);
        }

        protected IMongoClient Client { get; }

        protected IMongoCollection<Housing> Housings => Client.GetDatabase(_settings.ClassroomsDatabaseName).GetCollection<Housing>("housings");
    }
}