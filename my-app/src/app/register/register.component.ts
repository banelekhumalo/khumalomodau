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
    checkin: Date;
    checkout: Date;
    suiteType: string='';
    room: string;
    bankname: string='';
    accholder: string= '';
    cardno: string;
    cvv: string;
    exDate: Date;


    constructor(private fb:FormBuilder)
    {
        this.rForm = fb.group({
          'name':[null,[Validators.required,Validators.minLength(2)]],
          'lname': [null,[Validators.required,Validators.minLength(2)]],
          'gender':[null,Validators.required],
          'dob':[null,Validators.required],
          'cellphone':[null,[Validators.required,Validators.minLength(10)]],
          'email':[null,[Validators.required,Validators.minLength(10)]],
          'province': [null,Validators.required],
          'checkin': [null,Validators.required],
          'checkout':[null,Validators.required],
          'suiteType':[null,Validators.required],
          'room':[null,[Validators.required,Validators.maxLength(1)]],
          'bankname':[null,[Validators.required,Validators.minLength(2)]],
          'accholder':[null,[Validators.required,Validators.minLength(2)]],
          'cardno':[null,[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
          'cvv':[null,[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
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

}
