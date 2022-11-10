import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes=[
   { qid:23,
    title:"Basic Java",
    description:'',
    maxMarks:'50',
    noq:'20',
    active:'',
    category:{
      title:'programming'
    }
   },
   { qid:23,
    title:"Advance Java",
    description:'',
    maxMarks:'50',
    noq:'20',
    active:'',
    category:{
      title:'programming'
    }
   },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
