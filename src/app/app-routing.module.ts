import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './category/add-categories/add-categories.component';
import { ViewCategoriesComponent } from './category/view-categories/view-categories.component';
import { ViewQuizzesComponent } from './category/view-quizzes/view-quizzes.component';

const routes: Routes = [
  { path: 'categories', component: ViewCategoriesComponent, pathMatch:'full' },
  {path:'add-categories', component: AddCategoriesComponent, pathMatch:'full'},
  {path:'quizzes', component: ViewQuizzesComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
