import { useState } from 'react';

function TaskForm({ onAddTask, onViewCompleted }) {
  const [taskName, setTaskName] = useState('');
  const [status, setStatus] = useState('In Progress');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    onAddTask({
      id: Date.now(),
      name: taskName,
      status: status
    });

    setTaskName('');
    setStatus('In Progress');
  };

  return (
    <div className="task-form-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <h2>Add a New Task</h2>
        <button type="button" onClick={onViewCompleted}>View Completed</button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="e.g., Learn React"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
