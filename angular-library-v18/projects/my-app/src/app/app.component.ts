import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLibComponent } from 'my-lib';
import { DUMMY_DATA_TABLE_CONFIG } from './core/app.constant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  tableConfig = DUMMY_DATA_TABLE_CONFIG;
}

