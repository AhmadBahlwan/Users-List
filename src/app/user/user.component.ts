import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class UserComponent implements OnInit {
  @Input() user: User;
  isHovered: boolean = false;

  constructor() { }

  ngOnInit() { }
}
