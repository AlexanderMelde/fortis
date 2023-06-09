import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DateTime} from "luxon";
import {BaseComponent} from "../../helpers/base/base.component";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent extends BaseComponent implements OnInit, OnDestroy {
  training_goals = new FormControl('');
  training_goals_list: string[] = ['Weight loss', 'Strength', 'Rehabilitation', 'Other'];
  username: string | undefined;
  user_description: string | undefined;
  birthday = new FormControl(DateTime.fromISO("1998-05-25T09:24"));
  show_age = false;
  show_location = true;
  fitness_levels = ["No Experience", "Beginner", "Intermediate", "Professional", "Expert"]
  fitness_level = 0;
  body_types = ["Male", "Female", "Other"]
  body_type = 1;
  titles = ["Gym Rookie", "Gymnast", "Strength Builder", "The Beast", "Only Works Legs", "Final Form", "Aesthetic God", "High Kick", "Animal", "King of the Gym", "The Lumberjack", "Squatmaster",
    "Chickenlegs", "Hulk", "Ripped", "Popeye"]
  title = 0;
  height = 180;
  weight = 80;
  card_number: string = "4485 2346 1044 3070";
  card_expires: string = "12/24";
  card_cvc: string = "334";
  location: string = "Karlsruhe";
  full_name: string = "Kim Steele"
  email: string = "k.steele@gmail.com"
  phone_nr: string = "+49 15569 709824"
  getAge() {
    let age = this.birthday.value?.diffNow('years')?.years;
    if (age !== undefined) {
      age = -1 * Math.round(age)
    }
    return age
  }

  constructor(private data: DataService) {
    super()
  }

  ngOnInit() {
    this.user_description = "I like to party!"
    this.data.currentUsername.dieWith(this).subscribe(d => this.username = d)

  }

  setUsername() {
    if (this.username !== undefined) {
      this.data.changeUsername(this.username)
    }
  }

  censorString(s: string|undefined, show_last: number = 3, show_first: number = 0): string {
    if (s != undefined) {
      let stars = "*".repeat(s.length);
      return s.slice(0, show_first) + stars.slice(show_first, -show_last) + s.slice(-show_last);
    }else{
      return ""
    }
  }
}

