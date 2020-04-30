import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//componentes
import { ProfileComponent } from 'src/app/ong/profile/profile.component';
import { IncidentComponent } from 'src/app/ong/profile/incident/incident.component';
import { NewIncidentComponent } from 'src/app/ong/new-incident/new-incident.component';


//módulos
import { OngRoutingModule } from './ong-routing.module';
import { FeatherIconsModule } from '../modules/feather-icons/feather-icons.module';
import { FormUtilsModule } from '../form-utils/form-utils.module';



@NgModule({
  imports: [
    CommonModule,
    OngRoutingModule,
    FeatherIconsModule,
    ReactiveFormsModule,
    FormsModule,
    FormUtilsModule
  ],
  declarations: [
    ProfileComponent,
    IncidentComponent,
    NewIncidentComponent,
  ],
})
export class OngModule { }
