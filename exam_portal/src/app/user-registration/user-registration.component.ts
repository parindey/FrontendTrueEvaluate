import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../appmodel/register';
import { UserService } from '../user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  sessionUser : String = sessionStorage.getItem("userId");
  regform: FormGroup;
  register:Register = new Register();
 	message: String;
  constructor(private userService: UserService,private router:Router) { }

 logout() {
	debugger;
    sessionStorage.clear();
  }

  // func(e:any) {
  //   if ( this.register.email !== '' || this.register.password !== '' || this.register.password !== '') {
  //     e.preventDefault();
  //     e.returnValue = '';
  // }

  // }

  registerUser() {
	//debugger;
    this.userService.registerUser(this.register).subscribe(response => {
      Swal.fire(
        response.status,
        response.message
      )
     console.log( response);
      if(response.status=="SUCCESS"){

        this.router.navigate(['user_login'])
      }
      else{
        this.message= response.message;
        console.warn(this.message);
      }
    })
  }

  sampleForm: FormGroup;
  @HostListener("window:beforeunload")
 selloutcanDeactivate(): Observable<boolean> | boolean {
     return (
         !this.sampleForm.dirty
     );
 }




  ngOnInit() {
    this.regform = new FormGroup (
    {
      email: new FormControl('', [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),

      password: new FormControl('', [Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')]),

      fullName: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$')]),

      mobile: new FormControl('', [Validators.required,
        Validators.pattern('^[0-9]{10}$')]),

      city: new FormControl('', [Validators.required]),

      state: new FormControl('', [Validators.required]),

      date_of_birth: new FormControl('', [Validators.required]),

      qualification: new FormControl('', [Validators.required,
       Validators.pattern('^[a-zA-Z ]*$') ]),

      year_of_completion: new FormControl('', [Validators.required,
        Validators.pattern('^[0-9]{4}$')])
    })
  }

}
