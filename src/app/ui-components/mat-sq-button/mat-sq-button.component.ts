import {Component, Input} from '@angular/core';
import {faAngleRight, faCircleQuestion, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {MatDialog} from "@angular/material/dialog";
import {HelpComponent} from "../../modals/help/help.component";

@Component({
  selector: 'mat-sq-button',
  templateUrl: './mat-sq-button.component.html',
  styleUrls: ['./mat-sq-button.component.css']
})
export class MatSqButtonComponent {
  faAngleRight = faAngleRight;

  @Input() icon: IconDefinition = faCircleQuestion;
  @Input() help_topic: string | undefined;
  @Input() disabled: boolean = false;


  // reference any class decorated with @Component, that will be opened in a popup
  @Input() popup: { new(...args: any[]): any; } = HelpComponent;

  constructor(public dialog: MatDialog) {
  }

  onClickHandler() {
    if(this.help_topic === undefined && this.popup == HelpComponent){
      console.log("Nothing happened, either define help_topic or popup.")
    }else{
      const dialogRef = this.dialog.open(this.popup, {
        data: this.help_topic
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  }
}
