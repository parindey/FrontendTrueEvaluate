import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  category={
    title:'',
    description:''
  };

  constructor(private _category:CategoryService) { }

  ngOnInit(): void {
  }

  formSubmit()
  {
    if(this.category.title.trim()=='' || this.category.title==null){
      alert("please enter title");
      return;
    }

    this._category.addCategory(this.category).subscribe(
      data=>{
      this.category.title='';
      this.category.description='';
      alert("successfully added")
      }
    )
  }
  
}
