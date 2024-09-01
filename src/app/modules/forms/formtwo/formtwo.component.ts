import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formtwo',
  templateUrl: './formtwo.component.html',
  styleUrls: ['./formtwo.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class FormtwoComponent implements OnInit{

  public applicationOne!: FormGroup;
  public loader: boolean = false;
  constructor(private formbulider: FormBuilder,private toastr: ToastrService) {}
  
  ngOnInit(): void {
    
    this.applicationOne = this.formbulider.group({
      username: ['',Validators.required],
      spousename: ['',Validators.required],
      dobirth: ['',Validators.required],
      aadhar: ['',Validators.required],
      commun: ['',Validators.required],
      designation: ['',Validators.required],
      office: ['',Validators.required],
      headoffice: ['',Validators.required],
      appointment: ['',Validators.required],
      dorrtire: ['',Validators.required],
      income: ['',Validators.required],
      adddress1: ['',Validators.required],
      number: ['',Validators.required],
      empwork: ['',Validators.required],
      plot: ['',Validators.required],
      remark: ['',Validators.required],
    });
    
 }
 get fform() {
  return this.applicationOne.controls;
}
submitForm() {
    if(this.applicationOne.valid) {
      this.toastr.success('Application Submitted Successfully')
    } else {
      this.toastr.warning('')

    }
  }

cancel() {
   this.applicationOne.reset()
}
}
