/* 

1. Create array with monsters that includes name, health points, experience etc.

2. Create function that put out random monster by number

3. Create function that renders the game, monster name, health points

4. Create class Monster, that includes functionality of attacking

5. Create a gaining experience points system

*/

// Declaring basic variables
const getMname = document.getElementById("m_name");
const getMhp = document.getElementById("m_hp");
const getAttackButton = document.getElementById("m_attack");
let mNumber = 0;
let readyToLvlUp = false;


// 1. Array of monsters -----------------
let monstersArray = [
  {
    mName: "Wild dog",
    mHp: 100,
    mExpAmount: 40
  },
  {
    mName: "Hungry wild dog",
    mHp: 120,
    mExpAmount: 60
  },
];

// Creating object Player with declared damage that can be raised or decreased
let mainPlayer = {
  dmg: 3,
  exp: 0
};

// Declaring class monster that can renders a parameters to HTMl
class Monster {
  constructor(name, hp, exp) {

    this.name = name;
    this.hp = hp;
    this.exp = exp;
  };
  renderMonster() {

    getMname.innerHTML = this.name;
    getMhp.innerHTML = this.hp;
  };
}
// ---------------------------------------
// Global scope after creating a class of monster for easy changes in another functions
  let newMonster = new Monster("Monster name", 100, 1);
  

class Player {
  constructor(dmg, exp) {

    this.dmg = dmg;
    this.exp = exp;
  }
  levelUp() {

    if (this.exp >= 100) {
    this.dmg = this.dmg + 3;
    alert('Hurray, you leveled up!');
    this.exp = 0;
    }
    else ("Not enough experience!");
  }
}
// ---------------------------------------
// Global scope after creating a class of a Player for easy changes in another functions
let newPlayer = new Player(mainPlayer.dmg, mainPlayer.exp);

const gameRender = () => {

  // Random monster by number
    mNumber = Math.floor(Math.random() * monstersArray.length); 

  // CREATING A NEW MONSTER
    newMonster = new Monster(monstersArray[mNumber].mName, monstersArray[mNumber].mHp, monstersArray[mNumber].mExpAmount);

  // RENDERING A MONSTER
    newMonster.renderMonster();

  // Adding attack function to the button
  getAttackButton.addEventListener("click", playerAttack);
};

// Attack function, that changes monster Health Points
const playerAttack = () => {

  newMonster.hp = newMonster.hp - newPlayer.dmg;
  console.log(newMonster.hp);

  // If player killed a monster, than render a new monster
  if (newMonster.hp <= 0) {
    
    alert('You killed ' + newMonster.name);

    newPlayer.exp = newPlayer.exp + newMonster.exp;
    newPlayer.levelUp();

    gameRender();
    console.log(newPlayer.exp);

  }
}


gameRender();
