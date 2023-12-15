import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataListModel } from './core/app.models';
import { DATA_LIST } from './core/app.constant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-accordian';
  dataList: DataListModel[] = DATA_LIST;
  onItemClick(index: any) {
    for (let i = 0; i < this.dataList.length; i++) {
      this.dataList[i].active = false;
      this.dataList[index].active = true;
    }
  }
}
