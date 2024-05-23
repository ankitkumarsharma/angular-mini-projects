import { Component, OnInit, inject } from '@angular/core';
import { AppService } from '../services/app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-check.component.html',
  styleUrl: './profile-check.component.scss'
})
export class ProfileCheckComponent implements OnInit {
  appService = inject(AppService);
  todoList:any;

  ngOnInit(): void {
    this.getTodoList();
  }
  getTodoList(){
    this.appService.getTodoList().subscribe((data)=>{
      this.todoList = data;
    })
  }
}
