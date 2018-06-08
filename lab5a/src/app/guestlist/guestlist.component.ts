import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {

  guests: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    //this.peopleService.getPeople().subscribe(results => this.guests = results);
    this.peopleService.getOtherPeople().subscribe(results => this.guests = results);
  }  

}
