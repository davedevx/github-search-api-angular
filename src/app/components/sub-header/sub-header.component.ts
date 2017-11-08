import { Component, Input } from '@angular/core';

@Component({
  selector: 'sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {
  @Input() subHeading: string;
}
