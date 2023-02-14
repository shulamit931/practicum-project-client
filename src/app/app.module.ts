import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRouteReuseStrategy } from './RouteReuseStrategy';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    NavbarComponent,
    MyFormComponent,
    GuidelinesComponent,
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DropdownModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: MyRouteReuseStrategy }
  ],
  bootstrap: [AppComponent,],
  
})
export class AppModule { }
