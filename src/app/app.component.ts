import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gymbox';
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
      label: 'Room',
      link: '/room',
      index: 1
    }, {
      label: 'About',
      link: '/about',
      index: 2
    }
  ];
  activeLinkIndex = -1;

  constructor(private router: Router) {
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
    });
  }
}
