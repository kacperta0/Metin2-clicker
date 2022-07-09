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

const monsterRender = () => {

  const getMname = document.getElementById("m_name");
  const getMhp = document.getElementById("m_hp")

  getMname.innerHTML = monstersArray[0].mName;
  getMhp.innerHTML = monstersArray[0].mHp;
}

monsterRender();
