import { Component } from '@angular/core';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lights',
  templateUrl: './lights-help.component.html',
  styleUrls: ['./lights-help.component.css']
})
export class LightsHelpComponent {
  faLightbulb = faLightbulb;

}
