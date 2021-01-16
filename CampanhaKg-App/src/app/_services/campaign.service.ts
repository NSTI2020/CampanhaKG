import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from '../_models/Campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private baseUrl: string = 'http://localhost:5000/api/campaigns';


  constructor(private http: HttpClient) { }



  getAll(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.baseUrl);
  }

}
