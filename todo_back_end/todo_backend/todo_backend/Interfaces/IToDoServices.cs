using System;
using ToDos.BusinessObjects;

namespace ToDos.Interfaces
{
    public interface IToDoServices
    {
        List<ToDo> GetToDos();
        ToDo AddToDo(ToDo todo);
        ToDo GetToDo(string id);
        ToDo UpdateToDo(ToDo todo);
         
    }
}

