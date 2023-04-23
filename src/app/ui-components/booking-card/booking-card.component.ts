import {Component, Input} from '@angular/core';
import {faAngleRight, faClock, faLocationPin, faUser } from '@fortawesome/free-solid-svg-icons';
import {DateTime, Duration} from "luxon";

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent {
  @Input() name: string | undefined;
  @Input() description: string | undefined;
  @Input() course: string | undefined;
  @Input() coach: string | undefined;
  @Input() date: DateTime | undefined;
  @Input() duration: Duration | undefined;
  @Input() ongoing: boolean | undefined;

  protected readonly faUser = faUser;
  protected readonly faClock = faClock;
  protected readonly faAngleRight = faAngleRight;
  protected readonly faLocationPin = faLocationPin;
}

