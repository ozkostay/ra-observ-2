import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ServiceItem from './ServiceItem';
import {listServicesRequest} from '../actions/actionCreators';

export default function ServiceList() {
  const {services, loading, error, route} = useSelector(state => state.services);
  const dispatch = useDispatch();

  // dispatch(listServicesRequest());
  
  return (
    <>
      <ul>
        {services && services.map((item) => <ServiceItem key={item.id} item={item} />)}
      </ul>
    </>
  )
}
