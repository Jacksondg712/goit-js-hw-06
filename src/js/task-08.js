const formElement = document.querySelector(".login-form");


formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const {email, password} = formElement.elements;
    const resultados  = {email: email.value, password: password.value};
    if(!email.value || !password.value){
        window.alert("Todos los espacios deben estar llenos");
    }
    else{
        console.log(resultados);
    }
});
