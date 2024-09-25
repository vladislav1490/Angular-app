import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamsModule } from './exams/exams.module';

// Firebase и Firestore
import { initializeApp } from 'firebase/app'; // из Firebase SDK
import { provideFirebaseApp, FirebaseAppModule } from '@angular/fire/app';
import { provideFirestore, getFirestore, FirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment'; // конфигурация Firebase

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExamsModule,
    FirebaseAppModule,
    FirestoreModule
  ],
  providers: [
    // Подключение Firebase и Firestore как модули
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // Подключение Firestore через провайдер
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
