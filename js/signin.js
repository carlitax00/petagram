const form = document.getElementById("form");  
const username = document.getElementById("username");  
const email = document.getElementById("email");  
const password = document.getElementById("password");  
const cPassword = document.getElementById("c-password");  

/***** Mostrar mensaje de error *****/
function showError(input, message) {  
    const formControl = input.parentElement;  
    formControl.className = "input error";  
    const small = formControl.querySelector("small");  
    small.innerText = message;  
}  

/***** Mostrar mensaje OK *****/
function showSuccess(input) {  
    const formControl = input.parentElement;  
    formControl.classList.add("success");  
}  

/***** Verificar los campos *****/
function checkRequired(inputArr) {  
    inputArr.forEach(function (input) {  
        if (input.value.trim() === "") {  
            showError(input, `${getFieldName(input)} es requerido`);  
        } else {  
            showSuccess(input);  
        }  
    });  
}  

/***** Captar el mensaje de los campos *****/
function getFieldName(input) {  
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);  
}  

/***** Validar la longitud del valor ingresado *****/
function checkLenghth(input, min, max) {  
    if (input.value.length < min) {  
        showError(  
            input,  
            `${getFieldName(input)} debe tener al menos ${min} caracteres`
            );  
        } else if (input.value.length > max) {  
            showError(  
                input,  
                `${getFieldName(input)} debe tener menos de ${max} caracteres`
                );  
            } else {  
                showSuccess(input);  
            }  
        }  

/***** Validar email *****/
function checkEmail(input) {  
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  
    if (re.test(input.value.trim())) {  
        showSuccess(input);  
    } else {  
        showError(input, "La dirección de email no es válida");  
    }  
}  

/***** Verificar que las contraseñas coincidan *****/
function checkPasswordMatch(input1, input2) {  
    if (input1.value !== input2.value) {  
        showError(input2, "Passwords do not match");  
    }  
}  

form.addEventListener("submit", (e) => {  
    e.preventDefault();  
    checkRequired([username, email, password, cPassword]);  
    checkLenghth(username, 3, 15);  
    checkLenghth(password, 8, 25);  
    checkEmail(email);  
    checkPasswordMatch(password, cPassword);  
});