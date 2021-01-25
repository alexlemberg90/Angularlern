import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersInfoComponent } from './users-info/users-info.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UsersInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'users', component: UsersInfoComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
