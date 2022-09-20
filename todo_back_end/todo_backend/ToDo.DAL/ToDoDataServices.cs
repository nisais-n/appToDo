using System;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using ToDos.BusinessObjects;

namespace ToDos.DAL
{
    public class ToDoDataServices : IToDoDataServices
    {
        private readonly IMongoCollection<ToDo> _toDos;

        public ToDoDataServices(IOptions<ToDoDBConfig> toDoDBConfig)
        {
            var client = new MongoClient(toDoDBConfig.Value.Connection_String);
            var database = client.GetDatabase(toDoDBConfig.Value.Database_Name);
            _toDos = database.GetCollection<ToDo>(toDoDBConfig.Value.Collection_Name);
        }

        public IMongoCollection<ToDo> GetToDoCollection() => _toDos;
        
    }
}

