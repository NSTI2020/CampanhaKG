import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { Fraternity } from '../_models/Fraternity';
import { User } from '../_models/User';
import { CampaignService } from '../_services/campaign.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = 'http://localhost:5000/api/user/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  //GetFraternityByUserId
  FraternityByUserId: Fraternity;

  constructor(
    private http: HttpClient
    , private CampaignService: CampaignService
  ) { }
  login(model: any) {

    return this.http
      .post(`${this.baseURL}login`, model).pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
            sessionStorage.setItem('username', this.decodedToken.unique_name);
            sessionStorage.setItem('id', this.decodedToken.nameid);
          }

        })
      );

  }

  register(model: User) {
    return this.http.post(`${this.baseURL}register`, model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }






}
