import { Component, Input, OnInit } from '@angular/core';
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
export class MyLibComponent implements OnInit {
  @Input() title: string = 'My Lib is running';
  @Input() tableConfig!: TableConfigModel;
  noData:string = LABELS.noData;
  noHeaders:string = LABELS.noHeaders;

  ngOnInit(): void {
    if(!this.tableConfig){
      console.error(LABELS.noDataError)
    }
  }
}
