import {Component} from '@angular/core';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  private ngNavigatorShareService: NgNavigatorShareService;
  constructor(ngNavigatorShareService: NgNavigatorShareService) {
    this.ngNavigatorShareService = ngNavigatorShareService;

  }

  share_friend_code() {

    if (!this.ngNavigatorShareService.canShare()) {
      alert(`This service/api is not supported in your Browser`);
      return;
    }

    this.ngNavigatorShareService.share({
      title: '4379-8348-1524', text: 'Add me on GYMBOX: 4379 8348 1524', url: 'https://gymbox-placeholder.com/friend/add/4379-8348-1524'
    }).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });
  }

}
