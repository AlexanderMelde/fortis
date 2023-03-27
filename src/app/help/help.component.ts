import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import helpDatabase from './help_database.json';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  help_db: {
    [content_ref: string]: {
      title: string;
      content: string;
    }
  } = helpDatabase;

  constructor(@Inject(MAT_DIALOG_DATA) public content_ref: string) {
  }

  public getHelp(content_ref: string) {
    if (content_ref in this.help_db) {
      return this.help_db[content_ref]
    } else {
      return {
        title: "No specific help",
        content: "Help not found, error code: 404 " + content_ref
      }
    }
  }
}
