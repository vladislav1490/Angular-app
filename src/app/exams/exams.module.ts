import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExamCenterComponent } from './exam-center/exam-center.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { ExamsRoutingModule } from '../exams-routing.module';
import { ExamFormComponent } from './exam-form/exam-form.component';



@NgModule({
  declarations: [
    ExamCenterComponent,
    ExamListComponent,
    ExamDetailsComponent,
    ExamFormComponent
  ],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExamsModule { }
