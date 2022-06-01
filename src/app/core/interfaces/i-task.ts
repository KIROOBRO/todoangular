export interface ITask {
  name: string;
  description: string;
  icon: string;
  isBlack: boolean;
  todos: ITodo[];
}

export interface ITodo {
  checked: boolean;
  label: string;
}
