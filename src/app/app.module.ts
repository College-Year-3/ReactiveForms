import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
<<<<<<< HEAD
import { ShowCurrentUsersComponent } from './show-current-users/show-current-users.component';
import { UserDataService } from './user-data.service';
import { NewForm3Component } from './new-form3/new-form3.component';
=======
>>>>>>> 54ad3d49d2665a183f5d4caeb45528d778ba0ac3

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
<<<<<<< HEAD
    Form3Component,
    ShowCurrentUsersComponent,
    NewForm3Component
      
=======
    Form3Component
    
>>>>>>> 54ad3d49d2665a183f5d4caeb45528d778ba0ac3
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    FormsModule,
  ],
  providers: [ 
    UserDataService // add service as providers array?
  ],
=======
    FormsModule

  ],
  providers: [],
>>>>>>> 54ad3d49d2665a183f5d4caeb45528d778ba0ac3
  bootstrap: [AppComponent]
})
export class AppModule { }
