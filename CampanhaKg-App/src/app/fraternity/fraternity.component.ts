import { Component, OnInit, TemplateRef } from '@angular/core';
import { from } from 'rxjs';
import { Fraternity } from '../_models/Fraternity';
import { FraternityService } from '../_services/fraternity.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-fraternity',
  templateUrl: './fraternity.component.html',
  styleUrls: ['./fraternity.component.scss']
})
export class FraternityComponent implements OnInit {
  //fields of general use.
  Fraternities: Fraternity[];
  //Search Filter
  filteredArray: Fraternity[];
  _stringOfFilter: string;

  //Reactive Forms
  fb: FormBuilder;
  registerForm: FormGroup;


  constructor(
    private fraternityServices: FraternityService
    , private formBuilder: FormBuilder
  ) { }

  validatorFieldsInForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      voluntary: ['', [Validators.required]],
      rua: [['', Validators.required, Validators.minLength(1)]],
      numero: [['', Validators.required, Validators.minLength(1)]],
      complemento: [['', Validators.maxLength(150)]],
      bairro: [['', Validators.required, Validators.minLength(1)]],
      cidade: [['', Validators.required, Validators.minLength(1)]],
      uF: ['', Validators.required, Validators.minLength(1)],
    })
  }




  openModal(template: any) {
    template.show();
  }

  //Get all fraternities registers
  getAllFraternity() {
    this.fraternityServices.getAllFraternity().subscribe((_fraternity: Fraternity[]) => {
      this.Fraternities = _fraternity;
      console.log();
    }), error => {
      console.log(error);
    }
  }

  //Filter field search.
  get filteringString() {
    return this._stringOfFilter;
  }

  set filteringString(value: string) {
    this._stringOfFilter = value;
    this.filteredArray
      = this._stringOfFilter
        ? this.actionFilter(this.filteringString)
        : this.Fraternities;
  }

  actionFilter(filteredBy: string): Fraternity[] {
    filteredBy = filteredBy.toLocaleLowerCase();
    return this.Fraternities.filter(N => N.name.toLocaleLowerCase().indexOf(filteredBy) !== -1)
  }

  ngOnInit() {
    this.getAllFraternity();
  }

}
