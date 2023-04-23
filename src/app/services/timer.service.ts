import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subject, Subscription, takeUntil, takeWhile,} from 'rxjs';
import {BaseComponent} from "../helpers/base/base.component";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class TimerService extends BaseComponent  {
  musicProgress: number | undefined;
  musicIsPaused: boolean | undefined;

  private unsubscribe: Subject<void> = new Subject();

  updateRate = 100; // in ms

  sourceInterval$ : Observable<number> = interval(this.updateRate).pipe(takeUntil(this.unsubscribe));
  private sourceInterval$Subscription: Subscription | undefined;

  constructor(private data: DataService) {
    super()
    this.data.currentMusicProgress.subscribe(d => this.musicProgress = d)
    this.data.currentMusicIsPaused.subscribe(d => {
      this.musicIsPaused = d
      if (this.musicIsPaused) {
        this.unsubscribe.next();
        this.unsubscribe.complete();
      }
    })
    this.startTimer()
  }

  startTimer(){
    // takeWhile(() => (this.musicIsPaused ?? false)
    this.sourceInterval$Subscription = this.sourceInterval$.subscribe(n => {
      if (this.musicProgress !== undefined){
        this.data.changeMusicProgress(this.musicProgress > 99 ? 0 : (this.musicProgress + this.updateRate / 2000))
      }
    });
  }



  pauseTimer() {
    this.sourceInterval$Subscription?.unsubscribe();
  }

}

