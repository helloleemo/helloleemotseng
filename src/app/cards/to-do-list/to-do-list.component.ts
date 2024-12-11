import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { templateComponent } from '../template/template.component';

interface Todo {
  text: string;
  completed: boolean;
  color: string;
}

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule,templateComponent],
  templateUrl: './to-do-list.component.html',
})
export class ToDoListComponent {
  newTodo = '';
  currentColor = 'bg-gray-400';
  colors = ['bg-gray-400', 'bg-blue-400', 'bg-red-400', 'bg-green-400'];
  todos: Todo[] = [];
  private colorIndex = 0;

  onAddTodo(): void {
    const trimmedText = this.newTodo.trim();
    if (trimmedText) {
      this.todos.push({
        text: trimmedText,
        completed: false,
        color: this.currentColor,
      });
      this.newTodo = '';
    }
  }

  onToggleComplete(index: number): void {
    this.todos[index].completed = !this.todos[index].completed;
  }

  onRemoveTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  onChangeColor(): void {
    this.colorIndex = (this.colorIndex + 1) % this.colors.length;
    this.currentColor = this.colors[this.colorIndex];
  }
}