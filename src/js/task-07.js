const sliderElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("text");
const sliderText = document.querySelector("#text");




sliderElement.addEventListener("input", (e) =>{
    const value = e.currentTarget.value;
    
    sliderText.style.fontSize = `${value}px`;
    console.log(`${value}px`);
})