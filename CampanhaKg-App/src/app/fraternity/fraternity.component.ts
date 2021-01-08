import { Component, OnInit, TemplateRef } from '@angular/core';
import { from } from 'rxjs';
import { Fraternity } from '../_models/Fraternity';
import { FraternityService } from '../_services/fraternity.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Voluntary } from '../_models/Voluntary';
import { AuthService } from '../_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';





@Component({
  selector: 'app-fraternity',
  templateUrl: './fraternity.component.html',
  styleUrls: ['./fraternity.component.scss']
})
export class FraternityComponent implements OnInit {
  //Title
  title: string = 'Fraternidades';
  //fields of general use.
  Fraternities: Fraternity[];
  //Search Filter
  filteredArray: Fraternity[];
  _stringOfFilter: string;
  //Reactive Forms
  registerForm: FormGroup;

  jwt = new JwtHelperService();
  public decoded: any;
  constructor(
    private fraternityServices: FraternityService
    , private fb: FormBuilder
    , public authService: AuthService
  ) { }


  checkUserLoggedIn() {
    const user = (localStorage.getItem('token'));
    this.decoded = this.jwt.decodeToken(user);
    console.log(this.decoded);
  }



  getV(): Voluntary[] {
    return this.Fraternities.map(a => a.voluntary);
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
    this.validatorFieldsInForm();
    this.getAllFraternity();
  }



  validatorFieldsInForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      rua: ['', [Validators.required, Validators.maxLength(100)]],
      numero: ['', [Validators.required, Validators.maxLength(10)]],
      bairro: ['', [Validators.required, Validators.maxLength(100)]],
      cidade: ['', [Validators.required, Validators.maxLength(100)]],
      estado: ['', [Validators.required, Validators.maxLength(60)]],
      complemento: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }



}
