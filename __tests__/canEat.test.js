import { canEat } from './../src/creatureFunctions.js';

describe('canEat', () => {

  test('given an object as an argument, should return a new object', () => {
    const creature = {}
    const eatingCreature = canEat(creature);
    expect(typeof eatingCreature).toEqual("object");
  });

  test('given an object as an argument, should return a new object with a property "eat" whose value is a function', () => {
    const creature = {}
    const eatingCreature = canEat(creature);
    expect(typeof eatingCreature.eat).toEqual("function");
  });

  test('given a string argument, the eat function should return a string ', () => {
    const creature = { name: "Harvey" }
    const eatingCreature = canEat(creature);
    const stringReturn = eatingCreature.eat("apples")
    expect(stringReturn).toEqual("Harvey eats apples.");
  });

});