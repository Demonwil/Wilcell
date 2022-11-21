const form__padre = document.getElementById('form__padre');
const form__input = document.querySelectorAll('#form__padre input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
	apellido: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
	password: /^.{4,12}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    nombre: false,
    apellido: false,
    password: false,
    correo: false
}

const validarForm = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarInput(expresiones.nombre, e.target, 'nombre');
        break;
        case "apellido":
            validarInput(expresiones.apellido, e.target, 'apellido');
        break;
        case "password":
            validarInput(expresiones.password, e.target, 'password');
        break;
        case "correo":
            validarInput(expresiones.correo, e.target, 'correo');
        break;
    }
}

const validarInput = (validacion, caja, campo) => {
    if(validacion.test(caja.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-correcto');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove('form__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-correcto');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.add('form__input-error-activo');
        campos[campo] = false;
    }
}

form__input.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});

form__padre.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const terminos = document.getElementById('terminos');
    if( campos.nombre && campos.apellido && campos.password && campos.correo && terminos.checked){
        form__padre.reset();
        
        //El mensaje se agrega cuando los inputs estan correctos y luego se elimina durante 5 segundos
        document.getElementById('form__mensaje-exitoso').classList.add('form__mensaje-exitoso-activo');
        setTimeout(() => {
            document.getElementById('form__mensaje-exitoso').classList.remove('form__mensaje-exitoso-activo');
        }, 9000);
        
        document.querySelectorAll('.form__grupo-correcto').forEach((correcto) => {
			correcto.classList.remove('form__grupo-correcto');
		});
        
        document.getElementById('form__mensaje').classList.remove('form__mensaje-activo');
    } else {
        document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
    }
    
});