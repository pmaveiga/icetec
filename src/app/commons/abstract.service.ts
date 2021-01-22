import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

export abstract class AbstractService<E> {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'json'
    }),
  };

  public baseUrl: string;

  protected constructor(protected http: HttpClient, private path: string, protected object: E) {
    this.baseUrl = `${ environment.serverUrl }/${ path }/`;
  }

  list(): Observable<E> {
    return this.http.get(this.baseUrl, { headers: this.httpOptions.headers }).pipe(
      // @ts-ignore
      map((response: any) => new this.object(response))
    );
  }

  get(id: number): Observable<E> {
    // @ts-ignore
    return this.http.get(`${ this.baseUrl }${ id }`).pipe(map((response: any) => new this.object(response.data || response)));
  }

  save(object: E): Observable<E> {
    if (object['id']) {
      return this.http.put<E>(`${ this.baseUrl }${ object['id'] }`, object, this.httpOptions);
    }

    return this.http.post<E>(this.baseUrl, object, this.httpOptions);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete(`${ this.baseUrl }${ id }`, { headers: this.httpOptions.headers })
      .pipe(map((response: any) => response.ok));
  }
}
