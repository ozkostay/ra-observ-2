import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {map, tap, retry, filter, debounceTime, switchMap, catchError, mergeMap} from 'rxjs/operators';
import {LIST_SERVICES_REQUEST, ITEM_SERVICE_REQUEST} from '../actions/actionTypes';
import {
  listServicesSuccess,
  itemServiseSuccess,
  errorServicesRequest,
} from '../actions/actionCreators';

export const listServicesRequestEpic = (action$) => action$.pipe(
  ofType(LIST_SERVICES_REQUEST),
  switchMap(o => ajax.getJSON(process.env.REACT_APP_SEARCH_URL)),
  map(o => listServicesSuccess(o)),
  catchError(err => {
    console.log('ERRORRRR');
    map(o => errorServicesRequest(o))
  }),
)

export const ItemServiceRequestEpic = (action$) => action$.pipe(
  //tap(o => console.log('222',action$)),
  ofType(ITEM_SERVICE_REQUEST),
  //tap(o => console.log('222-2')),
  map(o => o.payload.id),
  map(o => new URLSearchParams({q: o})),
  //tap(o => console.log('URL', o)),
  map(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/${o}`)),
  map(o => itemServiseSuccess(o)),
);
