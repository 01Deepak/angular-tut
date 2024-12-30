import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todoData: any = [];
  addTodo(item: string) {
    console.log(item);
    this.todoData.push({
      id: this.todoData.length + 1,
      name: item});
  }

  deleteTodo(id: number) {
    console.log(id);
    this.todoData = this.todoData.filter((todo: any) => todo.id !== id);
  }
}
