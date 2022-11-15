import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../appmodel/login';
import { UserService } from '../user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ExamService } from '../service/exam.service';
import { ExamSelectionService } from '../service/exam-selection.service';



@Component({
  selector: 'app-candidate-exam-login',
  templateUrl: './candidate-exam-login.component.html',
  styleUrls: ['./candidate-exam-login.component.css']
})
export class CandidateExamLoginComponent implements OnInit {

  sessionUser : String = sessionStorage.getItem("userId");
  form1  : FormGroup;
  login : Login = new Login();
  message: String;
  userid: number;
  courseid:number;
  levelid:number;
  questionsize:any;

  constructor(private userService: UserService, private router: Router,
    private route: ActivatedRoute, private examservice : ExamSelectionService) {​​​​
      this.courseid = parseInt(this.route.snapshot.params.courseId);
      this.levelid = parseInt(this.route.snapshot.params.levelId);
      this.questionsize =this.route.snapshot.params.questionsize;
    console.log(this.questionsize+"helllle")
    }​​​


  logout() {
    sessionStorage.clear();
  }
  loginCheck() {​​​​
  console.log(this.login);

  this.userService.login(this.login).subscribe(response => {​​​​
    Swal.fire(
      response.status,
      response.message
    )

    console.log(response);

    if(response.status == 'SUCCESS') {
      this.userid = parseInt(response.userId);​​​​
      sessionStorage.setItem('userId', response.userId );
      sessionStorage.setItem('questionsize',this.questionsize);
      console.log("questionsize" + sessionStorage.getItem("questionsize"));
      this.examservice.examselection(this.courseid,this.userid).subscribe(response=>{
        if(response==false)
        {
        this.router.navigate(['exam_instructions/'+ this.courseid + '/'+ this.levelid]);
        }
        else
        {
          Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: 'You have already attempted this test!',
            footer: 'You can view your report in the reports section\nOr you can attempt another Technology :)!'
          })
          this.router.navigate(['userDashboard']);
        }
      });

    }​​​​
  }​​​​)

}​​​​


  ngOnInit() {
    this.form1 = new FormGroup (
      {
        email: new FormControl('', [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        password: new FormControl('', [Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')])
      }
    )
  }

}

