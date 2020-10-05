import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    rForm : FormGroup;
    post: any;
    name:string='';
    lname: string = '';
    gender: string ='';
    dob: Date;
    cellphone: number;
    email: string ='';
    province: string = '';
    disablePastDates = true;
    checkin: Date;
    checkout: Date;
    suiteType: string='';
    room: number;
    bankname: string='';
    accholder: string= '';
    cardno: number;
    cvv: number;
    exDate: Date;


    constructor(private fb:FormBuilder)
    {
        this.rForm = fb.group({
          'name':[null,Validators.required],
          'lname': [null,Validators.required],
          'gender':[null,Validators.required],
          'dob':[null,Validators.required],
          'cellphone':[null,Validators.required],
          'email':[null,Validators.required],
          'province': [null,Validators.required],
          'checkin': [null,Validators.required],
          'checkout':[null,Validators.required],
          'suiteType':[null,Validators.required],
          'room':[null,Validators.required],
          'bankname':[null,Validators.required],
          'accholder':[null,Validators.required],
          'cardno':[null,Validators.required],
          'cvv':[null,Validators.required],
          'exDate': [null,Validators.required]
        });
    }

   addPost(post){
     this.name =post.name;
     this.lname = post.lname;
     this.gender =post.gender;
     this.cellphone = post.cellphone;
     this.email = post.email;
     this.checkin = post.checkin;
     this.checkout = post.checkout;
     this.suiteType = post.suiteType;
     this.room = post.room;
     this.bankname = post.bankname;
     this.accholder = post.accholder;
     this.cardno = post.cardno;
     this.cvv = post.cvv;
     this.exDate = post.exDate;

   }

  ngOnInit(): void {

   
  }
  
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

}