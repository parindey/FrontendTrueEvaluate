import { Data } from '@angular/router';
import { ExamserService } from './examcom.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Examschedule } from '../examschedule';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-examcom',
  templateUrl: './examcom.component.html',
  styleUrls: ['./examcom.component.css']
})

export class ExamcomComponent implements OnInit {
  sessionUser : String = sessionStorage.getItem("userId");
  form1  : FormGroup;
  message: String;
  levelid: string;
  exam: Examschedule = new Examschedule();
  questionsize: number
  courseid = parseInt(sessionStorage.getItem("courseid"));
  constructor(private examservice:ExamserService, private router:Router) {}
  ngOnInit(): void {

  }
  fun1(){
    console.log("CourseId"+this.courseid);
    this.exam.courseid = this.courseid;
    this.exam.levelid = parseInt(this.levelid);
    console.log("Questionsize"+this.questionsize);
    this.examservice.func(this.exam, this.questionsize).subscribe(data=> {
      Swal.fire({
        icon: 'Registeration',
        title: 'Secheduling Exam',
        text: 'Successfully Registered',
        footer: 'You have successfully registered, All the Best for your Preparation'
      })
      this.router.navigate(['userDashboard']);
      })
    }
  }

