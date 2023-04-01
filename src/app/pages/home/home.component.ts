import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import { Gym } from '../../models/gym.model';
import {MatSnackBar } from "@angular/material/snack-bar";
import {faAngleRight, faLightbulb} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gyms : Gym[] = [];
  isLoading : boolean = true;
  gym_list_sorting = 'nearby';
  gym_list_show_all: string | undefined = undefined;
  faAngleRight = faAngleRight;

  constructor(private apiService: ApiService, private _snackBar: MatSnackBar ) {
  }

  ngOnInit() {
    this.loadGyms()
  }
  loadGyms() {
    this.isLoading = true;
    this.apiService.sendGetRequest().subscribe((data: any) => {
      console.log("got gym data", data);
      this.gyms = data;
      this.isLoading = false;
    }, error => {
      // this.openSnackBar('Connection Error', 'Dismiss');
      this.isLoading = false;
    })
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  protected readonly undefined = undefined;
  protected readonly faLightbulb = faLightbulb;
}
