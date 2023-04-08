import { Task } from 'src/_models/task';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((res: Task[]) =>
      this.tasks = res
    );
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((_task) => this.tasks.push(_task));
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      () => {
        this.tasks = this.tasks.filter((_task) => _task.id !== task.id);
      }
    );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

}
