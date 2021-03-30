import { FalconeResultComponent } from './falcone-result/falcone-result.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { FalConeComponent } from './fal-cone/fal-cone.component';
import { AccessComponent } from './access/access.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/access', pathMatch: 'full' },
  { path: 'access', component: AccessComponent },
  { path: 'falCone', component: FalConeComponent },
  { path: 'result', component: FalconeResultComponent },
  { path: '**', component: NopagefoundComponent } // wildcard routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
