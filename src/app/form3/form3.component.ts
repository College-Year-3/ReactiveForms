import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Person } from "../Model/Person";

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})

export class Form3Component implements OnInit {
  form3: FormGroup;
  @Input() person: Person[]; // Add input property called 'person' of type 'Person'

  constructor(private fb: FormBuilder) {

  }

  get interests() {
    return this.form3.get('interests') as FormArray;
  }

  addInterest() {
    this.interests.push(this.fb.control(''));
  }

  ngOnInit() {
    this.form3 = this.fb.group({
      firstName: [this.person],
      lastName: [''],
      interests: this.fb.array([''])
    })
  }

}
