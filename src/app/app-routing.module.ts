import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { MyFormComponent } from './components/my-form/my-form.component';

const routes: Routes = [
  {path:"guidelines" ,component:GuidelinesComponent},
  {path:"myForm",component:MyFormComponent},
  {path:"*",redirectTo:"guidelines"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
