import { da, faker } from '@faker-js/faker';

import { ArrayStack } from '@/stack/array-stack';

describe('ArrayStack', () => {
  let data: number[];

  beforeEach(() => {
    data = Array.from(
      { length: faker.number.int({ min: 1, max: 100 }) }, 
      () => faker.number.int(),
    );
  });

  describe('size', () => {
    it('should return the size of the stack', () => {
      expect(new ArrayStack(data).size()).toBe(data.length);
    });
  });

  describe('isEmpty', () => {
    it('should return whether the stack is empty', () => {
      expect(new ArrayStack([]).isEmpty()).toBe(true);
      expect(new ArrayStack(data).isEmpty()).toBe(false);
    });
  });

  describe('top', () => {
    it('when the stack is not empty, it should return the top element of the stack without removing it from the stack', () => {
      expect(new ArrayStack(data).top()).toBe(data.at(-1));
      expect(new ArrayStack(data).size()).toBe(data.length);
    });

    it('when the stack is empty, it should return null', () => {
      expect(new ArrayStack([]).top()).toBeNull();
    });
  });

  describe('push', () => {
    it('should add an element to the top of the stack', () => {
      const element = faker.number.int();
      const stack = new ArrayStack(data);
      stack.push(element);

      expect(stack.top()).toBe(element);
    });
  });

  describe('pop', () => {
    it('when the stack is not empty, it should return the top element of the stack and remove it from the stack', () => {
      const stack = new ArrayStack(data);
      const topElement = stack.top();

      expect(stack.pop()).toBe(topElement);
      expect(stack.size()).toBe(data.length - 1);
    });

    it('when the stack is empty, it should return null', () => {
      expect(new ArrayStack([]).top()).toBeNull();
    });
  });
});
