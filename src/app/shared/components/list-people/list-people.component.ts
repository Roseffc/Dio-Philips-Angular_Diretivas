import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  pessoas: any = [];

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      debugger
      this.pessoas = people;
    })
  }

}
