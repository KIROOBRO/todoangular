export interface ITask {
  name: string;
  description: string;
  icon: string;
  isBlack: boolean;
  id: number;
  todos: ITodo[];
}

export interface ITodo {
  checked: boolean;
  label: string;
}
