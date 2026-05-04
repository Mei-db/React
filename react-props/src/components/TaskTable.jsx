function TaskTable({ tasks }) {
  return (
    <div className="task-table-container">
      <h2>All Tasks</h2>
      
      <div className="table-container">
        {tasks.length === 0 ? (
          <div className="empty-state">No tasks available. Add some tasks above!</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
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

export default TaskTable;
