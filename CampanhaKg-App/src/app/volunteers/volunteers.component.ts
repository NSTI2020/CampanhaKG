import { Component, OnInit, TemplateRef } from '@angular/core';
import { from } from 'rxjs';
import { Voluntary } from '../_models/Voluntary';
import { VoluntaryService } from '../_services/voluntary.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {

  //title
  title: string = 'Voluntários';

  //SavaChanges
  voluntary: Voluntary;

  saveMode = 'post';

  volunteers: Voluntary[];
  volunteersFiltered: Voluntary[];
  _filterString: string;
  //IMG VOLUNTARY
  imageWidth = 30;
  imageMargin = 2;
  bodyDeletarVoluntary = '';

  //CONSTRUCTOR
  constructor(
    private VoluntaryService: VoluntaryService
    //, private modalService: BsModalService
    , private fb: FormBuilder
    , private tostr: ToastrService
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


  saveChanges(template: any) {
    if (this.registerForm.valid) {
      if (this.saveMode == 'post') {
        this.voluntary = Object.assign({}, this.registerForm.value);
        this.VoluntaryService.postVoluntary(this.voluntary).subscribe(
          (_newVoluntary: Voluntary) => {
            console.log(_newVoluntary)
            template.hide();
            this.GetAllVoluntary();
            this.tostr.success('Voluntário cadastrado com sucesso!')
          }, error => {
            console.log(this.voluntary);
            this.tostr.error(`Erro ao tentar cadastrar voluntário: ${error}`);
          }

        )
      }
      else {
        this.voluntary = Object.assign({ id: this.voluntary.id }, this.registerForm.value);
        this.VoluntaryService.putVoluntary(this.voluntary).subscribe(
          () => {
            template.hide();
            this.GetAllVoluntary();
            this.tostr.success('Voluntário editado com sucesso!');
          }, error => {
            console.log(error);
            this.tostr.error(`Erro ao tentar editar o voluntário. ${error}`)
          }

        )
      }



    }
  }

  //MODAL Vol
  modalRef: BsModalRef;

  newVoluntary(template: any) {
    this.saveMode = 'post'
    this.openModal(template);
  }

  EditVoluntary(voluntary: Voluntary, template: any) {
    this.saveMode = 'put';
    this.openModal(template);
    this.voluntary = voluntary;
    this.registerForm.patchValue(voluntary);
  }

  showSuccess() {
    this.tostr.success('Deletado com sucesso!')
  }

  deleteVol(voluntary: Voluntary, template: any) {
    this.openModal(template);
    this.voluntary = voluntary;
    this.bodyDeletarVoluntary = `Tem certeza que deseja excluir o Voluntario: ${voluntary.name}, Código: ${voluntary.id}`;
  }
  deleteVolConfirm(template: any) {
    this.VoluntaryService.DeleteVoluntary(this.voluntary).subscribe(
      (_volToDelete: Voluntary) => {
        template.hide();
        this.GetAllVoluntary();
        this.tostr.success("Deletado com sucesso!");
      }, error => {
        console.log(error);
        this.tostr.error(`Erro ao tentar excluir voluntário: ${error}`);
      }
    )
  }

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
