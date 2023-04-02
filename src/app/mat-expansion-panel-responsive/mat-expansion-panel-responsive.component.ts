import {Component, Input} from '@angular/core';

@Component({
  selector: 'mat-expansion-panel-responsive',
  templateUrl: './mat-expansion-panel-responsive.component.html',
  styleUrls: ['./mat-expansion-panel-responsive.component.css']
})

// TODO: Let this be a directive instead of a wrapper
export class MatExpansionPanelResponsiveComponent {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
}
