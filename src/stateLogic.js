// changeState() is used as a factory for creating many different functions. 
// The functions it creates can be used to increment
// any property (prop) of any object (state) by any value (value).
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

// storeState() returns a function that has access to currentState 
// the function returned by storeState() takes another function as an argument 
// the function provided as an argument should alter an object provided to it as an argument
// and then return the newly updated currentState.
export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};
