import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Fraternity } from '../_models/Fraternity';
import { Observable } from 'rxjs';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class FraternityService {

  constructor(private http: HttpClient) { }

  Fraternity: Fraternity[];

  baseURL: string = 'http://localhost:5000/api/fraternities';
  baseUrlUsers: string = 'http://localhost:5000/api/user';

  getAllFraternity(): Observable<Fraternity[]> {
    return this.http.get<Fraternity[]>(this.baseURL);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/${id}`);
  }

  post(frat: Fraternity) {
    return this.http.post(this.baseURL, frat);
  }

  put(frat: Fraternity) {
    return this.http.put(`${this.baseURL}/${frat.id}`, frat);
  }

}
