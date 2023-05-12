const categories = document.querySelector("#categories");
console.log(`Numero de categorias: ${categories.children.length}`);

const category = document.querySelectorAll("h2");

const elements = document.querySelectorAll(".elements");

for(let i = 0; i < category.length; i+= 1 ){
 console.log(`category:  ${category[i].innerHTML}`);
 console.log(`elements:  ${elements[i].children.length}`);

}