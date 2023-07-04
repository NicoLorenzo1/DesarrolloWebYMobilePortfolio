import { Injectable } from '@angular/core';
import { CarInterface } from './car-interface'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  url: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getCars(): Observable<CarInterface[]> {
    return this.http.get<CarInterface[]>(this.url);
  }
}
