//business logic

const playerState = () => {
  let currentState = {};
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

const classGenerator = (health) => {
  return (healthValue) => {
    return (attack) => { 
      return (attackValue) => {
        return (defense) => {
          return (defenseValue) => {
            return(className) => {
              return( classValue) => {
                return(state) => ({
                  ...state,
                  [health] : (state[health] || 0) + healthValue,
                  [attack] : (state[attack] || 0) + attackValue,
                  [defense] : (state[defense] || 0) + defenseValue,
                  [className]: (state[className] || "") + classValue
                })
              }  
            } 
          }
        }
      }
    }
  }
}

//Classes
const cyborg = classGenerator("health")(200)("attack")(20)("defense")(5)("className")("Cyborg");
const techRunner = classGenerator("health")(100)("attack")(10)("defense")(20)("className")("Tech Runner");

//Enemies
const smallRobotEnemy = classGenerator("health")(10)("attack")(5)("defense")(5)("className")("Tiny Bot");
const codersWrath = classGenerator("health")(20)("attack")(10)("defense")(10)("className")("Special Bot");
const guardianRobots = classGenerator("health")(220)("attack")(80)("defense")(50)("className")("Guardians");
const organoidIntelligence = classGenerator("health")(10000)("attack")(100)("defense")(1000)("className")("Organoid");

//attacks
const fiveDamage = changeState("health")(-5);
const tenDamage = changeState("health")(-10);
const holyCrapDamage = changeState("health")(-80);
const oneHitWonder = changeState("health")(-100);

//items

const stimpack = changeState("health")(5);
const superHeal = changeState("health")(10);

/*
//to create new character/enemy
const playerName = playerState();
//to set class type
playerName(className);
//to act on player
playerName(fiveDamage);
*/

//UI Logic