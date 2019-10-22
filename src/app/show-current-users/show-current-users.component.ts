import { Component, OnInit } from '@angular/core';
import { Person } from '../Model/Person';
import { UserDataService} from '../user-data.service'; // Importing our service to
import { from } from 'rxjs';

@Component({
  selector: 'app-show-current-users',
  templateUrl: './show-current-users.component.html',
  styleUrls: ['./show-current-users.component.css']
})
export class ShowCurrentUsersComponent implements OnInit {
  personList: Person[];
  currentPersonList: Person[];


  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.getCurrentUsers().subscribe({
      next: (value: Person[]) => {
        this.currentPersonList = value
      },
    });

  //  this.personList = this.userDataService.getUserDataList(); //.subscribe()
      
    }
  }




