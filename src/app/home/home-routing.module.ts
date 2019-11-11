import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturesComponent } from './features/features.component';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: LogInComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'features', component: FeaturesComponent}
  ]}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
