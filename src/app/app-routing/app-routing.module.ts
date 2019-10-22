import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from '../form1/form1.component';
import { ListPeopleComponent } from '../list-people/list-people.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { PersonDetailsComponent } from 'app/person-details/person-details.component';

const routes: Routes = [
  {path: 'form1', component: Form1Component },
  {path: 'ListPeople', component: ListPeopleComponent },
  {path: '', component: HomeComponent },
  {path: 'Home', component: HomeComponent },
  {path: 'About', redirectTo: '/Home' },
  {path: '**', component: NotFoundComponent, pathMatch: 'full' },
  {path: 'person/:id', component: PersonDetailsComponent}
];
  

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}