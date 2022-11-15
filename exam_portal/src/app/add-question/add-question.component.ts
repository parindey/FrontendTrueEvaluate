import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Question } from '../appmodel/question';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  addQuestion:Question = new Question();
  form1: FormGroup;
  fileUploadUrl="http://localhost:8054/add/admin-restapi/question/upload";
  constructor(private http: HttpClient, private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.form1 = new FormGroup(
      {
        course_id : new FormControl('', [Validators.required,
          Validators.pattern('/^\d{10}$/')]),

        level_id : new FormControl('', [Validators.required,
          Validators.pattern('/^\d{10}$/')]),

        question : new FormControl('', [Validators.required]),

        option_1 : new FormControl('', [Validators.required]),

        option_2 : new FormControl('', [Validators.required]),

        option_3 : new FormControl('', [Validators.required]),

        option_4 : new FormControl('', [Validators.required]),

        correct_option : new FormControl('', [Validators.required])

      }
    )
  }

//   sampleForm: FormGroup;
//   @HostListener("window:beforeunload")
//  selloutcanDeactivate(): Observable<boolean> | boolean {
//      return (
//          !this.sampleForm.dirty
//      );
//  }

  addingQuestion(){
    this.adminService.addquestion(this.addQuestion).subscribe(response =>{
      Swal.fire(
        'Question Added!'
      )
    })

  }


  file:any



  selectFile(event:any){
    this.file=event.target.files[0];
     console.log(this.file);
   }



  uploadFile(){



   let formData=new FormData();
    formData.append("file",this.file);



   this.http.post(this.fileUploadUrl,formData).subscribe(
      (data=>{
        console.log(data);
      }


        )
    )



  }

}
