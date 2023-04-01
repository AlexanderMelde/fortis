import {Component, Input} from '@angular/core';
import {faCircleQuestion, IconDefinition} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-icon-list-item',
  templateUrl: './icon-list-item.component.html',
  styleUrls: ['./icon-list-item.component.css'],
  host: {
    role: 'listitem'
  }
})
export class IconListItemComponent {
  @Input() icon: IconDefinition = faCircleQuestion;
  @Input() name: string | undefined;
  @Input() description: string | undefined;
}
