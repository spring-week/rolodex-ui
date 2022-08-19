import { url } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/user';

// the entire purpose is to make HTTPRequests to our server
// Injectable allows us to use a singleton instance of this class within other components

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // http://localhost:5000/api/users
  userUrl: string = url + `/users`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  // any method that invokes this, must subscribe to the return value
  findAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.userUrl, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  findUserById(id: number): Observable<User> {
    // http://localhost:5000/api/users/3
    return this.http
      .get<User>(`${this.userUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteUserById(id: number): Observable<any> {
    // http://localhost:5000/api/users/3
    return this.http
      .delete(`${this.userUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  registerUser(user: User): Observable<User> {
    // 3 params: url, request body, options (headers)
    return this.http
      .post<User>(`${this.userUrl}/add`, user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * This is a custom method that is passed as a callback to the
   * catchError() method in all of our HTTP methods in this Service.
   *
   * TypeScript introduced a new type never, which indicates the values that will never occur.
   *
   * The never type is used when you are sure that something is never going to occur.
   * For example, you write a function which will not return to its end point or
   * always throws an exception, hence the return type is Observable<never>
   */
  private handleError(httpError: HttpErrorResponse): Observable<never> {

    if (httpError.error instanceof ErrorEvent) {
      console.log('an error occured: ', httpError.error.message);
    } else {
      console.error(`
        Backend returned code ${httpError.status}
        body was: ${httpError.error}
      `);
    }

    return throwError(() => new Error(`something didn't work quite right`));
  }
}
