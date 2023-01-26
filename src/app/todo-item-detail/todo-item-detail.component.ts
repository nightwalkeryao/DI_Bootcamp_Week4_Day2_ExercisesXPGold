import { Component } from '@angular/core';
import { Task } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-item-detail',
  templateUrl: './todo-item-detail.component.html',
  styleUrls: ['./todo-item-detail.component.css']
})
export class TodoItemDetailComponent {
  task!: Task; 
}
