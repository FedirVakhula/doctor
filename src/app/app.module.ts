import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { HeaderComponent, FooterComponent, NewspaperComponent, UsersComponent, DepartmentComponent, LoginComponent} from '.';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewspaperComponent,
    UsersComponent,
    DepartmentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UsersModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
