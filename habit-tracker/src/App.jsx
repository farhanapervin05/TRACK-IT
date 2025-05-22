import { useState } from 'react';
import HabitForm from './components/HabitForm';
import './components/HabitForm.css';
import HabitList from './components/HabitList';
import './styles/App.css';

function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const toggleHabit=(id)=>{
    const updated=habits.map((habit)=>habit.id===id?{...habit,done: ! habit.done}:habit)
    setHabits(updated)
  }

  const deleteHabit = (id) => {
    const filtered = habits.filter((habit) => habit.id !== id);
    setHabits(filtered);
  };

  return (
    <div className="app">
      <h1>Habit Tracker</h1>
      <div className="habit-container">
        <HabitForm onAdd={addHabit} />
        <HabitList
          habits={habits}
          onToggle={toggleHabit}
          onDelete={deleteHabit}
        />
      </div>
    </div>
  );  
}

export default App;