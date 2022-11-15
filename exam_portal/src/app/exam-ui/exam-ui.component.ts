import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../appmodel/question';
import { Report } from '../appmodel/report';
import { UserResponse } from '../appmodel/user-response';
import { ExamService } from '../service/exam.service';
import { ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-exam-ui',
  templateUrl: './exam-ui.component.html',
  styleUrls: ['./exam-ui.component.css'],

})
export class ExamUIComponent implements OnInit, AfterViewInit {
  length:number;
  courseid:number;
  userid:number;
  levelid:number;
  questions:Question[];
  questionIndex:number;
  marks:number=0;
  report:Report;
  totalQuestions: number;
  userResponse : UserResponse[]=[new UserResponse()];
  isSubmitted : boolean = false;
  questionsize: number

  ngAfterViewInit(){
    this.length=this.questions.length;
    this.createUserRespObj();
  }
  //Timer
  sec:any = 600;
  countDiv:any;
  min:any;
  remSec:any;


  ngOnInit() {
    // this.courseid = parseInt(this.routecourse.snapshot.params.courseId);
  //  alert("Course ID" + typeof(this.courseid))
  }


  constructor(private exam : ExamService,private router:Router, private routecourse : ActivatedRoute) {
    this.questionIndex=0;
    this.levelid=parseInt(this.routecourse.snapshot.params.levelId);
    this.courseid = parseInt(this.routecourse.snapshot.params.courseId);
    this.questionsize = parseInt(sessionStorage.getItem("questionsize"));
    this.userid=parseInt(sessionStorage.getItem("userId"));
    console.log("Question number", this.questionsize)
    this.exam.getQuestions(this.courseid,this.levelid, this.questionsize).subscribe(data=>{
      this.questions=data;

  })
}

  public createUserRespObj(){
    let i:number;
    for(i=0;i<this.questions.length;i++){
      this.userResponse.push(new UserResponse());
    }
  }


  public nextQues(){
    this.userResponse[this.questionIndex].questionId=this.questions[this.questionIndex].question_id;
    this.questionIndex++;
  }

  public prevQues(){
    this.userResponse[this.questionIndex].questionId=this.questions[this.questionIndex].question_id;
    this.questionIndex--;
  }

  public submit(){
    this.isSubmitted=true;
    this.userResponse[this.questionIndex].questionId=this.questions[this.questionIndex].question_id;
    let i:number;
    this.totalQuestions = this.questions.length;
    for(i=0;i<this.length;i++){
      if(this.userResponse[i].userAnswer==this.questions[i].correct_option){
        this.marks+=10;
      }
    }
    console.log(this.marks);
    this.report=new Report(this.marks,this.userid,this.courseid,this.levelid, this.totalQuestions);
    console.log(this.report);
    this.exam.sendReport(this.report).subscribe(response=>{
      let status:String=response;
      if(status=="Pass"){
        this.router.navigate(['report_success']);
      }
      else{
        alert("You failed to clear this level! \n You can view your result in Report section");
        this.router.navigate(['userDashboard']);
      }
    })

  }

  //Timer
  countDown   = setInterval(() =>
  this.secpass(), 1000);


public secpass():any {
    'use strict';
     this.min  = Math.floor(this.sec / 60);
        this.remSec  = this.sec % 60;
    if (this.remSec < 10) {
        this.remSec = '0' + this.remSec;
}
if (this.min < 10) {
    this.min = '0' + this.min;
}
if(this.min==0 && this.sec==0 && this.isSubmitted==false){

  this.submit();
}
this.countDiv = this.min + ":" + this.remSec;

if (this.sec > 0) {
    this.sec = this.sec - 1;
}
else {
    clearInterval(this.countDown);
}
}

}
