using System.Security.Cryptography;
using MongoDB.Driver;
using ToDos.BusinessObjects;
using ToDos.DAL;
using ToDos.Interfaces;

namespace ToDos.ApplicationServices;

public class ToDoApplicationServices : IToDoServices
{
    private readonly IMongoCollection<ToDo> _toDos;

    public ToDoApplicationServices(IToDoDataServices toDoDataServices)
    {
        _toDos = toDoDataServices.GetToDoCollection();

    }

    public ToDo AddToDo(ToDo todo)
    {
        _toDos.InsertOne(todo);
        return todo;
    }

    public ToDo GetToDo(string id) => _toDos.Find(todo => todo.id == Convert.ToInt64(id)).First();

    //public List<ToDo> GetToDos() =>  _toDos.Find(_=>true).ToList();

    public List<ToDo> GetToDos() => _toDos.Find(todo => todo.isDeleted ==false).ToList();

    public ToDo UpdateToDo(ToDo todo)
    {
        GetToDo(Convert.ToString(todo.id));
        _toDos.ReplaceOne(newTodo => newTodo.id==todo.id, todo);
        return todo;
    }
}