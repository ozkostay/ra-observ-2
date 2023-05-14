import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

export default function ServiceList() {
  
  const [services, setServices] = useState([]);
  const URL = 'http://localhost:7070/api/services';
  // const URL = 'https://jsonplaceholder.typicode.com/posts';
  
  useEffect(() => {
      fetch(URL)
      .then((response) => {
        if (response.status !== 200) {
          return [];
        } else {
          return response.json();
        }
      })
      .then((data) => setServices(data))
  },[])
  
  return (
    <>
      <ul>
        {services && services.map((item) => <ServiceItem key={item.id} item={item} />)}
      </ul>
    </>
  )
}
