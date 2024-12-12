import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TemplateComponent } from '../template/template.component';

interface Todo {
  text: string;
  completed: boolean;
  color: string;
}

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, TemplateComponent],
  templateUrl: './to-do-list.component.html',
})
export class ToDoListComponent {
  newItem = '';
  currentColor = 'bg-gray-400';
  colors = ['bg-gray-400', 'bg-blue-400', 'bg-red-400', 'bg-green-400'];
  todolist: Todo[] = [];
  colorIndex = 0;
  isError = false;

  dragIndex: number | null = null;



  // Add or remove items from the list
  onInputChange(event: Event): void {
    //: void - Not return any value.
    this.newItem = (event.target as HTMLInputElement).value;
    this.isError = false;
  }
  AddItem(): void {
    // console.log(this.newItem);
    const trimmedText = this.newItem.trim();
    if (trimmedText) {
      this.todolist.push({
        text: trimmedText,
        completed: false,
        color: this.currentColor,
      }
      );
      this.newItem = '';
    } else {
      this.isError = true;
    }
  }
  onToggleComplete(index: number): void {
    this.todolist[index].completed = !this.todolist[index].completed;
  }
  onRemoveTodo(index: number): void {
    this.todolist.splice(index, 1);
  }
  onChangeColor(): void {
    this.colorIndex = (this.colorIndex + 1) % this.colors.length;
    this.currentColor = this.colors[this.colorIndex];
  }


  // Drag and Drop API

  dragStart(e:DragEvent, i: number): void {
    this.dragIndex = i;
    e.dataTransfer?.setData('text/plain', i.toString());
  }
  dragging(e: Event): void {
    e.preventDefault();
  }
  drop(e: Event, i: number): void {
    e.preventDefault();
    const draggedIndex = this.dragIndex;
    if (draggedIndex !== null && draggedIndex !== i) {
      const draggedItem = this.todolist[draggedIndex];
      this.todolist.splice(draggedIndex, 1);
      this.todolist.splice(i, 0, draggedItem);
      this.dragIndex = null;
    }
  }

}