import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bug } from './bug';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BugService {
  // Base Url
  baseUrl = 'http://localhost:3000';

  constructor(private  http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  //  POST
  CreateBug(data): Observable<Bug> {
    return this.http
      .post<Bug>(
        this.baseUrl + '/bugtracking/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  //  GET WITH ID
  GetIssue(id): Observable<Bug> {
    return this.http
      .get<Bug>(this.baseUrl + '/bugtracking/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  //  GET ALL
  GetIssues(): Observable<Bug> {
    return this.http
      .get<Bug>(this.baseUrl + '/bugtracking/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  //  PUT
  UpdateBug(id, data): Observable<Bug> {

  }

  // source: https://www.positronx.io/angular-httpclient-http-tutorial-build-consume-restful-api/
}
