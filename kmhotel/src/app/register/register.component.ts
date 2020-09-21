import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    regForm : FormGroup;
    post: any;
    name:string='';
    lname: string = '';
    gender: string ='';
    dob: Date;
    cellphone: number;
    email: string ='';
    province: string = '';
    checkin: Date;
    checkout: Date;
    suiteType: string='';
    room: number;
    bankname: string='';
    accholder: string= '';
    cardno: number;
    cvv: number;
    exDate: Date;
  constructor(private fb =fb.FormBuilder)
  {
    this.regForm = fb.group({
      'name':['',Validators.required],
      'lname':['',Validators.required],
      'gender':['',Validators.required],
      'cellphone':['',Validators.required],
      'email':['',Validators.required],
      'checkin':['',Validators.required],
      'checkout':['',Validators.required],
      'suiteType':['',Validators.required],
      'room':['',Validators.required],
      'bankname':['',Validators.required],
      'accholder':['',Validators.required],
      'cardno':['',Validators.required],
      'cvv':['',Validators.required],
      'exDate':['',Validators.required]
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

}
