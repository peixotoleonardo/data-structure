import { faker } from '@faker-js/faker';
import { Suite, Event } from 'benchmark';

import { ArrayStack } from '@/stack/array-stack';

const suite = new Suite();

const data = Array.from(
  { length: faker.number.int({ min: 1, max: 10000 }) }, 
  () => faker.number.int(),
);

const stack = new ArrayStack(data);

suite
  .add({
    name: 'ArrayStack#top',
    fn: () => stack.top(),
  })
  .on('cycle', function(event: Event) {
    console.log(event.target.toString());
  })
  .run({ async: true });
