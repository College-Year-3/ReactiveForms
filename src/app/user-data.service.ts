import { Injectable } from '@angular/core';
import { Person } from "../app/Model/Person";
import {Observable, interval} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class UserDataService {
  
  private people: Person[] = [
    { id: '1', firstName: 'Una', lastName: 'Evans', interests: [], active: false },
    { id: '2', firstName: 'Boris', lastName: 'Johnson', interests: ['Brexit', 'Busses'], active: false },
    { id: '3', firstName: 'Therese', lastName: 'May', interests: ['Shoes', 'Brexit'], active: false },
    { id: '4', firstName: 'Donald', lastName: 'Trump', interests:
        ['Twitter', 'Himself', 'Gold', 'Building', 'Korea'], active: false
    },
    { id: '5', firstName: 'Sinead', lastName: 'Evans', interests:
        ['Sleeping', 'Reading', 'Warm PJs'], active: false
    }
  ];

  constructor() { }

  getUserDataList(): Person[]{
    return this.people;
  }

 // for testing only this returns an observable 
  getCurrentUsers(): Observable<Person[]> {
    return interval(3000).pipe(
      map(value => this.people.filter(this.isActive)),
    );
  }

  // for testing only, sets some people active
  private isActive(p: Person) : boolean
  {
    return (Math.random() > 0.8);
  }

}
