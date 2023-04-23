import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {DateTime, Duration} from "luxon";
import {Subscription} from "rxjs";
import {ApiService} from '../../services/api.service';
import {Gym} from '../../models/gym.model';
import {MatSnackBar} from "@angular/material/snack-bar";
import {DataService} from "../../services/data.service";
import {SocialComponent} from "../../modals/social/social.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gyms: Gym[] = [];
  isLoading: boolean = true;
  gym_list_sorting = 'nearby';
  gym_list_show_all: string | undefined = undefined;
  username: string | undefined;

  usernameSubscription: Subscription | undefined;

  constructor(private apiService: ApiService, private _snackBar: MatSnackBar, private data: DataService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadGyms()
    this.usernameSubscription = this.data.currentUsername.subscribe(d => this.username = d)

  }
  ngOnDestroy() {
    if (this.usernameSubscription !== undefined) {
      this.usernameSubscription.unsubscribe();
    }
  }
  loadGyms() {
    this.isLoading = true;
    this.apiService.sendGetRequest().subscribe({
      next: (data: any) => {
        // console.log("got gym data", data);
        this.gyms = data;
        this.isLoading = false;
      },
      error: () => {
        // this.openSnackBar('Connection Error', 'Dismiss');
        this.isLoading = false;
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  get_firstname() {
    let s;
    if (this.username !== undefined) {
      s = this.username.split(" ")
      return s[0]
    }else{
      return ""
    }
  }
  openNotifications(): void {
    const dialogRef = this.dialog.open(SocialComponent, {
      // data: {name: this.name, animal: this.animal},
    });
  }
  protected readonly DateTime = DateTime;
  protected readonly Duration = Duration;
  protected readonly faAngleRight = faAngleRight;

  get_greeting() {
    const h = DateTime.now().toObject().hour;
    if ( h < 5 || h > 22) {
      return "Good Night"
    }else if(h < 12) {
      return "Good Morning"
    }else if(h < 18) {
      return "Good Afternoon"
    }else {
      return "Good Evening"
    }
  }
}
