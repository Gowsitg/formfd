import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormoneComponent } from './formone/formone.component';
import { FormtwoComponent } from './formtwo/formtwo.component';

const routes: Routes = [
  {
    path:'formone',
    component: FormoneComponent
  },
  {
    path:'formtwo',
    component: FormtwoComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
