import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import { Gym } from '../../models/gym.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gyms : Gym[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.sendGetRequest().subscribe((data: any) => {
      console.log("got gym data", data);
      this.gyms = data;
    })
  }
}
