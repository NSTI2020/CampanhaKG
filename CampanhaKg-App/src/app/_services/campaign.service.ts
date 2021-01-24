import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from '../_models/Campaign';
import { Fraternity } from '../_models/Fraternity';

@Injectable({
  providedIn: 'root'
})

export class CampaignService {
  BaseUrlFraternity: string = 'http://localhost:5000/api/fraternities';
  BaseUrlCampaign: string = 'http://localhost:5000/api/campaigns';
  Campaigns: Campaign[];

  constructor(private http: HttpClient) {

  }

  // getFraternityByUserId(userId: number): Observable<Fraternity> {
  //   return this.http.get<Fraternity>(`${this.BaseUrlFraternity}/${userId}`)
  //  }

  getCampaignByFraternityId(fraternityId: number): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(`${this.BaseUrlCampaign}/${fraternityId}`);
  }

  getFraternityByUserId(UserId: number): Promise<Fraternity> {
    return this.http.get<Fraternity>(`${this.BaseUrlFraternity}/${UserId}`).toPromise()
      .then((resposta: any) => resposta)
  }


}
