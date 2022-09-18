import React, { useState } from 'react'
import ToDoForm from './toDoForm';
import ToDoItemList from './toDoItemList';

function ToDoHome() {
 const [toDoItems, setToDoItems] = useState([]);


 const addToDo = (toDoInput) => {

   if(!toDoInput || /^\s*$/.test(toDoInput)){
     return
   }

   let id = 1;
   if(toDoItems.length > 0) {
     id = toDoItems[0].id + 1
   }
   let toDoItem = {id: id, toDoItemDescription:toDoInput, completed: false, important: false}
   let newToDo = [toDoItem, ...toDoItems]
   setToDoItems(newToDo);
   console.log(newToDo)
}

const deleteTodo = (id) =>{
  let updatedToDoItems = [...toDoItems].filter((toDoItem) => toDoItem.id!==id)
  setToDoItems(updatedToDoItems);
}

const completeTodo = (id) => {

}

  return (
    <div className="todo_form">
      <h1> Add Your To Dos..Plan the Day</h1>
      <ToDoForm addToDo={addToDo}/>
      {toDoItems.map((toDoItem,index)=>{        
         return(
        <ToDoItemList  
        key={index,toDoItem.id  }
        toDoItem={toDoItem}
        deleteTodo = {deleteTodo}
        completeTodo = {completeTodo}
        />
         )
        })}
    </div> 
  )
}

export default ToDoHome