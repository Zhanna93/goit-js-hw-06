const categories = document.querySelector(`#categories`)
// console.log(categories)

const list = categories.children
console.log(`Number of categories:`, list.length)

const category = document.querySelectorAll(`h2`).forEach(item => {
 console.log(`Category:`, item.textContent)

 const sibling = item.nextElementSibling
 const elements = sibling.children
console.log(`Elements:`, elements.length)
})

