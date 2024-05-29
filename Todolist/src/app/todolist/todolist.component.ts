// todo-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodoListComponent {
  @Input() taskArray: { taskName: string, taskDesc: string }[] = [];
  @Output() deleteTask = new EventEmitter<number>();
  @Output() modifyTask = new EventEmitter<number>();
  @Output() checkTask = new EventEmitter<number>();

  onDelete(index: number) {
    this.deleteTask.emit(index);
  }

  onModify(index: number) {
    this.modifyTask.emit(index);
  }

  onCheck(index: number) {
    this.checkTask.emit(index);
  }
}

