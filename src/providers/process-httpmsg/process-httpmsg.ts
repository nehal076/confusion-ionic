import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

/*
  Generated class for the ProcessHttpmsgProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProcessHttpmsgProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProcessHttpmsgProvider Provider');
  }

  public extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  public handleError (error: HttpErrorResponse | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if(error.error instanceof ErrorEvent) {
  		errMsg = error.error.message;
  	}else {
  		errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
  	}

  	console.error(errMsg);
  	return Observable.throw(errMsg);
  }
}