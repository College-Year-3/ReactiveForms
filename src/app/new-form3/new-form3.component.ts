import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import { UserDataService} from '../user-data.service'; // Importing our service to
import { Person } from '../Model/Person';

@Component({
  selector: 'app-new-form3',
  templateUrl: './new-form3.component.html',
  styleUrls: ['./new-form3.component.css']
})

export class NewForm3Component implements OnInit {
  personList: Person[];
  currentPersonList: Person[];

  newForm3 = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required, Validators.pattern('[z...,Z...]*')])
  });

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.personList = this.userDataService.getUserDataList(); //.subscribe()
  }

  get interests() {
    return this.newForm3.get('interests') as FormArray;
  }

  get firstName () { return this.newForm3.get('firstName')}
  get lastName () { return this.newForm3.get('lastName')}

  onSubmit() {
    console.log(this.newForm3.value);
    this.firstName.setValue("you can't change me ! ");
  }
}
