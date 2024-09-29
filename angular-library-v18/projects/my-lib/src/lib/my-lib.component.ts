import { Component, input, OnInit } from '@angular/core';
import { TableConfigModel } from './core/my-lib.models';
import { LABELS } from './core/my-lib.constant';

@Component({
  selector: 'my-lib',
  standalone: true,
  imports: [],
  templateUrl: './my-lib.component.html',
  styleUrls: ['./my-lib.component.scss']
})
export class MyLibComponent implements OnInit {
  title = input<string>(`Ankit Sharma's Library is running...`);
  tableConfig = input<TableConfigModel>();
  noData:string = LABELS.noData;
  noHeaders:string = LABELS.noHeaders;

  ngOnInit(): void {
    if(!this.tableConfig){
      console.error(LABELS.noDataError)
    }
  }
}
