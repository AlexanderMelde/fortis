import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usernameSource = new BehaviorSubject('Kim Steele');
  private musicProgressSource = new BehaviorSubject(80);
  private musicIsPausedSource = new BehaviorSubject(false);
  private musicIsFavSource = new BehaviorSubject(false);

  currentUsername = this.usernameSource.asObservable();
  currentMusicProgress = this.musicProgressSource.asObservable();
  currentMusicIsPaused = this.musicIsPausedSource.asObservable();
  currentMusicIsFav = this.musicIsFavSource.asObservable();

  constructor() { }

  changeUsername(d: string) {
    this.usernameSource.next(d)
  }

  changeMusicProgress(d: number) {
    this.musicProgressSource.next(d)
  }

  changeMusicIsPaused(d: boolean) {
    this.musicIsPausedSource.next(d)
  }

  changeMusicIsFav(d: boolean) {
    this.musicIsFavSource.next(d)
  }

}
