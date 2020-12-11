import { Component, OnInit, TemplateRef } from '@angular/core';
import { from } from 'rxjs';
import { Voluntary } from '../_models/Voluntary';
import { VoluntaryService } from '../_services/voluntary.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {

  volunteers: Voluntary[];
  volunteersFiltered: Voluntary[];
  _filterString: string;
  //IMG VOLUNTARY
  imageWidth = 30;
  imageMargin = 2;

  //CONSTRUCTOR
  constructor(
    private VoluntaryService: VoluntaryService
    , private modalService: BsModalService
    , private fb: FormBuilder
  ) { }


  //ReactForms
  registerForm: FormGroup;


  validation() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      contato: ['', [Validators.required]],
    })
  }




  saveChanges() {

  }

  //MODAL Vol
  modalRef: BsModalRef;

  openModal(template: any) {
    template.show();
  }


  get filterList(): string {
    return this._filterString;
  }

  set filterList(value: string) {
    this._filterString = value;
    this.volunteersFiltered
      = this._filterString
        ? this.filterVoluntary(this.filterList)
        : this.volunteers;
  }

  filterVoluntary(filterBy: string): Voluntary[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.volunteers.filter(voluntary =>
      voluntary.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
    this.GetAllVoluntary();
    this.validation();
  }


  GetAllVoluntary() {
    this.VoluntaryService.GetAllVoluntary().subscribe((_voluntary: Voluntary[]) => {
      this.volunteers = _voluntary;
      this.volunteersFiltered = this.volunteers;
      console.log();
    }, error => {
      console.log(error);
    });
  }


}
