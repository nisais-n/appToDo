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
   let toDoItem = {id: id, toDoItemDescription:toDoInput, isCompleted: false, isImportant: false}
   let newToDo = [toDoItem, ...toDoItems]
   setToDoItems(newToDo);
   console.log(newToDo)
}

const deleteTodo = (id) =>{
  let updatedToDoItems = [...toDoItems].filter((toDoItem) => toDoItem.id!==id)
  setToDoItems(updatedToDoItems);
}

const completeTodo = (id) => {
  let updatedToDoItems =toDoItems.map((toDoItem) => {
    if(toDoItem.id ===id){
      if(toDoItem.isCompleted===true){
        toDoItem.isCompleted = false
      }else{

        toDoItem.isCompleted = true
  console.log("clickeed id", toDoItem)
      }
    }
    return toDoItem
  })
  setToDoItems(updatedToDoItems)
}

const importantTodo = (id) => {
  let updatedToDoItems =toDoItems.map((toDoItem) => {
    if(toDoItem.id ===id){
      if(toDoItem.isImportant===true){
        toDoItem.isImportant = false
      }else{

        toDoItem.isImportant = true
  console.log("clickeed id", toDoItem)
      }
    }
    return toDoItem
  })
  setToDoItems(updatedToDoItems)
}

  return (
    <div className="todo_form">
      <h1> Add Your To Dos..Plan the Day</h1>
      <ToDoForm addToDo={addToDo}/>
      <hr className="seperatorLine"/>
      {toDoItems.map((toDoItem,index)=>{        
         return(
        <ToDoItemList  
        key={index+toDoItem.id}
        toDoItem={toDoItem}
        deleteTodo = {deleteTodo}
        completeTodo = {completeTodo}
        importantTodo = {importantTodo}
        />
         )
        })}
    </div> 
  )
}

export default ToDoHome