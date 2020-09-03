
const player = {
  name: 'Nathan',
  age: 29
};

const { name } = player;
console.log(name);

const getName = (name) => {
  console.log(name);
};

module.exports = {
  getName
};
