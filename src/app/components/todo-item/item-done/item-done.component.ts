import { Component } from '@angular/core';

import { TodoItemBaseComponent } from '../todo-item-base/todo-item-base.directive';

@Component({
  selector: 'app-item-done',
  standalone: true,
  imports: [],
  templateUrl: './item-done.component.html',
  styleUrl: './item-done.component.scss',
})
export class ItemDoneComponent extends TodoItemBaseComponent {}
