import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  private readonly baseApiUrl = environment.baseUrl;
  errorMsg = 'An error occured, please check the console';

  constructor(private httpClient: HttpClient) {}

  /**
   * Get request
   * @param {string} path The API endpoint path to retrieve data from.
   * @returns {Observable<TResponse>} An Observable response containing the retrieved data.
   */
  public get<TResponse>(path: string): Observable<TResponse> {
    return this.httpClient.get<TResponse>(this.baseApiUrl + path).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(this.errorMsg, error);
        return throwError(() => new Error(error.message));
      })
    );
  }

  public getPublicReposFromUser<TResponse>(username: string) : Observable<TResponse>{
    return this.get('users/'+username+'/repos');
  }
}
