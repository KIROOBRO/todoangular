export interface ITask {
  name: string;
  description: string;
  icon: string;
  id: string;
  todos: ITodo[];
}

export interface ITodo {
  checked: boolean;
  label: string;
}
