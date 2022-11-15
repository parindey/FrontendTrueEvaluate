import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ExamService } from '../service/exam.service';
import { Question } from '../appmodel/question';

@Component({
  selector: 'app-remove-question',
  templateUrl: './remove-question.component.html',
  styleUrls: ['./remove-question.component.css']
})
export class RemoveQuestionComponent implements OnInit {

  question_id: number;
  form1: FormGroup;
  question_list: Question[];
  course_id: number;
  level_id: number;

  constructor(private adminService: AdminService, private router: Router, private examService:ExamService) { }

  ngOnInit() {
    this.form1 = new FormGroup(
      {
      question_id : new FormControl('', [Validators.required,
        Validators.pattern('/^\d{10}$/')])
      }
    )
  }

  searchQuestion() {
    this.examService.getQuestions(this.course_id, this.level_id,0).subscribe(data => {
      this.question_list=data
    });

  }

  removingQuestion(question_id){
    this.adminService.removequestion(question_id).subscribe(response =>{
      Swal.fire(
        'Question Removed!'
      )
    })
    location.reload();

  }
}
