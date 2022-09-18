import React, { useState } from 'react'
import  './toDoStyles.css'


function ToDoForm(props) {
 const [toDoInput, setToDoInput] = useState("");
 
 const handleSubmit = (e) => {
 e.preventDefault(); 
 props.addToDo(toDoInput)
 setToDoInput('')
 }

 const onInputChange = (e) => {
  setToDoInput(e.target.value)
 }


  return (
      <form  onSubmit={handleSubmit}>
         <input 
         type='text'
         placeholder='Add todo item'
         value={toDoInput}
         name='todoText'
         className='todo_input'
         onChange={onInputChange}>
           
         </input> 
         <button className='todo_button'> Add</button>
      </form>
  )
}

export default ToDoForm