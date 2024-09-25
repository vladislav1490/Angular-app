import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamCenterComponent } from './exams/exam-center/exam-center.component';
import { ExamDetailsComponent } from './exams/exam-details/exam-details.component';
import { ExamListComponent } from './exams/exam-list/exam-list.component';
import { ExamFormComponent } from './exams/exam-form/exam-form.component';

const routes: Routes = [
  {
    path: '',
    component: ExamCenterComponent,
    children: [
      { path: '', component: ExamListComponent },   
      { path: 'form', component: ExamFormComponent },                  
      { path: ':id', component: ExamDetailsComponent },               
      { path: ':id/edit', component: ExamFormComponent }             
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsRoutingModule { }
