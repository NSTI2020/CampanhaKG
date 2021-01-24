import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Campaign } from '../_models/Campaign';
import { User } from '../_models/User';
import { CampaignService } from '../_services/campaign.service';
import { DashboardService } from '../_services/dashboard.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  //#region Fields Class
  title: string = 'Campanhas'
  //by getAll() 
  Campaigns: Campaign[];
  //search field
  CampaignsFiltered: Campaign[];
  _filterString: string;
  //check frater has Exists
  flag: boolean = false;
  _User: User;
  Id: number;
  //#endregion

  constructor(
    private dashBoardService: DashboardService
    , private userService: UserService
  ) { }

  //#region Filter campaign by Bairro.
  get filterList(): string {
    return this._filterString;
  }

  set filterList(value: string) {
    this._filterString = value;
    this.CampaignsFiltered
      = this.filterList
        ? this.filterCampaigns(this.filterList)
        : this.Campaigns;
  }

  filterCampaigns(filterBy: string): Campaign[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.Campaigns.filter(campaign =>
      campaign.neighborhood.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  //#endregion


  //#region Methods

  getAll() {
    this.dashBoardService.getAll().subscribe(
      (_return: Campaign[]) => {
        this.Campaigns = _return;
        this.CampaignsFiltered = _return;
        console.log(_return)
      }, error => {
        console.log(error);
      }
    );
  }
  CheckRegisteredFrater() {
    const id = sessionStorage.getItem('id');
    this.dashBoardService.checkUsrRegistredFraternity(parseInt(id)).subscribe(
      (_bool: boolean) => {
        this.flag = _bool;
        console.log(_bool);

      }, error => {
        console.log(error);
      }
    );
  }
  checkUserLoggedIn() {
    this.Id = parseInt(sessionStorage.getItem('id'));
    this.getUserById(this.Id)
    console.log(this._User);
    return sessionStorage.getItem('username');
  }
  getUserById(id: number): void {
    this.userService.getUserById(id).subscribe((_user: User) => {
      this._User = _user;
      console.log(_user);
    }), error => {
      console.log(error);
    }
  }

  //#endregion

  ngOnInit() {
    this.getAll();
    this.CheckRegisteredFrater();
  }


}
