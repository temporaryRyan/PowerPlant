export const canEat = (creature) => ({
  eat: (food) => {
    return `${creature.name} eats ${food}.`;
  }
});

export const canSleep = (creature) => ({
  sleep: () => {
    return `${creature.name} sleeps.`;
  }
});

export const sleepingEatingCreature = (name) => {
  let creature = {
    name: name,
    age: undefined,
    color: undefined
  };

  return { ...creature, ...canEat(creature), ...canSleep(creature) };
};

