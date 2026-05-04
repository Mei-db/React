import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';
import CompletedTasks from './components/CompletedTasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentView, setCurrentView] = useState('home');

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Task Manager</h1>
      </header>

      {currentView === 'home' ? (
        <>
          <TaskForm 
            onAddTask={handleAddTask} 
            onViewCompleted={() => setCurrentView('completed')} 
          />
          <TaskTable tasks={tasks} />
        </>
      ) : (
        <CompletedTasks 
          tasks={tasks} 
          onBack={() => setCurrentView('home')} 
        />
      )}
    </div>
  );
}

export default App;
