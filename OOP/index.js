const soldier = {
  health: 400,
  armor: 400,
};

const vasya = {
  health: 100,
};

vasya.__proto__ = soldier;

console.log(vasya.armor);
