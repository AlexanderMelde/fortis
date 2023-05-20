import {Component, HostListener} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {SocialComponent} from "./modals/social/social.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened_start: boolean = false;
  opened_end: boolean = false;
  screenWidth : number = 1024;

  navLinks: {
    label: string;
    link: string;
    index: number;
  }[] = [
    {
      label: 'Home',
      link: '/home',
      index: 0
    }, {
      label: 'My Reservation',
      link: '/room',
      index: 1
    }
  ];
  activeLinkIndex = -1;

  constructor(private router: Router, public dialog: MatDialog) {
    // this.navLinks =
    this.getScreenSize();

  }
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const navLinkEntry = this.navLinks.find(tab => tab.link === '.' + this.router.url)
      if (navLinkEntry !== undefined) {
        this.activeLinkIndex = this.navLinks.indexOf(navLinkEntry);
      }
      // else{
      //   this.activeLinkIndex = 3;
      // }
    });
  }

  openNotifications(): void {
    const dialogRef = this.dialog.open(SocialComponent, {
      // data: {name: this.name, animal: this.animal},
    });
  }
}
