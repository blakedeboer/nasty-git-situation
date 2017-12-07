const cucumber = {
  temperature: 0
};

const potato = {
  temperature: 100
};

const makeSomethingCoolAsACucumber = thing => {
<<<<<<< HEAD
  thing['temperature'] = cucumber.temperature;
  return thing;
}

const makeSomethingHotAsAPotato = thing => {
  thing['temperature'] = potato.temperature;
  return thing;
=======
    const something = { ...thing };
    something['temperature'] = cucumber.temperature;
    return something;
}

const makeSomethingHotAsAPotato = thing => {
    const something = { ...thing };
    something['temperature'] = potato.temperature;
    return something;
>>>>>>> Prevent mutation of original object
}
