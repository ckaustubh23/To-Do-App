// ToDoList.js
import React from 'react';
import ToDoItem from './ToDoItem';
import '../style.css';


function ToDoList({ toDos, markAsDone, deleteToDo }) {
  return (
    <div>
      <h2>To-Do</h2>
      {toDos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} markAsDone={markAsDone} deleteToDo={deleteToDo} />
      ))}
    </div>
  );
}

export default ToDoList;
