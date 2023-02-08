import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRouteReuseStrategy } from './RouteReuseStrategy';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    GuidelinesComponent,
    MyFormComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: MyRouteReuseStrategy }
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
