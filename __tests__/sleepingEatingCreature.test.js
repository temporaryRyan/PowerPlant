import { sleepingEatingCreature } from './../src/creatureFunctions.js';

describe('sleepingEatingCreature', () => {

  test('given a name as an argument, should return an object', () => {
    const creature = sleepingEatingCreature("Harvey");
    expect(typeof creature).toEqual("object");
  });

  test('returned object should have the correct "name" property', () => {
    const creature = sleepingEatingCreature("Harvey");
    expect(creature.name).toEqual("Harvey");
  });

  test('returned object should have properties "eat" and "sleep" with function values', () => {
    const creature = sleepingEatingCreature("Harvey");
    expect(typeof creature.eat).toEqual("function");
    expect(typeof creature.sleep).toEqual("function");
  });

  test('calling eat function should return a string', () => {
    const creature = sleepingEatingCreature("Harvey");
    const stringReturn = creature.eat("apples");
    expect(typeof stringReturn).toEqual("string");
  });

  test('calling sleep function should return a string', () => {
    const creature = sleepingEatingCreature("Harvey");
    const stringReturn = creature.sleep();
    expect(typeof stringReturn).toEqual("string");
  });

  test('calling eat function should return the correct string', () => {
    const creature = sleepingEatingCreature("Harvey");
    const stringReturn = creature.eat("apples");
    expect(stringReturn).toEqual("Harvey eats apples.");
  });

  test('calling sleep function should return the correct string', () => {
    const creature = sleepingEatingCreature("Harvey");
    const stringReturn = creature.sleep();
    expect(stringReturn).toEqual("Harvey sleeps.");
  });

});