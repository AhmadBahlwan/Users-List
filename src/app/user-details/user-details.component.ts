import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userId: number;
  user: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = +params['userId'];
      this.userService.getUserById(this.userId).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    });
  }
  
  getBack() {
    this.router.navigate(['/']);
  }
}
