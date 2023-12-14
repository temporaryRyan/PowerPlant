import { canSleep } from './../src/creatureFunctions.js';

describe('canSleep', () => {

  test('given an object as an argument, should return a new object', () => {
    const creature = {};
    const sleepingCreature = canSleep(creature);
    expect(typeof sleepingCreature).toEqual("object");
  });

  test('given an object as an argument, should return a new object with a property "sleep" whose value is a function', () => {
    const creature = {};
    const sleepingCreature = canSleep(creature);
    expect(typeof sleepingCreature.sleep).toEqual("function");
  });

  test('the sleep function should return the correct string', () => {
    const creature = { name: "Harvey" };
    const sleepingCreature = canSleep(creature);
    const stringReturn = sleepingCreature.sleep();
    expect(stringReturn).toEqual("Harvey sleeps.");
  });

});