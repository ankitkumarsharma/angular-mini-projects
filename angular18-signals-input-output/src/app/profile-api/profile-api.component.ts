import { CommonModule } from '@angular/common';
import { Component, OnInit, input, output } from '@angular/core';
import { TodoListJsonModel } from '../core/app.models';

@Component({
  selector: 'profile-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-api.component.html',
  styleUrl: './profile-api.component.scss'
})
export class ProfileApiComponent {
  profile = input<TodoListJsonModel>();
}
