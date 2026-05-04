function CompletedTasks({ tasks, onBack }) {
  const completedTasks = tasks.filter(task => task.status === 'Completed');

  return (
    <div className="completed-tasks-container">
      <button onClick={onBack} style={{ marginBottom: '10px' }}>Back to Home</button>
      <h2>Completed Tasks</h2>
      
      <div className="table-container">
        {completedTasks.length === 0 ? (
          <div className="empty-state">No completed tasks yet.</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {completedTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default CompletedTasks;
