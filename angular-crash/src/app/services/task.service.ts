import { Injectable } from '@angular/core';
import { TASKS } from 'src/_mock_data/mock_task';
import { Task } from 'src/_models/task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const API_URL = "http://localhost:3000/tasks";

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private http: HttpClient) {

  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(API_URL);
    // return TASKS;
    // const tasks = of(TASKS);
    // return tasks;
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${API_URL}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${API_URL}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(API_URL, task, httpOptions);
  }


}
