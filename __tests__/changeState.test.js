import { changeState } from './../src/stateLogic.js';

describe('changeState', () => {

  test('should return a function', () => {
    const stateChange = changeState('soil');
    expect(typeof stateChange).toEqual("function");
  });

  test('calling the returned function without arguments should return a state change function', () => {
    const stateChange = changeState('soil');
    const stateChangeFunction = stateChange(1);
    expect(typeof stateChangeFunction).toEqual("function");
  });

  test('calling the state change function should update the specified property in the state', () => {
    const stateChange = changeState('soil');
    const stateChangeFunction = stateChange(1);

    const initialState = { soil: 0 };
    const updatedState = stateChangeFunction(initialState);

    expect(updatedState).toEqual({ soil: 1 });
  });

  test('calling the state change function with a negative value should decrement the specified property in the state', () => {
    const stateChange = changeState('soil');
    const stateChangeFunction = stateChange(-1);

    const initialState = { soil: 3 };
    const updatedState = stateChangeFunction(initialState);

    expect(updatedState).toEqual({ soil: 2 });
  });

  test('calling the state change function with a non-existent property should create the property in the state', () => {
    const stateChange = changeState('soil');
    const stateChangeFunction = stateChange(1);

    const initialState = { otherProp: 42 };
    const updatedState = stateChangeFunction(initialState);

    expect(updatedState).toEqual({ otherProp: 42, soil: 1 });
  });

  test('calling the state change function multiple times should accumulate changes', () => {
    const stateChange = changeState('soil');
    const stateChangeFunction = stateChange(1);

    const initialState = { soil: 0 };

    const updatedState1 = stateChangeFunction(initialState);
    const updatedState2 = stateChangeFunction(updatedState1);
    const updatedState3 = stateChangeFunction(updatedState2);
    const updatedState4 = stateChangeFunction(updatedState3);
    const updatedState5 = stateChangeFunction(updatedState4);
    expect(updatedState5).toEqual({ soil: 5 });
  });

});
