import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { TodoListJsonModel } from "../core/app.models";
import { TODO_LIST_JSON } from "../core/app.constant";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    todoList:TodoListJsonModel[] = TODO_LIST_JSON;
    constructor(){}

    getTodoList() {
        return of(this.todoList); // just used of() method, because we are not using api integration
    }
}