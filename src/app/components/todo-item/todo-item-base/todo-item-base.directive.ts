import { Directive, Input } from '@angular/core';

import { TodoItem } from '../../../interfaces/todo.interface';

@Directive({
  standalone: true,
})
export class TodoItemBaseComponent {
  @Input() todoItem!: TodoItem;
  @Input() index!: number;
}
