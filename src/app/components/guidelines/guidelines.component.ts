import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { UserModel } from 'src/app/models/User';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit {
  user: UserModel;
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.user = this.dataService.user;
  }
}
