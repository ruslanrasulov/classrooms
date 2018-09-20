using System;
using System.Collections.Generic;
using Classrooms.Api.DataAccess.Interfaces;
using Classrooms.Api.Domain.Entities;
using MongoDB.Driver;

namespace Classrooms.Api.DataAccess.Implementations
{
    internal class AuditoriumsDao : BaseDao, IAuditoriumsDao
    {
        private readonly string _connectionString;

        
}