import React, { useEffect, useState } from 'react'
import ToDoForm from './toDoForm';
import ToDoItemList from './toDoItemList';
import axios from   'axios';

function ToDoHome() {
 const [toDoItems, setToDoItems] = useState([]);

 const baseURL = "https://localhost:7286/";

 React.useEffect(() => {
  getToDoList();
}, []);

 function getToDoList(){
  axios.get(baseURL+"ToDos").then((response) => {
    setToDoItems(response.data);
  });
 } 

 function createToDo(addToDo) {
   let data ={
    id: addToDo.id,
    toDoItemDescription: addToDo.toDoItemDescription,
    isCompleted: addToDo.isCompleted,
    isImportant: addToDo.isImportant,
    isDeleted: addToDo.isDeleted
    }
    console.log(data)
  axios.post(baseURL+"ToDos", data)
    .then((response) => {
      console.log(response)
      getToDoList();
    });
}

 const addToDo = (toDoInput) => {

   if(!toDoInput || /^\s*$/.test(toDoInput)){
     return
   }

   let id = 1;
   let  mxID = toDoItems.length;
   if(toDoItems.length > 0) {
     console.log(toDoItems[mxID-1].id)
     id = toDoItems[mxID-1].id + 1
   }
   let toDoItem = {id: id, toDoItemDescription:toDoInput, isCompleted: false, isImportant: false,isDeleted:false}
   createToDo(toDoItem);
  //  let newToDo = [toDoItem, ...toDoItems]
  //  setToDoItems(newToDo);
  //  console.log(newToDo)
}


function updateToDo(toDoItem){
  let data ={
    _id:toDoItem._id,
    id: toDoItem.id,
    toDoItemDescription: toDoItem.toDoItemDescription,
    isCompleted: toDoItem.isCompleted,
    isImportant: toDoItem.isImportant,
    isDeleted: toDoItem.isDeleted
    }
  axios
      .put(baseURL+"ToDos", data)
      .then((response) => {
      console.log(response)
      getToDoList();
      });
}
const deleteTodo = (id) =>{
  //let updatedToDoItems =  
  toDoItems.map((toDoItem) => {
    if(toDoItem.id ===id){
      if(toDoItem.isDeleted===false){
        toDoItem.isDeleted = true
      }
      updateToDo(toDoItem);
    }
    return toDoItem
  })
}

const completeTodo = (id) => {
  //let updatedToDoItems =
  toDoItems.map((toDoItem) => {
    if(toDoItem.id ===id){
      if(toDoItem.isCompleted===true){
        toDoItem.isCompleted = false
      }else{

        toDoItem.isCompleted = true
  console.log("clickeed id", toDoItem)
      }
      updateToDo(toDoItem);
    }
    return toDoItem

  })
  //setToDoItems(updatedToDoItems)
}

const importantTodo = (id) => {
  //let updatedToDoItems =
  toDoItems.map((toDoItem) => {
    if(toDoItem.id ===id){
      if(toDoItem.isImportant===true){
        toDoItem.isImportant = false
      }else{

        toDoItem.isImportant = true
         console.log("clickeed id", toDoItem)
      }
      updateToDo(toDoItem);
    }
    return toDoItem
  })
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