import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyLibComponent } from '../../../my-lib/src/lib/my-lib.component';
import { TableConfigModel } from '../../../my-lib/src/lib/core/my-lib.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MyLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  tableConfig = DUMMY_DATA_TABLE_CONFIG;
}
export const DUMMY_DATA_TABLE_CONFIG: TableConfigModel = {
  title: 'Reusable Table',
  tableHeaders: [
      {
          label:'Name',
          value:'name'
      },
      {
          label:'City',
          value:'city'
      },
      {
          label:'Country',
          value:'country'
      }
  ],
  tableData: [
      {
          name: 'Ankit',
          city: 'Delhi',
          country: 'India'
      },
      {
          name: 'Manish',
          city: 'Gurgaon',
          country: 'India'
      },
      {
          name: 'Rahul',
          city: 'Bangalore',
          country: 'India'
      }
  ]
}