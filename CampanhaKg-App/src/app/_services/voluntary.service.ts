import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voluntary } from '../_models/Voluntary';
import { Observable } from 'rxjs';
import { Image } from '../_models/Image';

@Injectable({
  providedIn: 'root'
})
export class VoluntaryService {

  constructor(private http: HttpClient) { }

  baseURL = 'http://localhost:5000/api/vols';
  baseURLImg = 'http://localhost:5000/api/vols/getimg/1';


  Volunteers: Voluntary;

  GetAllVoluntary(): Observable<Voluntary[]> {
    return this.http.get<Voluntary[]>(this.baseURL);
  }

  GetVoluntaryById(id: number): Observable<Voluntary[]> {
    return this.http.get<Voluntary[]>(`${this.baseURL}/${id}`);
  }

  GetImgsApp(): Observable<Image[]> {
    return this.http.get<Image[]>(this.baseURLImg)
  }

  postVoluntary(voluntary: Voluntary) {
    return this.http.post(this.baseURL, voluntary)
  }

  DeleteVoluntary(voluntary: Voluntary) {
    return this.http.delete(`${this.baseURL}/${voluntary.id}`);
  }

  putVoluntary(voluntary: Voluntary) {
    return this.http.put(`${this.baseURL}/${voluntary.id}`, voluntary);
  }

}
