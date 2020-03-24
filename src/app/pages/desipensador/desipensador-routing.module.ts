import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesipensadorPage } from './desipensador.page';

const routes: Routes = [
  {
    path: '',
    component: DesipensadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesipensadorPageRoutingModule {}
