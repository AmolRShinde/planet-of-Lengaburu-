import { DistancePipe } from './distance.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AccessComponent } from './access/access.component';
import { FalConeComponent } from './fal-cone/fal-cone.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { FormsModule } from '@angular/forms';
import { FalconeResultComponent } from './falcone-result/falcone-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    FalConeComponent,
    NopagefoundComponent,
    DistancePipe,
    FalconeResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
