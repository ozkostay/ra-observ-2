import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Error from './Error';
import { useDispatch, useSelector } from 'react-redux';
import {itemServiseRequest} from '../actions/actionCreators';
import Spinner from './Spinner';

export default function ServiceInfo() {
  const {service, loading, error, route} = useSelector(state => state.services);
  const dispatch = useDispatch();
  const {serviceId} = useParams();

  useEffect(() => {
    dispatch(itemServiseRequest(serviceId));
  },[])

  return (
    <>
      {/* <button onClick={fnClick}>!!!service</button> */}
      {error && <Error />}
      {loading && <Spinner />}
      {service && !error &&
          <article className="article">
            <h1 className="article__title">
              <p>Информация о сервисе:</p>
              <div>id: {service.id}</div>
              <div>Наименование услуги: {service.name}</div>
              <div>Цена: {service.price}</div>
            </h1>
          </article>}
    </>
  )
}
