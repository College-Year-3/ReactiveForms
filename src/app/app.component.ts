import { Component, Input } from '@angular/core';
import { Person2 } from '../app/Model/Person2';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = ' Una\'s Lovely Forms';
  @Input() person: Person2;
  people: Person2[];
  newForm3 = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required, Validators.pattern('[z...,Z...]*')])
  });
  constructor() {
 
  }

  ngOnInit(){
    this.people = [
      { firstName: 'Una', lastName: 'Evans', interests: [] },
      { firstName: 'Therese', lastName: 'May', interests: ['Brexit', 'Shoes'] },
      { firstName: 'Boris', lastName: 'Johnson', interests: ['Busses', 'Brexit'] },
      { firstName: 'Donald', lastName: 'Trump', interests: ['Twitter', 'Himselef', 'China', 'Walls'] },
    ];

    console.log(this.people[0]);
  }

  handlePersonSelected(person: Person2){
    console.log('Person selected', person);
  }
}
