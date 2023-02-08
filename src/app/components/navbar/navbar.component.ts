import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  links = ['guidelines', 'myForm'];
  activeLink = this.links[0];
  background: ThemePalette ;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  
}
