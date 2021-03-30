import { PlanetResourcesService } from './../services/planet-resources.service';
import { Component, ErrorHandler, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent {

  constructor(private planetService: PlanetResourcesService) { }

  getAccess() {
    this.planetService.getToken(true);
  }

}
