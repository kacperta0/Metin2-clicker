/* 

1. Create array with monsters that includes name, health points, experience etc.

2. Create function that put out random monster by number

3. Create function that renders the game, monster name, health points

4. Create class Monster, that includes functionality of attacking

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
  },
  {
    mName: "Hungry wild dog",
    mHp: 120,
  },
];

// Creating object Player with declared damage that can be raised
let mainPlayer = {
  dmg: 3
};

// Declaring class monster that can renders a parameters to HTMl
class Monster {
  constructor(name, hp) {

    this.name = name;
    this.hp = hp;
  };
  renderMonster() {

    getMname.innerHTML = this.name;
    getMhp.innerHTML = this.hp;
  };
}
// ---------------------------------------
// Global scope after creating a class of monster for easy changes in another functions
  let newMonster = new Monster("Monster name", 100);
  

class Player {
  constructor(dmg) {

    this.dmg = dmg;
  }
  levelUp() {

    this.dmg = this.dmg + 3;
  }
}
// ---------------------------------------
// Global scope after creating a class of a Player for easy changes in another functions
let newPlayer = new Player(mainPlayer.dmg);

const gameRender = () => {

  // Random monster by number
    mNumber = Math.floor(Math.random() * monstersArray.length); 

  // CREATING A NEW MONSTER
    newMonster = new Monster(monstersArray[mNumber].mName, monstersArray[mNumber].mHp);

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

    newPlayer.levelUp();

    gameRender();


  }
}


gameRender();
