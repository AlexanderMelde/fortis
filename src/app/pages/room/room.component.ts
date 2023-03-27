import {Component} from '@angular/core';
import {
  faAngleRight,
  faBottleWater,
  faClock,
  faDoorOpen,
  faDumbbell,
  faFan,
  faHotTubPerson,
  faLightbulb,
  faLocationPin,
  faPersonBiking,
  faPersonBooth,
  faSheetPlastic,
  faShower,
  faUser,
  faWeightHanging
} from '@fortawesome/free-solid-svg-icons';
import {LightsHelpComponent} from "../../help/lights/lights-help.component";
import {BlindsHelpComponent} from "../../help/blinds-help/blinds-help.component";
import {ClimateHelpComponent} from "../../help/climate-help/climate-help.component";
import {DoorHelpComponent} from "../../help/door-help/door-help.component";
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  faLocationPin = faLocationPin;
  faClock = faClock;
  faUser = faUser;
  faLightbulb = faLightbulb;
  faPersonBooth = faPersonBooth;
  faDoorOpen = faDoorOpen;
  faAngleRight = faAngleRight;
  faDumbbell = faDumbbell;
  faWeightHanging = faWeightHanging;
  faPersonBiking = faPersonBiking;
  faSheetPlastic = faSheetPlastic;
  faShower = faShower;
  faHotTubPerson = faHotTubPerson;
  faFan = faFan;
  faBottleWater = faBottleWater;
  LightsHelpComponent = LightsHelpComponent;
  BlindsHelpComponent = BlindsHelpComponent;
  ClimateHelpComponent = ClimateHelpComponent;
  DoorHelpComponent = DoorHelpComponent;

  public toggleWorkoutTools() {
    //TODO: Implement
  }
}
