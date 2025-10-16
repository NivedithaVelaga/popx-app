import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import PageNav from './components/PageNav';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <Welcome onNavigate={setCurrentPage} currentPage={currentPage} />;
      case 'login':
        return <Login onNavigate={setCurrentPage} />;
      case 'signup':
        return <Signup onNavigate={setCurrentPage} />;
      case 'profile':
        return <Profile onNavigate={setCurrentPage} />;
      default:
        return <Welcome onNavigate={setCurrentPage} currentPage={currentPage} />;
    }
  };

  const getPageIndex = () => {
    const pages = ['welcome', 'login', 'signup', 'profile'];
    return pages.indexOf(currentPage);
  };

  const handleDotClick = (page) => {
    const pages = ['welcome', 'login', 'signup', 'profile'];
    setCurrentPage(pages[page]);
  };

  return (
    <div className="App">
      <main className="main-content">
        {(() => {
          // ensure Welcome receives currentPage so it can compute prev/next
          if (currentPage === 'welcome') return <Welcome onNavigate={setCurrentPage} currentPage={currentPage} />;
          return renderPage();
        })()}
        
        {/* Navigation dots removed per request */}
        {/* Page navigation (home / prev / counter / next) shown on every page */}
        <PageNav currentPage={currentPage} onNavigate={setCurrentPage} />
      </main>
    </div>
  );
}

export default App;