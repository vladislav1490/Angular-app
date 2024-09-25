import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExamService } from '../services/exam.service';
import { Observable } from 'rxjs';
import { Exam } from '../mock-exam-list';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {
  examForm: FormGroup;
  editing = false;
  examId: string | null = null; // Изменил на string для соответствия Firestore

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private examService: ExamService
  ) {
    this.examForm = this.fb.group({
      name: ['', Validators.required],
      mark: ['', Validators.required],
      enrollee: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.examId = this.route.snapshot.paramMap.get('id');
    if (this.examId) {
      this.editing = true;
      // Получаем экзамен по ID из Firestore
      this.examService.getExamById(this.examId).subscribe(exam => {
        if (exam) {
          this.examForm.patchValue(exam);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.examForm.invalid) {
      return;
    }

    const formValue = this.examForm.value;
    if (this.editing && this.examId) {
      this.examService.updateExam({ id: this.examId, ...formValue });
    } else {
      this.examService.addExam(formValue);
    }

    this.router.navigate(['/exams']);
  }

  onDelete(): void {
    if (this.examId && confirm('Are you sure you want to delete this exam?')) {
      this.examService.deleteExam(this.examId);
      this.router.navigate(['/exams']);
    }
  }
}
