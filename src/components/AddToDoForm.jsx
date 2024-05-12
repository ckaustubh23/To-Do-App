// AddToDoForm.js
import React, { useState } from 'react';
import '../style.css';

function AddToDoForm({ addToDo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addToDo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button className="addButton" type="submit">Add</button>
    </form>
  );
}

export default AddToDoForm;
