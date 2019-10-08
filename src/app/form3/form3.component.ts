import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,  Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})

export class Form3Component implements OnInit {
  form3: FormGroup;

 constructor(private fb: FormBuilder){
   this.form3 = this.fb.group({
     firstName: [''],
     lastName: [''],
     interests: this.fb.array([''])
   })
 }

 get interests(){
   return this.form3.get('interests') as FormArray;
 }

 addInterest(){
   this.interests.push(this.fb.control(''));
 }
 
  ngOnInit() {
  }

}