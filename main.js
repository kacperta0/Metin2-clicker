// Declaring basic variables
const getMname = document.getElementById("m_name");
const getMhp = document.getElementById("m_hp");
const getAttackButton = document.getElementById("m_attack");
const getPlayerLvl = document.getElementById("lvl");
const getPlayerDmg = document.getElementById("damage");
const getPlayerDmgGiven = document.getElementById("dmg_given");

let mNumber = 0;



// 1. Array of monsters -----------------
let monstersArray = [
  {
    Name: "Wild dog",
    Hp: 100,
    Exp: 40
  },
  {
    Name: "Hungry wild dog",
    Hp: 120,
    Exp: 60
  },
];

// Creating object Player with declared damage that can be raised or decreased
let mainPlayer = {
  dmg: 3,
  exp: 0,
  lvl: 1
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

// Creating global scope monster after creating a class of monster
  let newMonster = new Monster("Monster name", 100, 1);
  
// Declaring class Player that can renders parameter to abstract DOM
class Player {
  constructor(dmg, exp, lvl) {

    this.dmg = dmg;
    this.exp = exp;
    this.lvl = lvl;
  }
  renderPlayer() {
    getPlayerLvl.innerHTML = "Lv. " + this.lvl;
    getPlayerDmg.innerHTML = "Max DMG: " + this.dmg;
  }
  levelUp() {
    // Level up after reaching 100 of experience and then setting experience to 0
    if (this.exp >= 100) {

      this.lvl = this.lvl + 1;
      this.dmg = this.dmg + 3;
      alert('LVL UP! +3');
      this.exp = 0;

    }
  }
}


// Global scope after creating a class of a Player for easy changes in another functions
let newPlayer = new Player(mainPlayer.dmg, mainPlayer.exp, mainPlayer.lvl);
let PlayerDMG = Math.floor(Math.random() * newPlayer.dmg)+1;

// Main function, here starts everything
const gameRender = () => {

  // Render a player
    newPlayer.renderPlayer();

  // Random monster by number
    mNumber = Math.floor(Math.random() * monstersArray.length); 

  // CREATING A NEW MONSTER
    newMonster = new Monster(monstersArray[mNumber].Name, monstersArray[mNumber].Hp, monstersArray[mNumber].Exp);

  // RENDERING A MONSTER
    newMonster.renderMonster();

  // Adding attack function to the button
    getAttackButton.addEventListener("click", playerAttack);
};


// Attack function, that changes monster Health Points
const playerAttack = () => {

  // Random dmg between 1 and maximal player DMG
  PlayerDMG = Math.floor(Math.random() * newPlayer.dmg)+1;
  getMhp.innerHTML = newMonster.hp;

  // Show given dmg to DOM
    getPlayerDmgGiven.innerHTML = "<strong>" + PlayerDMG + "</strong>" + " dmg given";

  // Update monster health after attack
  newMonster.hp = newMonster.hp - PlayerDMG;
  getMhp.innerHTML = newMonster.hp;

  // If player killed a monster, than render a new monster and check if player can lvl up
  if (newMonster.hp <= 0) {
    
    alert('You killed ' + newMonster.name + ' and gained ' + newMonster.exp + ' exp');

    newPlayer.exp = newPlayer.exp + newMonster.exp;
    newPlayer.levelUp();

    gameRender();
    console.log(newPlayer.exp);
  }
}


gameRender();
