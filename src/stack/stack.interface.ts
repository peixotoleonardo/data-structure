export interface IStack<T> {
  size(): number;
  isEmpty(): boolean;
  top(): T;
  push(element: T): void;
  pop(): T;
}
