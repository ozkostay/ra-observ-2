import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ServiceItem from './ServiceItem';
import {listServicesRequest} from '../actions/actionCreators';
import Error from './Error';

export default function ServiceList() {
  const {services, loading, error, route} = useSelector(state => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listServicesRequest());
  },[])

  return (
    <>
      <ul>
        {error && <Error />}
        {loading && <h1>...LOADING</h1>}
        {services && services.map((item) => <ServiceItem key={item.id} item={item} />)}
      </ul>
    </>
  )
}
