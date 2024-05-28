import { Component, OnInit, inject } from '@angular/core';
import { AppService } from '../services/app.service';
import { CommonModule } from '@angular/common';
import { TodoListJsonModel } from '../core/app.models';
import { ProfileComponent } from "../profile/profile.component";
import { ProfileApiComponent } from "../profile-api/profile-api.component";

@Component({
    selector: 'profile-check',
    standalone: true,
    templateUrl: './profile-check.component.html',
    styleUrl: './profile-check.component.scss',
    imports: [CommonModule, ProfileComponent, ProfileApiComponent]
})
export class ProfileCheckComponent implements OnInit {
  appService = inject(AppService);
  todoList!: TodoListJsonModel[];
  profile:TodoListJsonModel | undefined;
  profileApi:any | undefined;
  activeProfile:TodoListJsonModel | undefined;
  ngOnInit(): void {
    this.getTodoList();
  }
  getTodoList() {
    this.appService.getTodoList().subscribe((data: TodoListJsonModel[]) => {
      this.todoList = data;
      let defaultValue = {
        albumId: 0,
        id: 0,
        title: "",
        url: "",
        thumbnailUrl: "",
        label: "Select"
      }
      this.todoList = [defaultValue, ...this.todoList]
    })
  }

  onChangeProfile(event:any){
    this.profileApi = null;
    this.profile = this.todoList.find((value) => value.id == event.value);
    // get single image post with each time API hit
    this.appService.getSingleImagePost(event.value).subscribe((data)=>{
      this.profileApi = data;
    })
  }

  onActive(profile:TodoListJsonModel | undefined){
    this.activeProfile = profile
  }
}
