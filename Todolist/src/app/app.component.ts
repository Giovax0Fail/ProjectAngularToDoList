// app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'To-Do Application'; // Aggiungi questa proprietà se intendi usarla

  taskArray: { taskName: string; taskDesc: string }[] = [];

  modifying_at_index: number = -1;

  onSubmit(taskForm: any) {
    if (this.modifying_at_index === -1) {
      this.taskArray.push({
        taskName: taskForm.value.task,
        taskDesc: taskForm.value.desc,
      });
      taskForm.reset();
    } else {
      var task = this.taskArray[this.modifying_at_index];
      (task.taskName = taskForm.value.task),
        (task.taskDesc = taskForm.value.desc);
      taskForm.reset();
      this.modifying_at_index = -1;
    }
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }

  onModify(index: number) {
    var task = this.taskArray[index];
    this.modifying_at_index = index;
  }

  onCheck(index: number) {}

  constructor(private router: Router) {}
}
