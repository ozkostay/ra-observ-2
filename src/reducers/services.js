import {
  LIST_SERVICES_REQUEST,
  LIST_SERVICES_SUCCESS,
  ITEM_SERVICE_REQUEST,
  ITEM_SERVICE_SUCCESS,
  ERROR_LIST_REQUEST,
  ERROR_ITEM_REQUEST
 } from '../actions/actionTypes'

const initialState = {
  services: null,
  service: null,
  loading: false,
  error: null,
};

export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_SERVICES_REQUEST:
      return {...state, services: null, loading: true, error: null};
    case LIST_SERVICES_SUCCESS:
      const {services} = action.payload;
      return {...state, services, service: null, loading: false, error: null};
    case ITEM_SERVICE_REQUEST:
      return {...state, loading: true, error: null};
    case ITEM_SERVICE_SUCCESS:
      const {service} = action.payload;
      console.log('555', service);
      return {...state, service, loading: false, error: null};
    case ERROR_LIST_REQUEST:
      return {...state, loading: false, error: true};
    case ERROR_ITEM_REQUEST:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
}
