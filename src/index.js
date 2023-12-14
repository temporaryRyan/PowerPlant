import { changeState, storeState } from './stateLogic.js';

window.onload = function () {
  // Plant UI logic
  const plantControl = storeState();

  // we use changeState() as factory for creating these functions that update properties of an object
  // these variables hold functions that update an objects "soil" property.
  const blueFood = changeState("soil")(5);
  const hydrate = changeState("water")(1);

  document.getElementById('feed').onclick = function () {
    const newPlant = plantControl(blueFood);
    document.getElementById('soil-value').innerText = `Soil: ${newPlant.soil}`;
  };

  document.getElementById('water').onclick = function () {
    const newPlant = plantControl(hydrate);
    document.getElementById('water-value').innerText = `Water: ${newPlant.water}`;
  };

  document.getElementById("powerUp").onclick = function () {
    let newPlant = plantControl(changeState("water")(50));
    newPlant = plantControl(changeState("soil")(50));
    document.getElementById('soil-value').innerText = `Soil: ${newPlant.soil}`;
    document.getElementById('water-value').innerText = `Water: ${newPlant.water}`;
  };

  document.getElementById('show-state').onclick = function () {
    const currentPlantState = plantControl();
    document.getElementById('soil-value').innerText = `Current Soil: ${currentPlantState.soil}`;
    document.getElementById('water-value').innerText = `Current Water: ${currentPlantState.water}`;
  };

  //rpg character UI logic
  // We can create a "character" in the exact same way as we created a plant
  // This demonstrates the flexibility and power of storeState() and changeState()
  // With just two business logic functions, we could create the basis of many
  // different applications. In object-oriented-programming we'd need to create 
  // separate classes for both Plant and Character....
  const characterControl = storeState();

  document.getElementById('power').onclick = function () {
    const newCharacter = characterControl(changeState("power")(3));
    document.getElementById('power-value').innerText = `Power: ${newCharacter.power}`;
  };

  document.getElementById('health').onclick = function () {
    const newCharacter = characterControl(changeState("health")(3));
    document.getElementById('health-value').innerText = `Health: ${newCharacter.health}`;
  };

  document.getElementById('show-character-state').onclick = function () {
    const currentCharacterState = characterControl();
    document.getElementById('power-value').innerText = `Current Power: ${currentCharacterState.power}`;
    document.getElementById('health-value').innerText = `Current Health: ${currentCharacterState.health}`;
  };

  // UI Logic for Application State Logging Button
  document.getElementById("logAppState").onclick = function () {
    const applicationState = [characterControl(), plantControl()];
    console.log("character", applicationState[0]);
    console.log("plant", applicationState[1]);
  };
};