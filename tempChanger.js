const cucumber = {
    temperature: 0
};

const potato = {
    temperature: 100
};

const makeSomethingCoolAsACucumber = thing => {
    thing['temperature'] = cucumber.temperature;
    return thing;
}

const makeSomethingHotAsAPotato = thing => {
    thing['temperature'] = potato.temperature;
    return thing;
}
