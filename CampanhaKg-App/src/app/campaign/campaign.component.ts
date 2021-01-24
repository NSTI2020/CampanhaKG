import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { from } from 'rxjs';
import { Campaign } from '../_models/Campaign';
import { CampaignService } from '../_services/campaign.service';
import { FraternityService } from '../_services/fraternity.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Fraternity } from '../_models/Fraternity';
import { Template } from '@angular/compiler/src/render3/r3_ast';



@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CampaignComponent implements OnInit {
  //#region Fields My campaigns
  title: string = 'Minhas Campanhas'
  //by getAll() 
  Campaigns: Campaign[];
  //search field
  CampaignsFiltered: Campaign[];
  _filterString: string;
  //GetFraternityByUserId
  FraternityByUserId: Fraternity;
  //GetCampaignByFraternityId
  CampaignsByFraternityId: Campaign[];
  //id of user in database
  _UserId: number = parseInt(sessionStorage.getItem('id'));
  //
  registerForm: FormGroup;

  modalRef: BsModalRef;

  //#endregion

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


  constructor(
    private CampaignService: CampaignService
    , private bsModalService: BsModalService
  ) { }


  //#region Methods
  getCampaignsByFraternityID(FraternityId: number) {
    this.CampaignService.getCampaignByFraternityId(FraternityId).subscribe
      (
        (_campaign: Campaign[]) => {
          this.CampaignsByFraternityId = _campaign;
          this.CampaignsFiltered = _campaign;
          this.Campaigns = _campaign;
          // console.log(_campaign);
        })
  }

  editCampaign(template: TemplateRef<any>, model: Campaign) {

    this.modalRef = this.bsModalService.show(template);

  }



  //#endregion


  ngOnInit(): void {

    this.CampaignService.getFraternityByUserId(this._UserId)
      .then((_Fraternity: Fraternity) => {
        this.FraternityByUserId = _Fraternity
        this.getCampaignsByFraternityID(this.FraternityByUserId.id)
      })
      .catch((param: Fraternity) => {
        console.log(param)
      })
  }







}
