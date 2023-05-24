import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {map, tap, retry, filter, debounceTime, switchMap, catchError, mergeMap} from 'rxjs/operators';
import {LIST_SERVICES_REQUEST, ITEM_SERVICE_REQUEST} from '../actions/actionTypes';
import {
  listServicesSuccess,
  itemServiseSuccess,
  errorServicesRequest,
  errorItemRequest,
} from '../actions/actionCreators';

export const listServicesRequestEpic = (action$) => action$.pipe(
  ofType(LIST_SERVICES_REQUEST),
  switchMap(o => ajax.getJSON(process.env.REACT_APP_SEARCH_URL)),
  map(o => listServicesSuccess(o)),
  catchError(err => of(errorServicesRequest(err))),
)

export const ItemServiceRequestEpic = (action$) => action$.pipe(
  ofType(ITEM_SERVICE_REQUEST),
  map(o => o.payload.id),
  tap(o => console.log(`${process.env.REACT_APP_SEARCH_URL}/${o}`)),
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/${o}`)),
  map(o => itemServiseSuccess(o)),
  catchError(err => of(errorItemRequest(err))),
);
