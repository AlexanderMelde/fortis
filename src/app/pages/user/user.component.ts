import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import moment from 'moment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  training_goals = new FormControl('');
  training_goals_list: string[] = ['Weight loss', 'Strength', 'Rehabilitation', 'Other'];
  username: string = "Kim Steele";
  myBirthday: moment.Moment = moment("1995-05-16");
  birthday = new FormControl(this.myBirthday);
  protected readonly moment = moment;
}

