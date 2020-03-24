import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesipensadorPageRoutingModule } from './desipensador-routing.module';

import { DesipensadorPage } from './desipensador.page';
import { TeamPage } from '../team/team.page';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesipensadorPageRoutingModule
  ],
  declarations: [DesipensadorPage]
})
export class DesipensadorPageModule {}
