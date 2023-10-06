import { IStack } from '@/stack/stack.interface';

export class ArrayStack<T> implements IStack<T> {
  private readonly data: T[];

  constructor(
    data: T[],
  ) {
    this.data = [...data];
  }

  size(): number {
    return this.data.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  top() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data[this.size() - 1];
  }

  push(element: T): void {
    this.data.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    
    return this.data.pop();
  }
}
