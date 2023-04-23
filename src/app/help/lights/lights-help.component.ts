import { Component } from '@angular/core';
import {faHandSparkles, faLightbulb, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lights',
  templateUrl: './lights-help.component.html',
  styleUrls: ['./lights-help.component.css']
})
export class LightsHelpComponent {
  faLightbulb = faLightbulb;
  lightCardio = true;

  protected readonly faSun = faSun;
  protected readonly faMoon = faMoon;
  protected readonly faHandSparkles = faHandSparkles;
}
