import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoItemBaseComponent } from '../todo-item-base/todo-item-base.directive';

@Component({
  selector: 'app-item-not-started',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-not-started.component.html',
  styleUrl: './item-not-started.component.scss',
})
export class ItemNotStartedComponent extends TodoItemBaseComponent {}
