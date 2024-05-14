import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoGroup } from '../../../interfaces/todo.interface';
import { ItemDoneComponent } from '../../todo-item/item-done/item-done.component';
import { ItemInProgressComponent } from '../../todo-item/item-in-progress/item-in-progress.component';
import { ItemNotStartedComponent } from '../../todo-item/item-not-started/item-not-started.component';

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

  public isShowTitle = true;

  public groupTitle?: string;

  public enterValue(): void {
    this.isShowTitle = true;

    this.changeTitleEvent.emit({ value: this.groupTitle!, index: this.index });
  }

  ngOnInit(): void {
    this.groupTitle = this.todoGroup.title;

    if (this.todoGroup.title === '') {
      this.isShowTitle = false;
    }
  }
}
