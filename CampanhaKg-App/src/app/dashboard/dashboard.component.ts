import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Campaign } from '../_models/Campaign';
import { CampaignService } from '../_services/campaign.service';
import { DashboardService } from '../_services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {

  title: string = 'Campanhas'
  //by getAll() 
  Campaigns: Campaign[];
  //search field
  CampaignsFiltered: Campaign[];
  _filterString: string;
  //check frater has Exists
  flag: boolean = false;

  constructor(
    private campaignService: CampaignService
    , private dashBoardService: DashboardService
  ) { }

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



  getAll() {
    this.campaignService.getAll().subscribe(
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


  ngOnInit() {
    this.getAll();
    this.CheckRegisteredFrater();
  }


}
