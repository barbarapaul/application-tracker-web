import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApplicationService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/api/v1/applications');
  }

  save(application: any): Observable<any> {
    return this.http.post('//localhost:8080/api/v1/applications', application);
  }
}
