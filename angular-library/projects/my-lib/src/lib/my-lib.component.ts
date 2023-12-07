import { Component, Input } from '@angular/core';
import { TableConfigModel } from './core/my-lib.models';
import { CommonModule } from '@angular/common';
import { LABELS } from './core/my-lib.constant';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-lib.component.html',
  styleUrls: ['./my-lib.component.scss']
})
export class MyLibComponent {
  @Input() title: string = 'My Lib is running';
  @Input() tableConfig!: TableConfigModel;
  noData:string = LABELS.noData;
  noHeaders:string = LABELS.noHeaders;
}
