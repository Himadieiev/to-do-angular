import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TodoGroupComponent } from './components/todo-group/todo-group.component';
import { TodoGroup, TodoItem, TodoStatus } from './interfaces/todo.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public todoGroups: TodoGroup[];

  constructor() {
    this.todoGroups = [
      {
        title: 'First Group',
        items: [
          {
            title: 'First Meeting',
            description: 'To meet with friends',
            status: TodoStatus.NOT_STARTED,
          },
          {
            title: 'First Walking',
            description: 'To walk in the city',
            status: TodoStatus.IN_PROGRESS,
          },
          {
            title: 'First Watching',
            description: 'To watch TV show',
            status: TodoStatus.DONE,
          },
        ],
      },
    ];
  }

  public addGroup(): void {
    let tempGroup: TodoGroup = {
      title: '',
      items: [],
    };

    this.todoGroups.push(tempGroup);
  }

  public handleChangeTitle(value: { value: string; index: number }): void {
    this.todoGroups[value.index].title = value.value;
  }

  public handleDeleteGroup(value: number) {
    this.todoGroups.splice(value, 1);
  }

  public handleAddToDo(value: { item: TodoItem; index: number }) {
    this.todoGroups[value.index].items?.push(value.item);
  }
}
