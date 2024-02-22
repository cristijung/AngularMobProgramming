import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('https://api.sampleapis.com/simpsons/characters');
  }
}
