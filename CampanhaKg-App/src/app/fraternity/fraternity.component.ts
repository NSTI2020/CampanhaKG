import { Component, OnInit, TemplateRef } from '@angular/core';
import { from } from 'rxjs';
import { Fraternity } from '../_models/Fraternity';
import { FraternityService } from '../_services/fraternity.service';
import { FormBuilder, FormControl, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
//import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { AuthService } from '../_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_models/User';
//import { Template } from '@angular/compiler/src/render3/r3_ast';
import { ToastrService } from 'ngx-toastr';





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
  //SaveChangesFraternity
  fraternity: Fraternity;
  //userById
  _User: User;
  Id: number;
  //Search Filter
  filteredArray: Fraternity[];
  _stringOfFilter: string;
  //Reactive Forms
  registerForm: FormGroup;
  //Save if(post/put)
  saveMode: string;
  //used to return userLoggedIn and get userName
  jwt = new JwtHelperService();
  public decoded: any;

  constructor(
    private fraternityServices: FraternityService
    , private fb: FormBuilder
    , public authService: AuthService
    , public tostr: ToastrService
  ) { }



  newFraternity(template: any) {
    this.saveMode = 'post';
    this.registerForm.reset();
    this.registerForm.patchValue({
      userId: this.Id,
      // formControlName2: myValue2 (can be omitted)
    });
    template.show(template);
  }

  editFraternity(fraternity: Fraternity, template: any) {
    this.saveMode = 'put';
    this.registerForm.reset();
    template.show(template);
  }

  //Get all fraternities registers
  getAllFraternity() {
    this.fraternityServices.getAllFraternity
      ().subscribe((_fraternity: Fraternity[]) => {
      this.Fraternities = _fraternity;
      console.log();

    }, error => {
      console.log(error);
    }
    )
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

  saveChanges(template: any) {
    if (this.registerForm.valid) {
      if (this.saveMode == 'post') {
        this.fraternity = Object.assign({}, this.registerForm.value);
        this.fraternityServices.post(this.fraternity).subscribe(
          (_fra: Fraternity) => {
            console.log(_fra);
            template.hide();
            this.getAllFraternity();
            this.tostr.success('Cadastrado com sucesso!');
          }, error => {
            console.log(this.fraternity);
            this.tostr.error(`Erro ao tentar cadastrar: ${error}`);
          }
        );
      }
      else {

        this.fraternity = Object.assign({}, this.registerForm.value);
        this.fraternityServices.put(this.fraternity).subscribe(
          (_fraternity: Fraternity) => {
            console.log(_fraternity);
            template.hide();
            this.getAllFraternity();
            this.tostr.success('Cadastro atualizado com êxito.');
          }, error => {
            console.log(error);
            this.tostr.error(`Erro, cadastro não realizado. ${error}`);
          }
        );

      }
    }

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
      uf: ['', [Validators.required, Validators.maxLength(60)]],
      userId: ['', Validators.minLength(1)],
      zipcode: [''],
      complemento: ['']
    });
  }



}
