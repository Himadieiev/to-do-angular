import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TodoItem, TodoStatus } from '../../../interfaces/todo.interface';

@Directive({
  standalone: true,
})
export class TodoItemBaseComponent implements OnInit {
  @Input() todoItem!: TodoItem;
  @Input() index!: number;

  @Output() eventChangeDescription = new EventEmitter<{ description: string; index: number }>();
  @Output() changeStatus = new EventEmitter<{ status: TodoStatus; index: number }>();

  public todoStatus = TodoStatus;

  public isShowDescription = false;

  public description?: string;

  public emitChangeDescription(value: string): void {
    this.eventChangeDescription.emit({
      description: value,
      index: this.index,
    });
  }

  public emitChangeStatus(value: TodoStatus): void {
    this.changeStatus.emit({
      status: value,
      index: this.index,
    });
  }

  ngOnInit(): void {
    this.description = this.todoItem.description;
  }
}
