/* 

1. Create array with monsters that includes name, health points, experience etc.

2. Create function that put out random monster by number

3. Create function that renders the whole game, monster name, health points

4. Create attack function, that changes monster Health Points depending on players attack DMG.

5. Create experience system, player leveling.

*/


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




const gameRender = () => {

  // 2. Random monster by number
  mNumber = Math.floor(Math.random() * monstersArray.length); 

  const getMname = document.getElementById("m_name");
  const getMhp = document.getElementById("m_hp");
  const getAttackButton = document.getElementById("m_attack");

  getMname.innerHTML = monstersArray[mNumber].mName;
  getMhp.innerHTML = monstersArray[mNumber].mHp;
  getAttackButton.addEventListener("click", playerAttack);
}

const playerAttack = () => {

}
gameRender();
