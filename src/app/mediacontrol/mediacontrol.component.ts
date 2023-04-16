import {Component} from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-mediacontrol',
  templateUrl: './mediacontrol.component.html',
  styleUrls: ['./mediacontrol.component.css']
})
export class MediacontrolComponent {
  slider_value = 80;

  constructor(private _bottomSheetRef: MatBottomSheetRef<MediacontrolComponent>) {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  close() {
    this._bottomSheetRef.dismiss();
  }

  formatDuration(percentComplete: number, maxDurationInSeconds: number): string {
    const totalSecondsRemaining = maxDurationInSeconds * (percentComplete / 100);
    const minutes = Math.floor(totalSecondsRemaining / 60);
    const seconds = Math.floor(totalSecondsRemaining % 60);
    return `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
