import { Planet } from './../baseInterfaces/planet';
import { PlanetResourcesService } from './../services/planet-resources.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fal-cone',
  templateUrl: './fal-cone.component.html',
  styleUrls: ['./fal-cone.component.css']
})
export class FalConeComponent implements OnInit {

  destinations = [
    { label: "Destination 1", name: "dest1", isEnabled: false },
    { label: "Destination 2", name: "dest2", isEnabled: true },
    { label: "Destination 3", name: "dest3", isEnabled: true },
    { label: "Destination 4", name: "dest4", isEnabled: true }];

  planets: [] = [];
  vechicles: any[];
  timeTaken: Number = 0;
  selectedPlanet: string;
  selectedVechicle: any;
  selectedVechicles: any[] = [];
  btnClass: string = "btn btn-outline-disabled";
  submitCls: string = "btn btn-outline-disabled submitBtn";

  constructor(private resourcesService: PlanetResourcesService) { }

  ngOnInit(): void {
    // get planets
    this.resourcesService.getPlanets().subscribe(
      data => {
        this.planets = data;
        console.log("Received planets");
      },
      error => {
        alert("Unable to get planets..");
        console.log(error);
      }
    );

    // get vechicles
    this.resourcesService.getVechicles().subscribe(
      data => {
        this.vechicles = data;
        console.log("Received vechicles");
      },
      error => {
        alert("Unable to get vechicles..");
        console.log(error);
      }
    );
  }

  selectDestination(event) {
    this.selectedPlanet = event.target.value;
    document.getElementsByName("vechicle").forEach(dest => {
      let readioEle = <HTMLInputElement>dest;
      readioEle.disabled = false;
    });
  }

  vechicleSelected(vechicle) {
    this.timeTaken = vechicle.max_distance;
    this.selectedVechicle = vechicle;
    this.enableAction();
  }

  selectVechicle() {
    // var selVechicle = {};
    // selVechicle[this.selectedPlanet] = this.selectedVechicle;
    this.selectedVechicle["Planet"] = this.selectedPlanet;
    this.selectedVechicles.push(this.selectedVechicle);
    this.disableAction();
    this.timeTaken = 0;
    let index = this.vechicles.indexOf(this.selectedVechicle);
    this.vechicles[index].total_no = this.vechicles[index].total_no - 1;
    for (let planet of this.planets) {
      if (planet["name"] == this.selectedPlanet) {
        this.planets.splice(this.planets.indexOf(planet), 1);
        break;
      }
    }
    this.resetDropdown();
    this.disableRadioBtns();
    if (this.selectedVechicles.length >= 4)
      this.submitCls = "btn submitBtn";
  }

  enableAction() {
    this.btnClass = "btn";
  }

  disableAction() {
    this.btnClass = "btn btn-outline-disabled";
  }

  resetDropdown() {
    let dd = (<HTMLSelectElement>document.getElementsByTagName("select")[0]);
    dd.value = "select";
    if (this.planets.length <= 2)
      dd.disabled = true;
  }

  disableRadioBtns() {
    document.getElementsByName("vechicle").forEach(dest => {
      let readioEle = <HTMLInputElement>dest;
      readioEle.disabled = true;
      readioEle.checked = false;
    });
  }

  findFalcone() {
    this.resourcesService.findFalcone(this.selectedVechicles);
  }

}
