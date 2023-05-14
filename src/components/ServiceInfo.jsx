import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ServiceInfo() {
  const {serviceId} = useParams();
  const URL = 'http://localhost:7070/api/services';
  console.log('WWWWWWW', serviceId);
  const [service, setService] = useState(null);
  
  useEffect(() => {
    fetch(`${URL}/${serviceId}`)
    .then((response) => {
      if (response.status !== 200) {
        return null;
      } else {
        return response.json();
      }
    })
    .then((data) => setService(data))
},[serviceId])

  return (
    <article className="article">
      <h1 className="article__title">
        <p>Информация о сервисе</p>
        {(service) && service.name}
      </h1>
    </article>
  )
}
