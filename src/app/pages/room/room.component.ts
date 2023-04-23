import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {
  faAngleRight, faBottleDroplet,
  faBottleWater,
  faClock,
  faDoorOpen,
  faDumbbell,
  faFan,
  faHotTubPerson,
  faLightbulb,
  faLocationPin,
  faPersonBiking,
  faPersonBooth, faPumpSoap, faRing,
  faSheetPlastic,
  faShower, faSoap, faTarp,
  faUser, faVault,
  faWeightHanging, faWheatAwn
} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from "rxjs";
import {BaseComponent} from "../../base/base.component";
import {LightsHelpComponent} from "../../help/lights/lights-help.component";
import {BlindsHelpComponent} from "../../help/blinds-help/blinds-help.component";
import {ClimateHelpComponent} from "../../help/climate-help/climate-help.component";
import {DoorHelpComponent} from "../../help/door-help/door-help.component";
import {MediacontrolComponent} from "../../mediacontrol/mediacontrol.component";
import {DataService} from "../../services/data.service";
import {TimerService} from "../../services/timer.service";
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent extends BaseComponent implements OnInit, OnDestroy {
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
  musicProgress: number | undefined;
  musicIsPaused: boolean | undefined;
  musicIsFav: boolean | undefined;

  constructor(private _bottomSheet: MatBottomSheet, private data: DataService, private timer: TimerService) {
    super()
  }
  openBottomSheet(): void {
    this._bottomSheet.open(MediacontrolComponent);
  }

  ngOnInit() {
    this.data.currentMusicProgress.dieWith(this).subscribe(d => this.musicProgress = d)
    this.data.currentMusicIsPaused.dieWith(this).subscribe(d => this.musicIsPaused = d)
    this.data.currentMusicIsFav.dieWith(this).subscribe(d => this.musicIsFav = d)

  }

  public toggleWorkoutTools() {
    //TODO: Implement
  }

  toggleMusicPause(event: MouseEvent) {
    if (this.musicIsPaused !== undefined) {
      if (!this.musicIsPaused) {
        this.timer.pauseTimer();
      }else{
        this.timer.startTimer();
      }
      this.data.changeMusicIsPaused(!this.musicIsPaused)
    }
    event.stopPropagation();
  }
  toggleMusicFav(event: MouseEvent) {
    if (this.musicIsFav !== undefined) {
      this.data.changeMusicIsFav(!this.musicIsFav)
    }
    event.stopPropagation();
  }
  protected readonly event = event;
  protected readonly faBottleDroplet = faBottleDroplet;
  protected readonly faSoap = faSoap;
  protected readonly faPumpSoap = faPumpSoap;
  protected readonly faWheatAwn = faWheatAwn;
  protected readonly faVault = faVault;
  protected readonly faTarp = faTarp;
  protected readonly faRing = faRing;
}
