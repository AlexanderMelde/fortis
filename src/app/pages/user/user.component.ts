import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DateTime} from "luxon";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  training_goals = new FormControl('');
  training_goals_list: string[] = ['Weight loss', 'Strength', 'Rehabilitation', 'Other'];
  username: string | undefined;
  user_description: string | undefined;
  birthday = new FormControl(DateTime.fromISO("1998-05-25T09:24"));
  show_age = false;
  fitness_levels = ["No Experience", "Beginner", "Intermediate", "Professional", "Expert"]
  fitness_level = 0;
  body_types = ["Male", "Female", "Other"]
  body_type = 1;
  titles = ["Gym Rookie", "Gymnast", "Strength Builder", "The Beast", "Only Works Legs", "Final Form", "Aesthetic God", "High Kick", "Animal", "King of the Gym", "The Lumberjack", "Squatmaster",
    "Chickenlegs", "Hulk", "Ripped", "Popeye"]
  title = 0;
  height = 180;
  weight = 80;
  myModel = false;

  getAge() {
    let age = this.birthday.value?.diffNow('years')?.years;
    if (age !== undefined) {
      age = -1 * Math.round(age)
    }
    return age
  }

  ngOnInit() {
    this.username = "Kim Steele";
    this.user_description = "I like to party!"
  }

  protected readonly parseInt = parseInt;
}

