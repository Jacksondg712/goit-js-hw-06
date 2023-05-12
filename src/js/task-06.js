const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", (e) =>{
    const value = e.currentTarget.value;
    const maxLength = parseInt(inputElement.getAttribute("data-length"));
    inputElement.classList.remove("invalid", "valid");
    if(maxLength > value.length || maxLength < value.length){
        inputElement.classList.add("invalid");
    }
    else if(maxLength == value.length){
        inputElement.classList.add("valid");
    }
    console.log("Longitud maxima permitida:",maxLength  , "longitud del texto:",value.length);
})