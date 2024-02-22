import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceRickAndMortyService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}
