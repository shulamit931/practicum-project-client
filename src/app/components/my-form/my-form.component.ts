import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChildModel } from 'src/app/models/Child';
import { FormModel } from 'src/app/models/formModel';
import { EHMO, Ekind, UserModel } from 'src/app/models/User';
import { DataService } from 'src/app/data.service';

import * as saver from 'file-saver';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  user: UserModel = new UserModel();
  child: ChildModel = new ChildModel();
  children: ChildModel[] = [];
  HMO = Object.entries(EHMO).slice(0, Object.entries(EHMO).length / 2);
  Kind = Object.entries(Ekind).slice(0, Object.entries(Ekind).length / 2);
  result: UserModel[] = [];
  download: boolean = false;



  constructor(private httpClient: HttpClient, private dataService: DataService) { }

  ngOnInit(): void {
    this.user = this.dataService.user;
    this.children = this.dataService.children;
  }
  addChild(childForm: NgForm) {
    this.children.push(new ChildModel(this.child.Tz, this.child.FirstName, this.child.FirstName, this.child.BirthDate, this.child.ParentId));
    childForm.reset();
  }
  onSubmit(myForm: NgForm) {
    this.user.HMO = +this.user.HMO;
    this.user.Kind = +this.user.Kind;
    console.log(this.user);
    this.httpClient.post<UserModel[]>("https://localhost:44335/api/User/addForm", new FormModel(this.user, this.children)).subscribe(
      data => {
        console.log(data);
        this.result = data;
        this.exportExcel();
        
      }
    )
    myForm.reset();
    this.download = true;
    setTimeout(() => {
      this.download = false
    }, 1000);


  }



  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.result); // Sale Data
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "poeple");
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
     
      saver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
      
      
    });
  }

}

