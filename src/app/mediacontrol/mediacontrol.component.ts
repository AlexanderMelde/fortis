import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {BaseComponent} from "../base/base.component";
import {DataService} from "../services/data.service";
import {TimerService} from "../services/timer.service";

@Component({
  selector: 'app-mediacontrol',
  templateUrl: './mediacontrol.component.html',
  styleUrls: ['./mediacontrol.component.css']
})
export class MediacontrolComponent extends BaseComponent implements OnInit, OnDestroy {
  musicProgress: number | undefined;
  musicIsPaused: boolean | undefined;
  musicIsFav: boolean | undefined;


  constructor(private _bottomSheetRef: MatBottomSheetRef<MediacontrolComponent>, private data: DataService, private timer: TimerService) {
    super()
  }

  // openLink(event: MouseEvent): void {
  //   this._bottomSheetRef.dismiss();
  //   event.preventDefault();
  // }

  close() {
    this._bottomSheetRef.dismiss();
  }

  ngOnInit() {
    this.data.currentMusicProgress.dieWith(this).subscribe(d => this.musicProgress = d);
    this.data.currentMusicIsPaused.dieWith(this).subscribe(d => this.musicIsPaused = d);
    this.data.currentMusicIsFav.dieWith(this).subscribe(d => this.musicIsFav = d);
  }

  setMusicProgress() {
    if (this.musicProgress !== undefined) {
      this.data.changeMusicProgress(this.musicProgress)
    }
  }

  toggleMusicPause() {
    if (this.musicIsPaused !== undefined) {
      if (!this.musicIsPaused) {
        this.timer.pauseTimer();
      }else{
        this.timer.startTimer();
      }
      this.data.changeMusicIsPaused(!this.musicIsPaused)
    }
  }

  toggleMusicFav() {
    if (this.musicIsFav !== undefined) {
      this.data.changeMusicIsFav(!this.musicIsFav)
    }
  }

  nextSong(){
    this.prevSong()
  }

  prevSong() {
    this.data.changeMusicProgress(0)
  }

  formatDuration(percentComplete: number | undefined, maxDurationInSeconds: number): string {
    if (percentComplete !== undefined) {
      const totalSecondsRemaining = maxDurationInSeconds * (percentComplete / 100);
      const minutes = Math.floor(totalSecondsRemaining / 60);
      const seconds = Math.floor(totalSecondsRemaining % 60);
      return `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      return "~?~";
    }
  }
}
