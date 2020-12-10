import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Voluntary } from '../_models/Voluntary';
import { VoluntaryService } from '../_services/voluntary.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {

  volunteers: Voluntary[];
  volunteersFiltered: Voluntary[];
  _filterList: string;

  constructor(private VoluntaryService: VoluntaryService) { }

  get filterList(): string {
    return this._filterList;
  }

  set filterList(value: string) {
    this._filterList = value;
    this.volunteersFiltered
      = this._filterList
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
