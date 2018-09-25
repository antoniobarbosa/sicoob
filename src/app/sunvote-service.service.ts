import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SunvoteServiceService {
_path;
  constructor(private http: HttpClient) { 
    this._path="http://localhost:8000"
  }
  getVotes(): Observable<any> {
    return this.http.get(`${this._path}/GetVotes`)
  }

}
