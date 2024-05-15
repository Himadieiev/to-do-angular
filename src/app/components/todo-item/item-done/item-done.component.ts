import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoItemBaseComponent } from '../todo-item-base/todo-item-base.directive';

@Component({
  selector: 'app-item-done',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-done.component.html',
  styleUrl: './item-done.component.scss',
})
export class ItemDoneComponent extends TodoItemBaseComponent {}
