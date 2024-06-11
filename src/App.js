import React, { useState } from 'react';
import './App.css';
import { Mynav } from './components/Mynav';
import { Slider } from './components/Slider';
import { Productes } from './components/products/Productes';
import { Footer } from './components/Footer';
import { StudentForm } from './components/StudentForm';
import { StudentData } from './components/StudentData';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleDelete = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      {/*
      <Mynav />
      <Slider />
      <Productes />
      <Footer />
      */}

      {/* lab Day 2 */}

      
      <div className="centered-form">
        <StudentForm addStudent={addStudent} students={students} />
      </div>
      <StudentData students={students} handleDelete={handleDelete} />
    </div>


  );
}

export default App;
