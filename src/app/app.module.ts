import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { ShowCurrentUsersComponent } from './show-current-users/show-current-users.component';
import { UserDataService } from './user-data.service';
import { NewForm3Component } from './new-form3/new-form3.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    ShowCurrentUsersComponent,
    NewForm3Component
      
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ 
    UserDataService // add service as providers array?
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
