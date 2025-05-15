import { useState } from 'react';
import './HabitForm.css';

function HabitForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      setError('Habit can’t be empty !');
      return;
    }

    const newHabit = {
      id: Date.now(),
      title: title.trim(),
      done: false,
      createdAt: new Date(),
    };

    onAdd(newHabit);
    setTitle('');
    setError('');
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a habit..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Habit</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default HabitForm;