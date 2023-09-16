export function validar(input) {
  let errors = {};
  let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  let numbersRegex = /\d/;

  // if (!input.email) {
  //   errors.email = "Enter your email";
  // }
  if (!emailRegex.test(input.email)) {
    errors.email = "Ingrese un email valido!";
  }
  if(!input.email){
      errors.e2 = "El email no puede estar vacio!";
  }
  if (input.email.length >= 35) {
    errors.email = "No puede tener mas de 35 caracteres!";
  }
  if (!numbersRegex.test(input.password)) {
    errors.password = "La contraseña debe tener al menos un numero!";
  }
  if (input.password.length < 6 || input.password.length > 10) {
    errors.password = "La longitud de la contraseña debe ser entre 6 y 10 caracteres";
  }

  return errors;
}
