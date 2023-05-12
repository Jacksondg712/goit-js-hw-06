const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const ingredientesElement = document.createElement("li");  //crea los elementos li de la lista
  ingredientesElement.classList.add("item"); //añadir una clase a todas las li de la lista
  ingredientesElement.textContent = ingredient;
  console.log(ingredientesElement);

  ingredientList.append(ingredientesElement);

});