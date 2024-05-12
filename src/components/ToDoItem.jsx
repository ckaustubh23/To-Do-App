// ToDoItem.js
import React from 'react';
import '../style.css';


function ToDoItem({ todo, markAsDone, deleteToDo }) {
  const handleMarkAsDone = () => {
    markAsDone(todo.id);
  };

  const handleDelete = () => {
    deleteToDo(todo.id, todo.done);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.done} onChange={handleMarkAsDone} />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      <button className='deleteButton' onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ToDoItem;
