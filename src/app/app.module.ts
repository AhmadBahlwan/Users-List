import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes,} from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UsersService } from './users.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserDetailsModule } from './user-details/user-details.module';
import { SpinnerInterceptor } from './spinner-interceptor.service';
import { IdFilterPipe } from './id-filter.pipe';


const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user-details/:userId', component: UserDetailsComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, HttpClientModule, Ng2SearchPipeModule, NgxSpinnerModule, UserDetailsModule, RouterModule.forRoot(routes),],
  declarations: [AppComponent, UsersComponent, UserComponent, IdFilterPipe],
  bootstrap: [AppComponent],
  providers: [UsersService, {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true,
   }
  ],
  exports: [RouterModule, IdFilterPipe]
})
export class AppModule { }
