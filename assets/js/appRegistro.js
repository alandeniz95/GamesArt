document.getElementById('btn-iniciarSesion').addEventListener('click', iniciarSesion);
document.getElementById('btn-registrar').addEventListener('click', registrar);

const contenedorLoginRegistro = document.querySelector('.contenedor-login-registro');
const formLogin = document.querySelector('.form-login');
const formRegistro = document.querySelector('.form-registro');
const cajaLogin = document.querySelector('.caja-trasera-login');
const cajaRegistro = document.querySelector('.caja-trasera-registrar');

function iniciarSesion(){
  formRegistro.style.display = 'none';
  contenedorLoginRegistro.style.left = '410px';
  formLogin.style.display = 'block';
  cajaRegistro.style.opacity = '1';
  cajaLogin.style.opacity = '0';
}

function registrar(){
  formRegistro.style.display = 'block';
  contenedorLoginRegistro.style.left = '10px';
  formLogin.style.display = 'none';
  cajaRegistro.style.opacity = '0';
  cajaLogin.style.opacity = '1';
}
