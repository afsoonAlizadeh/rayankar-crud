export interface Action<T = any> {
  name: string;
  title?: string;
  data?: T;
}

export interface EventAction {
  id: string;
  name: string;
}
