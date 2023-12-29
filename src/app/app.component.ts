import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-quiz';
  users: User[] = [];
  searchText: string = '';

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    const page = 1;
    this.usersService.getUsers(page)
    .subscribe((response: any) => {
      this.users = response.data;
    },
    (error)=> {
      console.log(error);
    });
  }
}

