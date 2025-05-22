import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageContext = createContext();

function PageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(() => {
    
    const path = location.pathname;
    if (path === '/events') {
      setCurrentPage('home');
    } else if (path === '/bookings') {
      setCurrentPage('bookings');
    } else if (path === '/invoices') {
      setCurrentPage('invoices');
    } else {
      setCurrentPage('');
    }
  }, [location]);

  return (
    <PageContext.Provider value={{ currentPage }}>
      {children}
    </PageContext.Provider>
  );
}

export default PageProvider;

export function usePageContext() {
  return useContext(PageContext);
}