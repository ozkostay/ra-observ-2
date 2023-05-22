import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ServiceItem from './ServiceItem';
import {listServicesRequest} from '../actions/actionCreators';

export default function ServiceList() {
  const {services, loading, error, route} = useSelector(state => state.services);
  const dispatch = useDispatch();

  
  // dispatch(listServicesRequest());
  if (services) {
    console.log('11111 Empty', services);
    dispatch(listServicesRequest());
  } else {
    console.log('22222 NOT Empty', services);
  }

  // console.log('1111111111', services)
  
  return (
    <>
      <ul>
        {services && services.map((item) => <ServiceItem key={item.id} item={item} />)}
      </ul>
    </>
  )
}
