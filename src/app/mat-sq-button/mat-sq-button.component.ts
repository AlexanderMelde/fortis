import {Component, Input} from '@angular/core';
import {faAngleRight, faCircleQuestion, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {MatDialog} from "@angular/material/dialog";
import {HelpComponent} from "../help/help.component";

@Component({
  selector: 'mat-sq-button',
  templateUrl: './mat-sq-button.component.html',
  styleUrls: ['./mat-sq-button.component.css']
})
export class MatSqButtonComponent {
  @Input() icon: IconDefinition = faCircleQuestion;
  @Input() dialog_ref: string = "unknown_dialog_ref";
  faAngleRight = faAngleRight;

  constructor(public dialog: MatDialog) {
  }

  openDialog(content_ref: string) {
    const dialogRef = this.dialog.open(HelpComponent, {
      data: content_ref
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
