import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { DevelopmentComponent } from './development/development.component';
import { MedialComponent } from './medial/medial.component';
import { MassageComponent } from './massage/massage.component';
import { AlternativMedicinComponent } from './alternativ-medicin/alternativ-medicin.component';
import { CoachingComponent } from './coaching/coaching.component';
import { LectureComponent } from './lecture/lecture.component';
import { SeatingsCharkaComponent } from './seatings-charka/seatings-charka.component';
import { CoursesTrainingComponent } from './courses-training/courses-training.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'contact', component: ContactComponent},
  { path:'development', component: DevelopmentComponent},
  { path:'treatment', component: TreatmentComponent},
  { path: 'massage', component:MassageComponent},
  {path: 'alternativ-medicin', component:AlternativMedicinComponent},
  { path:'medial', component:MedialComponent},
  {path:'coaching',component:CoachingComponent},
  {path:'courses-training',component:CoursesTrainingComponent},
  {path:'seatings-charka',component:SeatingsCharkaComponent},
  {path:'lecture',component:LectureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
