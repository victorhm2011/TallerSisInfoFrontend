import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HellowordService {

  constructor(private http: HttpClient) { }

  public getHelloWord(): Observable<any> {
    const url = `${environment.baseApiUrl}/helloWorld`;
    return this.http.get<any>(url).pipe();
  }
}
