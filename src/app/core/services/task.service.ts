import {Injectable} from "@angular/core";
import {ITask, ITodo} from "../interfaces/i-task";
import {descriptions} from "../constants/descriptions";
import {icons} from "../constants/icons";

@Injectable({providedIn: "root"})

export class TaskService {
  private data: ITask[] = [
    {
      name: 'First Task',
      description: 'Random',
      icon: 'accessible',
      id: '1',
      todos: [
        {
          checked: false,
          label: 'Помыть кота'
        },
        {
          checked: true,
          label: 'Pizdec'
        },
        {
          checked: false,
          label: 'Hlam'
        },

      ]
    },
    {
      name: 'Second Task',
      description: this.generatorUniqDesc(),
      icon: this.generatorUniqIcon(),
      id: '2',
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

  public addTodo(task: ITask, todo: ITodo): void {
    task.todos.push(todo);
  }

  public getCurrentTask(id: string): ITask {
    const task = this.data.find(task => task.id === id);
    return task as ITask
  }

  public generatorUniqId(): string {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  public generatorUniqIcon(): string {
    return icons[Math.floor(Math.random() * (icons.length - 1)) + 1];
  }

  public generatorUniqDesc(): string {
    return descriptions[Math.floor(Math.random() * (descriptions.length - 1)) + 1];
  }

}
