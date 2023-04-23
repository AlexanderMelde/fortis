import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  constructor(public dialogRef: MatDialogRef<SocialComponent>) { }
  closeDialog() {
    this.dialogRef.close();
  }
}
