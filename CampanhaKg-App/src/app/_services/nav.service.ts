import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  baseURL: string = 'http://localhost:5000/api/fraternities';

  constructor(private http: HttpClient) { }

  checkUsrRegistredFraternity(idUsr: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseURL}/${idUsr}/registred`)
  }




}
