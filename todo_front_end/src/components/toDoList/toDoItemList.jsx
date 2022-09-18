import React from 'react'
import {RiDeleteBinLine}  from "react-icons/ri"
import { BiCheckSquare } from "react-icons/bi"

function ToDoItemList(props) {
    const { toDoItem, deleteTodo, completeTodo, importantTodo } = props
  return (
    <div className="todo_card">
        {toDoItem.toDoItemDescription}
            <div className="todo_icons_container" >
                <button 
                onClick={() => 
                    importantTodo(toDoItem.id)} 
                    className="important-btn">
                        !
                    </button>
                <RiDeleteBinLine style={{ marginRight: 5 }} 
                    onClick={() => 
                    deleteTodo(toDoItem.id)}/>
                <BiCheckSquare 
                    onClick={() => 
                    completeTodo(toDoItem.id)}/>
        </div> 
    </div>
  )
}

export default ToDoItemList