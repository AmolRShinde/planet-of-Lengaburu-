import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-falcone-result',
  templateUrl: './falcone-result.component.html',
  styleUrls: ['./falcone-result.component.css']
})
export class FalconeResultComponent implements OnInit {
  status: boolean = false;
  timeTaken: number = 0;
  planet: string;
  constructor(private route: Router) {
    const resp = this.route.getCurrentNavigation().extras.state.resp;
    if (resp["status"] == "success") {
      this.status = resp["status"];
      this.timeTaken = resp["timeTaken"];
      this.planet = resp["planet_name"];
    }
  }

  ngOnInit(): void {
  }

}
