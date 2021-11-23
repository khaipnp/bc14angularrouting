import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

let urlAPI = '';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
    urlAPI = environment.urlAPI;
  }

  get(uri: any): Observable<any> {
    const url = `${urlAPI}/${uri}`;
    return this.http.get(url).pipe(
      tap(() => {}),
      catchError((err: any) => {
        return this.handleError(err);
      })
    );
  }

  post(uri: any, data: any): Observable<any> {
    const url = `${urlAPI}/${uri}`;
    return this.http.post(url, data).pipe(
      tap(() => {}),
      catchError((err: any) => {
        return this.handleError(err);
      })
    );
  }

  handleError(err: any) {
    return throwError(err);
  }
}
