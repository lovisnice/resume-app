import { Component,Input, Output, EventEmitter } from '@angular/core';
import { ITask } from './ITask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() task?: ITask;
  @Output() deleteTask = new EventEmitter<ITask>();
  completed = this.task?.completed;

  onTaskCompletionChange() {
    this.completed = !this.completed;
  }

  onDeleteTask() {
    this.deleteTask.emit(this.task);
  }

}
