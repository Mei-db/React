import { useState } from 'react';
import ItemCard from './components/ItemCard';
import Pagination from './components/Pagination';
import './App.css';

// Generate 50 mock items
const mockData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  role: index % 3 === 0 ? 'Admin' : index % 2 === 0 ? 'Editor' : 'Viewer',
}));

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(mockData.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Pagination Example</h1>
      </header>
      
      <main>
        <div className="item-list">
          {currentItems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
        
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </main>
    </div>
  );
}

export default App;
