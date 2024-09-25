import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../services/exam.service';
import { Exam } from '../mock-exam-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {
  exams: Exam[] = [];

  constructor(private router: Router, private examService: ExamService) {}

  ngOnInit(): void {
    this.examService.getExams().subscribe(exams => {
      this.exams = exams;
    });
  }

  onSelect(id: number): void {
    this.router.navigate(['/exams', id]);
  }
}
