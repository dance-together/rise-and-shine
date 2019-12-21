import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { DevelopmentComponent } from './development/development.component';
import { MedialComponent } from './medial/medial.component';
import { MassageComponent } from './massage/massage.component';
import { AlternativMedicinComponent } from './alternativ-medicin/alternativ-medicin.component';
import { LectureComponent } from './lecture/lecture.component';
import { CoachingComponent } from './coaching/coaching.component';
import { CoursesTrainingComponent } from './courses-training/courses-training.component';
import { SeatingsCharkaComponent } from './seatings-charka/seatings-charka.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    TreatmentComponent,
    DevelopmentComponent,
    MedialComponent,
    MassageComponent,
    AlternativMedicinComponent,
    LectureComponent,
    CoachingComponent,
    CoursesTrainingComponent,
    SeatingsCharkaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
