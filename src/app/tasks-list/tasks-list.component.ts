import { Component } from '@angular/core';
import { ITask } from '../tasks/ITask';
import { mockTasks } from '../tasks/mockTasks';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
  tasks:ITask[] = mockTasks;
  findTitle:string = "";

  onDeleteTask(task: ITask) {
    // Додайте код для видалення завдання із списку
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  onTaskCompletionChange(task:ITask,completed:boolean) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  
  sortTasksByDeadline() {
    this.tasks.sort((a, b) => {
      const deadlineA = new Date(a.deadline).getTime();
      const deadlineB = new Date(b.deadline).getTime();
      return deadlineA - deadlineB;
    });
  }

  

  searchTasksByName(searchText: string) {
    if (searchText) {
      // Використовуємо метод фільтрації для пошуку за іменем
      this.tasks = mockTasks;
      this.tasks = this.tasks.filter(task => task.title.toLowerCase().includes(searchText.toLowerCase()));
    } else {
      // Якщо поле вводу пусте, виводимо усі завдання
      this.tasks = mockTasks;
    }
  }
  

  
  

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      deadline: ['', Validators.required],
      completed: [false]
    });
  }
  createTaskFormVisible = false;

  openCreateTaskForm() {
    this.createTaskFormVisible = true;
  }

  onCreateTask() {
    const newTask: ITask = this.taskForm.value; // Отримайте дані з форми
    mockTasks.push(newTask); // Додайте нове завдання до списку
    this.taskForm.reset(); // Очистіть форму
  }
}
