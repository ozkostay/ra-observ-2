import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ServiceList from './components/ServiceList';
import ServiceInfo from './components/ServiceInfo';
import Error from './components/Error';
import Layout from './components/Layout';

// const setActive = ({isActive}) => isActive ? 'menu__item-active' : 'menu__item';
// const URL = "http://localhost:7070/api/services"

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ServiceList />} />
          <Route path='/error' element={<Error />} />
          <Route path='/service/:serviceId' element={<ServiceInfo />} />
        </Route>
      </Routes>
      </>
      
  );
}
