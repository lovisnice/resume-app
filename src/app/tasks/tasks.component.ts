import { Component,Input, Output, EventEmitter } from '@angular/core';

import { ITask } from './ITask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() task: ITask;
  @Output() deleteTask = new EventEmitter<ITask>();  
  constructor() {
    this.task = {
    title : "",
      status : "",
      priority : "",
      deadline: "",
      completed: false
    
  }
}
onTaskCompletionChange() {
  if (this.task) {
    this.task.completed = !this.task.completed;
  
  }
}


  onDeleteTask() {
    this.deleteTask.emit(this.task);
  }

}
