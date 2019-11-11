import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavComponent } from './side-nav/side-nav.component';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faUser as faRegularUser} from '@fortawesome/free-regular-svg-icons';
import { faFireAlt as faSolidFire, faTasks as faSolidTasks, faTachometerAlt as faSolidTachometer, faFileDownload as faSolidFileDownload,faDumbbell as faSolidDumbbell,
faSignOutAlt as faSolidSignout, faUser as faSolidUser, faEdit as faSolidEdit, faTrashAlt as faSolidTrash, faFireAlt} from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ]
})
export class SharedModule { 
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
}
