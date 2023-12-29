import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { UserDetailsComponent } from './user-details.component';


@NgModule({
  imports: [
    CommonModule, NgxSpinnerModule
  ],
  declarations: [UserDetailsComponent],
  exports: [UserDetailsComponent]
})
export class UserDetailsModule { }