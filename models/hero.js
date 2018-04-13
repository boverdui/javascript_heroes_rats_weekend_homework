const Hero = function(name, health, favouriteFood, tasks) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = tasks;
}

Hero.prototype.talk = function () {
  return(`Hi! My name is ${this.name}!`);
}

Hero.prototype.eat = function (food) {
  if (food.name === this.favouriteFood) {
    this.health += food.replenishmentValue * 1.5;
  } else {
    this.health += food.replenishmentValue;
  }
};

Hero.prototype.sortTasks = function (sortBy) {
  this.tasks.sort((a, b) => a[sortBy] - b[sortBy]);
};

Hero.prototype.viewCompletedTasks = function () {
  return this.tasks.filter((task) => task.completed === true);
};

Hero.prototype.viewUncompletedTasks = function () {
  return this.tasks.filter((task) => task.completed === false);
};

module.exports = Hero;