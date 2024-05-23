import { CommonModule } from '@angular/common';
import { Component, OnInit, input, output } from '@angular/core';
import { TodoListJsonModel } from '../core/app.models';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profile = input<TodoListJsonModel>();
  active = output<TodoListJsonModel | undefined>();
  onActiveProfile(profile:TodoListJsonModel | undefined){
    this.active.emit(profile)
  }
}
