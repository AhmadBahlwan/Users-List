import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit, OnChanges {
  @Input() users: User[];
  @Input() searchText: string = '';
  title: string = "Angular Quiz";
  currentPage: number = 1;
  paginatedUsers: User[] = [];
  pages: number[] = [];

  constructor(private cdr: ChangeDetectorRef, private usersService: UsersService) {}

  ngOnInit() {
    this.setPage(1);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.users && !changes.users.firstChange) {
      this.setPage(1);
    }
  }

  setPage(page: number) {
    this.currentPage = page;
    this.fetchUsers();
  }

  private fetchUsers() {
    this.usersService.getUsers(this.currentPage).subscribe((response: any) => {
      this.users = [...response.data];
      this.pages = Array.from({ length: response.total_pages }, (_, i) => i + 1);
      this.cdr.detectChanges();
    });
  }
}
