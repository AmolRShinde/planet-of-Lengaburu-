import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PlanetResourcesService {
  private tokenApi: string = "https://findfalcone.herokuapp.com/token";
  private planetUrl: string = "https://findfalcone.herokuapp.com/planets";
  private vechicleUrl: string = "https://findfalcone.herokuapp.com/vehicles";
  private findfalcone: string = "https://findfalcone.herokuapp.com/find";
  private token: any;
  // private hasAccess: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  getToken(navigate): void {
    const headers: HttpHeaders = new HttpHeaders({ "Accept": "application/json" });

    this.http.post(this.tokenApi, {}, { headers }).subscribe(
      res => {
        this.token = res["token"];
        alert("Welcome.. Access granted");
        if (navigate)
          this.router.navigate(["/falCone"]);
        // this.hasAccess.next(true);
      },
      error => {
        alert('Unable to get Access, Check yout internet Connection and try again..');
        console.log(error.message);
        this.router.navigate(["/access"]);
        //  this.hasAccess.next(false);
      }
    );
  }

  getPlanets(): Observable<any> {
    return this.http.get(this.planetUrl);
  }

  getVechicles(): Observable<any> {
    return this.http.get(this.vechicleUrl);
  }

  findFalcone(selectedVechicles) {
    let planet_names = [];
    let vehicle_names = [];
    selectedVechicles.map(selVechicle => {
      planet_names.push(selVechicle["Planet"]);
      vehicle_names.push(selVechicle["name"]);
    });
    const headers: HttpHeaders = new HttpHeaders({
      "Accept": "application/json",
      "Content-Type": "application/json"
    });
    const body = {
      token: this.token,
      planet_names: planet_names,
      vehicle_names: vehicle_names
    };
    return this.http.post(this.findfalcone, body, { headers }).subscribe(
      resp => {
        if (resp["status"] == "success") {
          for (let selVechicle of selectedVechicles) { // to use break good to have for ..of
            if (selVechicle["Planet"] == resp["planet_name"]) {
              resp["timeTaken"] = selVechicle["max_distance"];
              break;
            }
          }
        }
        const navExtra: NavigationExtras = {
          state: {
            resp
          }
        };
        this.router.navigate(["/result"], navExtra);
      },
      error => {
        console.log(error.message);
        alert("No token initialized, get token by clicking on Get Token link from Header");
      }
    )
  }
}
