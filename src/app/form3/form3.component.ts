import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})

export class Form3Component implements OnInit {
  form3: FormGroup;

  // form3 = new FormGroup({
  //   firstName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-z,A-Z]*')]),
  //   lastName: new FormControl('', [Validators.required, Validators.pattern('[z...,Z...]*')])
  // });

  constructor(private fb: FormBuilder) {
    this.form3 = this.fb.group({
      firstName: [''],
      lastName: [''],
      interests: this.fb.array([''], new FormControl('', [Validators.required, Validators.minLength(4), Validators.nullValidator])
      )})
  }


  ngOnInit() {
  }

  get interests() {
    return this.form3.get('interests') as FormArray;
  }

  addInterest() {
    this.interests.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.form3.value);
    this.firstName.setValue("you can't change me ! ");
    // this.form2.get("firstName").setValue("Still can't change me");
  }

  get firstName() { return this.form3.get('firstName') }
  get lastName() { return this.form3.get('lastName') }

}
