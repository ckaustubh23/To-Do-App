// DoneList.js
import React from 'react';
import ToDoItem from './ToDoItem';
import '../style.css';


function DoneList({ doneToDos, deleteToDo }) {
  return (
    <div>
      <h2>Done</h2>
      {doneToDos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} deleteToDo={deleteToDo} />
      ))}
    </div>
  );
}

export default DoneList;
