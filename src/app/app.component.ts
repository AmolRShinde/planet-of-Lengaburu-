import { PlanetResourcesService } from './services/planet-resources.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'planet-of-Lengaburu';
  constructor(private planetService: PlanetResourcesService) { }
  ngOnInit() {

  }
  getToken() {
    this.planetService.getToken(false);
  }
}
