const cucumber = {
  temperature: 0
};

const potato = {
  temperature: 100
};

const makeSomethingCoolAsACucumber = thing => {
  const something = { ...thing };
  something['temperature'] = cucumber.temperature;
  return something;
}

const makeSomethingHotAsAPotato = thing => {
  const something = { ...thing };
  something['temperature'] = potato.temperature;
  return something;
}

const isCoolerThanACucumber = thing => (
  thing.temperature < cucumber.temperature;
)

const isHotterThanAPotato = thing => (
  thing.temperature > potato.temperature;
)
