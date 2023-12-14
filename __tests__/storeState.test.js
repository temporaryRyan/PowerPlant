import { storeState } from '../src/stateLogic.js';

describe('storeState', () => {

  test('should return a function', () => {
    const stateControl = storeState();
    expect(typeof stateControl).toEqual("function");
  });

  test('calling the returned function without arguments should return an empty object', () => {
    const stateControl = storeState();
    const initialState = stateControl();
    expect(initialState).toEqual({});
  });

  test('calling the returned function with a stateChangeFunction should update the state', () => {
    const stateControl = storeState();

    const stateChangeFunction = (state) => ({
      soil: (state.soil || 0) + 1
    });

    const updatedState = stateControl(stateChangeFunction);
    expect(updatedState).toEqual({ soil: 1 });
  });

  test('calling the returned function multiple times should accumulate state changes', () => {
    const stateControl = storeState();

    const stateChangeFunction = (state) => ({
      soil: (state.soil || 0) + 1
    });

    const updatedState1 = stateControl(stateChangeFunction);
    const updatedState2 = stateControl(stateChangeFunction);

    expect(updatedState1).toEqual({ soil: 1 });
    expect(updatedState2).toEqual({ soil: 2 });
  });

  test('calling the returned function with a different stateChangeFunction should update the state accordingly', () => {
    const stateControl = storeState();

    const incrementFunction = (state) => ({
      soil: (state.soil || 0) + 1
    });

    const decrementFunction = (state) => ({
      soil: (state.soil || 0) - 1
    });

    const updatedState1 = stateControl(incrementFunction);
    const updatedState2 = stateControl(decrementFunction);

    expect(updatedState1).toEqual({ soil: 1 });
    expect(updatedState2).toEqual({ soil: 0 });
  });

});
