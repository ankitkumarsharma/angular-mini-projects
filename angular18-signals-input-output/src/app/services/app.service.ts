import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { TodoListJsonModel } from "../core/app.models";
import { TODO_LIST_JSON, URL } from "../core/app.constant";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    todoList:TodoListJsonModel[] = TODO_LIST_JSON;
    constructor(private httpClient:HttpClient){}

    getTodoList() {
        return of(this.todoList); // just used of() method, because we are not using api integration
    }

    getSingleImagePost(id:string){
        return this.httpClient.get(`${URL.PHOTO_LIST}/${id}`);
    }
}