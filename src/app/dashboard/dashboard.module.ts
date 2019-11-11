import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TrackProgressComponent } from './track-progress/track-progress.component';
import { MyWorkoutPlanComponent } from './my-workout-plan/my-workout-plan.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AddWorkoutPlanComponent } from './add-workout-plan/add-workout-plan.component';
import { GraphsModule } from '../graphs/graphs.module';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faUser as faRegularUser} from '@fortawesome/free-regular-svg-icons';
import { faFireAlt as faSolidFire, faTasks as faSolidTasks, faTachometerAlt as faSolidTachometer, faFileDownload as faSolidFileDownload,faDumbbell as faSolidDumbbell,
faSignOutAlt as faSolidSignout, faUser as faSolidUser, faEdit as faSolidEdit, faTrashAlt as faSolidTrash, faFireAlt} from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    DashboardComponent,
    TrackProgressComponent,
    MyWorkoutPlanComponent,
    MyProfileComponent,
    AddWorkoutPlanComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    GraphsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {

  faRegularUser = faRegularUser;
  faSolidFire = faSolidFire;
  faSolidTasks = faSolidTasks;
  faSolidFileDownload = faSolidFileDownload;
  faSolidSignout = faSolidSignout;
  faSolidUser = faSolidUser;
  faSolidTrash = faSolidTrash;
  faSolidDumbbell = faSolidDumbbell;
  faSolidTachometer = faSolidTachometer;
  faSolidEdit = faSolidEdit;

  constructor() {
  }

}
