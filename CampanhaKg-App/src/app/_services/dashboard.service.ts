import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from '../_models/Campaign';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseURLFraternity: string = 'http://localhost:5000/api/fraternities';
  private baseUrlCampaign: string = 'http://localhost:5000/api/dashboard';

  constructor(private http: HttpClient) { }

  checkUsrRegistredFraternity(idUsr: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseURLFraternity}/${idUsr}/registred`)
  }


  getAll(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.baseUrlCampaign);
  }


}
