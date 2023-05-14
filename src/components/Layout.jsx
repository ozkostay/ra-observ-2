import React from 'react';
import {Outlet} from 'react-router-dom';

export default function Layout() {
  
  return (
    <>
      <header>
        <h2>Крутой роутинг</h2>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        footer 2023
      </footer>  
    </>
    
  )
}