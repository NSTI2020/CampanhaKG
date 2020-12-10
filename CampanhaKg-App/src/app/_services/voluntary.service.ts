import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voluntary } from '../_models/Voluntary';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoluntaryService {

  constructor(private http: HttpClient) { }

  baseURL = 'http://localhost:5000/api/vols';
  Volunteers: Voluntary;

  GetAllVoluntary(): Observable<Voluntary[]> {
    return this.http.get<Voluntary[]>(this.baseURL);
  }

  GetAllVoluntaryById(id: number): Observable<Voluntary[]> {
    return this.http.get<Voluntary[]>(`${this.baseURL}/${id}`);
  }




}
