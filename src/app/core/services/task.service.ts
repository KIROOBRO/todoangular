import {Injectable} from "@angular/core";
import {ITask} from "../interfaces/i-task";

@Injectable({providedIn: "root"})

export class TaskService {
  private data: ITask[] = [
    {
      name: 'First Task',
      description: 'Random',
      icon: 'accessible',
      isBlack: true,
      todos: [
        {
          checked: true,
          label: 'Помыть кота'
        },
        {
          checked: true,
          label: 'Pizdec'
        },
        {
          checked: true,
          label: 'Hlam'
        },

      ]
    },
    {
      name: 'Second Task',
      description: 'Random',
      icon: 'accessible',
      isBlack: false,
      todos: [
        {
          checked: false,
          label: 'Find exit from tilt'
        },
        {
          checked: true,
          label: 'Make a Angular Project'
        }
      ]
    },

  ];

  public getData(): ITask[] {
    return this.data
  }

  public addData(todoCard: ITask): void {
    this.data.push(todoCard);
  }

}
