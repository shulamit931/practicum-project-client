import { Injectable } from '@angular/core';
import { ChildModel } from './models/Child';
import { UserModel } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user:UserModel=new UserModel();
  children:ChildModel[]=[];
  constructor() {
   
   }
}
