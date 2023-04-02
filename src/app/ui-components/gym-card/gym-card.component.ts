import {Component, Input} from '@angular/core';
import {faAngleRight, faClock, faLocationPin, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-gym-card',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.css']
})
export class GymCardComponent {
  @Input() name: string | undefined;
  @Input() description: string | undefined;

  protected readonly faUser = faUser;
  protected readonly faClock = faClock;
  protected readonly faAngleRight = faAngleRight;
  protected readonly faLocationPin = faLocationPin;
}
