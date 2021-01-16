import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Campaign } from '../_models/Campaign';
import { CampaignService } from '../_services/campaign.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  title: string = 'Campanhas'
  //by getAll() 
  Campaigns: Campaign[];
  //search field
  CampaignsFiltered: Campaign[];
  _filterString: string;


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

  constructor(private Service: CampaignService) { }

  getAll() {
    this.Service.getAll().subscribe(
      (_return: Campaign[]) => {
        this.Campaigns = _return;
        this.CampaignsFiltered = _return;

        console.log(_return)
      }, error => {
        console.log(error);
      }

    );
  }




  ngOnInit() {
    this.getAll();
  }

}
