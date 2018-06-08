import { Injectable } from '@angular/core';
import { Person } from './person'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: Person[] = [
    {id: 1, firstName: 'Bill', lastName: 'Wright', dateOfBirth: new Date('01/01/1950')},
    {id: 2, firstName: 'Bernie', lastName: 'Monette', dateOfBirth: new Date('01/01/1955')},
    {id: 3, firstName: 'Sean', lastName: 'Doyle', dateOfBirth: new Date('01/01/1970')}
  ];

  constructor() { }
}