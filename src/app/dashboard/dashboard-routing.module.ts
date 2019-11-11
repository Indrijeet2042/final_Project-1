import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TrackProgressComponent } from './track-progress/track-progress.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AddWorkoutPlanComponent } from './add-workout-plan/add-workout-plan.component';
import { MyWorkoutPlanComponent } from './my-workout-plan/my-workout-plan.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', component: TrackProgressComponent},
    {path: 'dashboard/my-profile', component: MyProfileComponent},
    {path: 'dashboard/add-workout-plan', component: AddWorkoutPlanComponent},
    {path: 'dashboard/my-workout-plan', component: MyWorkoutPlanComponent},
    { path: 'dashboard/track-progress', component: TrackProgressComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
