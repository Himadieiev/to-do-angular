import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoGroup, TodoItem, TodoStatus } from '../../interfaces/todo.interface';
import { ItemDoneComponent } from '../todo-item/item-done/item-done.component';
import { ItemInProgressComponent } from '../todo-item/item-in-progress/item-in-progress.component';
import { ItemNotStartedComponent } from '../todo-item/item-not-started/item-not-started.component';

@Component({
  selector: 'app-todo-group',
  standalone: true,
  imports: [
    CommonModule,
    ItemDoneComponent,
    ItemInProgressComponent,
    ItemNotStartedComponent,
    FormsModule,
  ],
  templateUrl: './todo-group.component.html',
  styleUrl: './todo-group.component.scss',
})
export class TodoGroupComponent implements OnInit {
  @Input() todoGroup!: TodoGroup;
  @Input() index!: number;

  @Output() changeTitleEvent: EventEmitter<{ value: string; index: number }> = new EventEmitter<{
    value: string;
    index: number;
  }>();

  @Output() deleteGroup = new EventEmitter<number>();
  @Output() addNewToDo = new EventEmitter<{ item: TodoItem; index: number }>();
  @Output() changeDescription = new EventEmitter<{
    description: string;
    indexGroup: number;
    indexItem: number;
  }>();
  @Output() changeItemStatus = new EventEmitter<{
    status: TodoStatus;
    indexGroup: number;
    indexItem: number;
  }>();

  public isShowTitle = true;

  public groupTitle?: string;

  public enterValue(): void {
    this.isShowTitle = true;

    this.changeTitleEvent.emit({ value: this.groupTitle!, index: this.index });
  }

  public removeGroup(): void {
    this.deleteGroup.emit(this.index);
  }

  public addToDo(value: string) {
    this.addNewToDo.emit({
      item: {
        status: TodoStatus.NOT_STARTED,
        title: value,
        description: '',
      },
      index: this.index,
    });
  }

  public handleChangeItemDescription(value: { description: string; index: number }): void {
    this.changeDescription.emit({
      description: value.description,
      indexGroup: this.index,
      indexItem: value.index,
    });
  }

  public handleChangeStatus(value: { status: TodoStatus; index: number }): void {
    this.changeItemStatus.emit({
      status: value.status,
      indexItem: value.index,
      indexGroup: this.index,
    });
  }

  ngOnInit(): void {
    this.groupTitle = this.todoGroup.title;

    if (this.todoGroup.title === '') {
      this.isShowTitle = false;
    }
  }
}
