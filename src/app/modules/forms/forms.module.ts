import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { MaterialModule } from 'src/app/materils.module';
import { FormoneComponent } from './formone/formone.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormtwoComponent } from './formtwo/formtwo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormService } from './form.service';
// import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    FormoneComponent,
    FormtwoComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MaterialModule,
    // BrowserModule,
    HttpClientModule,  // <-- Ma
    ToastrModule.forRoot()

  ],
  providers: [ToastrService,FormService],

})
export class FormsModule { }
