import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getListCourse(): Observable<any> {
    const url =
      'http://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01';
    const urlDemo =
      'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01';
    return this.http.get(urlDemo).pipe(
      tap((result) => {
        console.log(result);
      }),
      catchError((err: any) => {
        return this.handleError(err);
      })
    );
  }
  handleError(err: any) {
    return throwError(err);
  }
}
