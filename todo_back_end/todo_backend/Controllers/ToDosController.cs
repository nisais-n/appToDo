using Microsoft.AspNetCore.Mvc;
using ToDos.BusinessObjects;
using ToDos.Interfaces;

namespace ToDos.WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ToDosController : ControllerBase
{
    private readonly IToDoServices _toDoServices;

    public ToDosController(IToDoServices toDoServices)
    {
        _toDoServices = toDoServices; 
    }

    [HttpGet]
    public IActionResult GetToDos()
    {
        return Ok(_toDoServices.GetToDos());
    }

    [HttpGet("{id}",Name ="GetToDo")]
    public IActionResult GetToDo(string id)
    {
        return Ok(_toDoServices.GetToDo(id));
    }


    [HttpPost]
    public IActionResult AddToDo(ToDo todo)
    {
        _toDoServices.AddToDo(todo);
        return CreatedAtRoute("GetToDo", new { id = todo.id }, todo);
    }

    [HttpPut]
    public IActionResult UpdateToDo(ToDo todo)
    {
        return Ok(_toDoServices.UpdateToDo(todo));
    }
}

 