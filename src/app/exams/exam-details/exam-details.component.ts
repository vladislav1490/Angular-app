import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../services/exam.service';
import { Location } from '@angular/common';
import { Exam } from '../mock-exam-list';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.css']
})
export class ExamDetailsComponent implements OnInit {
  exam: Exam | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private examService: ExamService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.examService.getExamById(id).subscribe(exam => {
      this.exam = exam;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
