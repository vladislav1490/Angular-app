import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, updateDoc, deleteDoc, docData, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Exam } from '../mock-exam-list'; // Используем модель Exam

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private collectionName = 'exams'; // Имя коллекции в Firestore

  constructor(private firestore: Firestore) {}

  // Получаем список экзаменов из Firestore
  getExams(): Observable<Exam[]> {
    const examCollection = collection(this.firestore, this.collectionName);
    return collectionData(examCollection, { idField: 'id' }) as Observable<Exam[]>;
  }

  // Добавить новый экзамен в Firestore
  addExam(exam: Exam): Promise<DocumentReference> {
    const examCollection = collection(this.firestore, this.collectionName);
    return addDoc(examCollection, exam);
  }

  // Обновить экзамен в Firestore
  updateExam(exam: Exam): Promise<void> {
    const examDocRef = doc(this.firestore, `${this.collectionName}/${exam.id}`);
    return updateDoc(examDocRef, { ...exam });
  }

  // Удалить экзамен из Firestore
  deleteExam(id: string): Promise<void> {
    const examDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
    return deleteDoc(examDocRef);
  }

  // Получить экзамен по ID из Firestore
  getExamById(id: string): Observable<Exam | undefined> {
    const examDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
    return docData(examDocRef, { idField: 'id' }) as Observable<Exam | undefined>;
  }
}
