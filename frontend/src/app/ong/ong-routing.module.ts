import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NewIncidentComponent } from './new-incident/new-incident.component';


const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'incidents/new', component: NewIncidentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OngRoutingModule { }
