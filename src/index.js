//business logic

const playerState = () => {
  let currentState = { health: 100, attack: 5, defense: 10};
  return (stateChangeFunction = state => state) =>
  {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const enemyState = () => {
  let currentState = { health : 10, attack: 2, defense: 0};
  return (stateChangeFunction = state => state) => 
  {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const changeState = (prop) => {
  return(value) => {
    return(state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

//Classes
const techRunner = playerState();

//Enemies
const smallRobotEnemy = enemyState();

//to create new Actor "player1 = techRunner;"

//function factory

const fiveDamage = changeState("health")(-5);
const tenDamage = changeState("health")(-10);

const hitPlayer1 = player(fiveDamage);





