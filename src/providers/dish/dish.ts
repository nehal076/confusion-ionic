import { Injectable } from '@angular/core';
import { Dish } from '../../shared/dish';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the DishProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DishProvider {

  constructor(public http: HttpClient,
              private processHTTPMsgService: ProcessHttpmsgProvider) { }

  getDishes(): Observable<Dish[] | any> {
    return this.http.get(baseURL + 'dishes')
  	.pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDish(id: number): Observable<Dish | any> {
  	return this.http.get<Dish>(baseURL + 'dishes/' + id)
  	.pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish | any> {
  	return this.http.get<Dish[]>(baseURL + 'dishes?featured=true')
  	.pipe(map(res => res[0] ))
  	.pipe(catchError(this.processHTTPMsgService.handleError));
  }

}