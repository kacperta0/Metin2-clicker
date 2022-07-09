/* 

1. Create array with monsters that includes name, health points, experience etc.

2. Create function that put out random monster by number

3. Create function that renders the game, monster name, health points

4. Create class Monster, that includes functionality of attacking and taking dmg

*/

// Declaring basic variables
const getMname = document.getElementById("m_name");
const getMhp = document.getElementById("m_hp");
const getAttackButton = document.getElementById("m_attack");
let mNumber = 0;


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

// Class monster with constans parameter's name and functionality
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

  // Global scope after creating a class of monster for easy changes in another functions
  let newMonster = new Monster("Monster name", 100);

const gameRender = () => {

  // 2. Random monster by number
  mNumber = Math.floor(Math.random() * monstersArray.length); 

  // CREATING A NEW MONSTER
  newMonster = new Monster(monstersArray[mNumber].mName, monstersArray[mNumber].mHp);

  // RENDERING A MONSTER
  newMonster.renderMonster();

  // Adding attack function to button
  getAttackButton.addEventListener("click", playerAttack);
};

// 4. Attack function, that changes monster Health Points
const playerAttack = () => {

  newMonster.hp = newMonster.hp - 5;
  console.log(newMonster.hp);
}


gameRender();
