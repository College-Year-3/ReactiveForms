import { Component, OnInit } from '@angular/core';
import { Person } from '../Model/Person';
import { UserDataService} from '../user-data.service'; // Importing our service to

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  personList: Person[];
  //currentPersonList: Person[];
  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.personList = this.userDataService.getUserDataList();
  
  }
}
