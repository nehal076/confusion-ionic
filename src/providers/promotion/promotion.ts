import { Injectable } from '@angular/core';
import { Promotion } from '../../shared/promotion';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the PromotionProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PromotionProvider {

  constructor(public http: HttpClient,
              private processHTTPMsgService: ProcessHttpmsgProvider) { }

  getPromotions(): Observable<Promotion[] | any> {
    return this.http.get(baseURL + 'promotions')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPromotion(id: number): Observable<Promotion | any> {
    return  this.http.get(baseURL + 'promotions/'+ id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPromotion(): Observable<Promotion | any> {
    return this.http.get(baseURL + 'promotions?featured=true')
    .pipe(map(res => res[0] ))
  	.pipe(catchError(this.processHTTPMsgService.handleError));
  }

}