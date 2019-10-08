import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,  Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})

export class Form2Component implements OnInit {

  form2 = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(5), Validators.pattern('[a-z,A-Z]*')]),
    lastName: new FormControl('',[Validators.required, Validators.pattern('[z...,Z...]*')])
  });

  constructor() { 
    
    // this.firstName.valueChanges.subscribe(
      
    //   (value: string) => {
    //     console.log('firstname changed to :', value);

    //   }
    // )
    // this.lastName.valueChanges.subscribe(
      
    //   (value: string) => {
    //     console.log('Surname changed to :', value);

    //   }
    // )
    this.form2.valueChanges.subscribe(
      (value: string) => {
        console.log( 'Something has been changed !');
      }
    )
  }

<<<<<<< HEAD
  
=======
>>>>>>> f88c4e685a571badc78d1694eaa45ae71df392d5
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form2.value);
    this.firstName.setValue("you can't change me ! ");
    // this.form2.get("firstName").setValue("Still can't change me");
  }
  
  get firstName () { return this.form2.get('firstName')}
  get lastName () { return this.form2.get('lastName')}

}
