using System;
using MongoDB.Driver;
using ToDos.BusinessObjects;

namespace ToDos.DAL
{
    public interface IToDoDataServices
    {
        IMongoCollection<ToDo> GetToDoCollection();
    }
}

