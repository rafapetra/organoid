import './css/styles.css';
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
      [prop] : (state[prop] || 0 || "") + value
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

const handleName = changeState("Name");

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

function playGame(player)
{
  const enemy1 = playerState();

  enemy1(smallRobotEnemy);
  //startGameBtn.removeAttribute("class");

  //const option = document.getElementsByName('door');
  const option = document.getElementById('attackBtn').value;


  console.log(option);

  if( option === "door1")
  {
    const rolldie = Math.floor(Math.random() * 3) + 1;

    if( rolldie === 1)
    {
      player(fiveDamage);
    }
    else if(rolldie === 2)
    {
      enemy1(fiveDamage);
    }
    else
    {
      console.log(" YOU both miss! Kaboom!!! The door was blasted away!")
    }

  }
  else if( option === "door2")
  {
    console.log( "there is locked shiny box, and blinking red. Very enticing object")
  }
  else
  {
    console.log("nothing to see, keep on looking.")
  }

  console.log(name);
  console.log(className);
  console.log(player());
  console.log(enemy1());

}

//UI Logic

function handleCreateCharacter() {
  event.preventDefault();
  document.querySelector('#response').innerText = null;

  const name = document.querySelector('#name').value;
  const className = document.querySelector('#className').value;

  const player = playerState();
  player(handleName(name));
  
  if(className === "cyborg")
  {
    player(cyborg);
  }
  else
  {
    player(techRunner);
  }

  playGame(player);
}


window.addEventListener("load", function() {
  let form = document.querySelector("#createCharacter");
  let submitBtn = document.getElementById("submitBtn");
  let attackBtn = document.getElementById("attackBtn");
  let resetBtn = document.getElementById("resetBtn");


  document.querySelector("#createCharacter").addEventListener("submit", handleCreateCharacter);
  // document.querySelector("#attack1").addEventListener("submit", playGame);


  submitBtn.removeAttribute("class");
  
  form.addEventListener("submit", function() {
    submitBtn.setAttribute("class","hidden");

    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function() {
    submitBtn.removeAttribute("class");
    document.querySelector('#response').innerText = null;
    document.querySelector('#response2').innerText = null;
    document.querySelector('#response3').innerText = null;
    document.querySelector('#response4').innerText = null;
    document.querySelector('#response5').innerText = null;
    resetBtn.setAttribute("class","hidden");
  });
});
