
const Counter = function ({
 rootSelector,
 counterValue = 0,
 step = 1
} = {}) {
 this.value = counterValue;
 this.step = step;

 this.refs = this.getRefs(rootSelector);

 this.bindEvents();
};

Counter.prototype.getRefs = function (rootSelector) {
 const refs = {};
 refs.container = document.querySelector(rootSelector);
 refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
 refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
 refs.value = refs.container.querySelector('#value');

 return refs;
}

Counter.prototype.bindEvents = function () {
 this.refs.incrementBtn.addEventListener('click', () => {
  // console.log(this)
  this.increment();
  this.updateValueUI();
 });

 this.refs.decrementBtn.addEventListener('click', () => {
  // console.log(this)
  this.decrement();
  this.updateValueUI();
 });
 };

Counter.prototype.updateValueUI = function () {
 this.refs.value.textContent = this.value;
};

 Counter.prototype.increment = function () {
  this.value += this.step
 };

 Counter.prototype.decrement = function () {
  this.value -= this.step
 };

const counterValue = new Counter({ rootSelector: `#counter`, step: 1 })
