import './HabitList.css';

function HabitList({ habits, onToggle, onDelete }) {
  if (habits.length === 0) {
    return <p className="empty-msg">No habits yet. Add some! Don’t be lazy.</p>;
  }

  return (
    <ul className="habit-list">
      {habits.map((habit) => (
        <li key={habit.id} className="habit-item">
          <span className="habit-title">{habit.title}</span>

          <div className="actions">
            <span
              className="status"
              onClick={() => onToggle(habit.id)}
            >
              {habit.done ? '✅' : '❌'}
            </span>
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation(); 
                onDelete(habit.id);
              }}
            >
              🗑️
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HabitList;