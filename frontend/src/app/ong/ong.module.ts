import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngRoutingModule } from './ong-routing.module';
import { ProfileComponent } from 'src/app/ong/profile/profile.component';
import { FeatherIconsModule } from '../modules/feather-icons/feather-icons.module';
import { IncidentComponent } from 'src/app/ong/profile/incident/incident.component';
import { NewIncidentComponent } from 'src/app/ong/new-incident/new-incident.component';



@NgModule({
  imports: [
    CommonModule,
    OngRoutingModule,
    FeatherIconsModule
  ],
  declarations: [
    ProfileComponent,
    IncidentComponent,
    NewIncidentComponent
  ],
})
export class OngModule { }
