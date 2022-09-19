import React from 'react'
import {RiDeleteBinLine}  from "react-icons/ri"
import { ImCheckboxChecked } from "react-icons/im"

function ToDoItemList(props) {
    const { toDoItem, deleteTodo, completeTodo, importantTodo } = props
  return (
    <div className={toDoItem.isCompleted ? 'todo_card complete': 'todo_card'}
        style={toDoItem.isImportant ?{background:"orange"} :{} }>
        {toDoItem.toDoItemDescription}
            <div className="todo_icons_container" >
                <button 
                onClick={() => 
                    importantTodo(toDoItem.id)} 
                    className="important_btn">
                        !
                    </button>
                <RiDeleteBinLine style={{ marginRight: 5 }} 
                    onClick={() => 
                    deleteTodo(toDoItem.id)}/>
                <ImCheckboxChecked 
                    onClick={() => 
                    completeTodo(toDoItem.id)}/>
        </div> 
    </div>
  )
}

export default ToDoItemList