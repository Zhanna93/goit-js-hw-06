const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function array() {
 ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = `${ingredient}`

  const list = document.querySelector(`#ingredients`)
  list.append(item)

  // console.log(item)
 })
}

array()







