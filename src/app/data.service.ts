import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChildModel } from './models/Child';
import { FormModel } from './models/formModel';
import { Result } from './models/resultModel';
import { UserModel } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user: UserModel = new UserModel();
  children: ChildModel[] = [];
  constructor() {

  }

}
