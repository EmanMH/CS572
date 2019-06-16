import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable,of,from } from "rxjs";
import { DataService } from '../data.service';


@Component({
  selector: 'app-signup',
  templateUrl: `signup.component.html`,
  styles: []
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  subscription;

  constructor(private formBuilder: FormBuilder,private httpclient :HttpClient
    ,private dataservice:DataService,private router:Router ) {
  }

  onSubmit() {
    this.dataservice.saveUser(this.myForm.get('userData')).subscribe(data=>
      {
        console.log(data);
        this.router.navigate(['/login']);
      }
      );;
  }
   myprom;
 async asyncEmailValidator(control: FormControl): Promise<any> {
   var user;
  var data=await this.dataservice.getUserByEmail(control.value)
  .toPromise();
    this.myprom=new Promise( (resolve,reject)=> {
      if(data.msg=='not found')
      {
        resolve(null);
      }
      else
      resolve({ 'invalid': true }) });
    return this.myprom;
  }

  ngOnDestroy()
  {
   // this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'userData': this.formBuilder.group({
        'firstname': ['', [Validators.required]],
        'lastname': ['', [Validators.required]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
        'password': ['', Validators.required],
      'confirmpassword': ['', Validators.required]
      })
    });

    this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );
  
  }

}
