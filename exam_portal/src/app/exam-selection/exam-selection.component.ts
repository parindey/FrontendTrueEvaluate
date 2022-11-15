import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {ExamSelectionService} from '../service/exam-selection.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-exam-selection',
  templateUrl: './exam-selection.component.html',
  styleUrls: ['./exam-selection.component.css']
})
export class ExamSelectionComponent implements OnInit {

  userid: number;

  constructor(private router:Router,private examservice: ExamSelectionService) {

  }

  ngOnInit() {
  }

register()
{
  this.router.navigate(['register']);
}
  selection(courseid:number){
      this.userid = parseInt(sessionStorage.getItem("userId"));
      this.examservice.examselection(courseid,this.userid).subscribe(response=>{
        if(response==false)
        {

          sessionStorage.setItem("courseid",String(courseid));
          sessionStorage.setItem("levelid",String(1));
          this.router.navigate(['register']);
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
  }
}
