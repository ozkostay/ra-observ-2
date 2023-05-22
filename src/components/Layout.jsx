import React from 'react';
import {Outlet} from 'react-router-dom';
import Error from './Error';

export default function Layout() {
  
  return (
    <>
      <header>
        <h2>Крутой роутинг</h2>
        {/* <Error /> */}
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