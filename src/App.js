// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ToDoList from './components/ToDoList';
import AddToDoForm from './components/AddToDoForm';
import DateSelector from './components/DateSelector';
import DoneList from './components/DoneList';
import './style.css'; // Importing the CSS file

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [toDos, setToDos] = useState([]);
  const [doneToDos, setDoneToDos] = useState([]);

  useEffect(() => {
    // Load tasks from local storage
    const savedToDos = JSON.parse(localStorage.getItem(selectedDate)) || [];
    const savedDoneToDos = JSON.parse(localStorage.getItem(`${selectedDate}-done`)) || [];
    setToDos(savedToDos);
    setDoneToDos(savedDoneToDos);
  }, [selectedDate]);

  const addToDo = (text) => {
    const newToDo = { id: Date.now(), text };
    setToDos([...toDos, newToDo]);
    saveToDos([...toDos, newToDo]);
  };

  const markAsDone = (id) => {
    const toDo = toDos.find(todo => todo.id === id);
    const newDoneToDo = { ...toDo, done: true };
    setDoneToDos([...doneToDos, newDoneToDo]);
    setToDos(toDos.filter(todo => todo.id !== id));
    saveToDos(toDos.filter(todo => todo.id !== id));
    saveDoneToDos([...doneToDos, newDoneToDo]);
  };

  const deleteToDo = (id, isDone) => {
    if (isDone) {
      setDoneToDos(doneToDos.filter(todo => todo.id !== id));
      saveDoneToDos(doneToDos.filter(todo => todo.id !== id));
    } else {
      setToDos(toDos.filter(todo => todo.id !== id));
      saveToDos(toDos.filter(todo => todo.id !== id));
    }
  };

  const saveToDos = (todos) => {
    localStorage.setItem(selectedDate, JSON.stringify(todos));
  };

  const saveDoneToDos = (todos) => {
    localStorage.setItem(`${selectedDate}-done`, JSON.stringify(todos));
  };

  const handlePrevDate = () => {
    const currentDate = new Date(selectedDate);
    currentDate.setDate(currentDate.getDate() - 1);
    setSelectedDate(currentDate.toISOString().split('T')[0]);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>To-Do List</h1>
        <div>
        <button className="prevDateButton" onClick={handlePrevDate}>Previous Date</button>
          <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
        <AddToDoForm addToDo={addToDo} />
        <ToDoList toDos={toDos} markAsDone={markAsDone} deleteToDo={deleteToDo} />
        <DoneList doneToDos={doneToDos} deleteToDo={deleteToDo} />
      </div>
    </div>
  );
}

export default App;
