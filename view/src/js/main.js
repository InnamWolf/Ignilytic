//* ===============================================
//* Animate menu
//* ===============================================

$(document).ready(function () {

  $('.menu').click(function () {
    $('.movil__categorias').slideToggle(900);
  });

});

//* ===============================================
//* Change Dark /  Light
//* ===============================================

const btnDark = document.querySelector('.modo');
const btnDarkDesk = document.querySelector('.modoDesk');

  btnDark.addEventListener('click', (e) =>{
    btnDark.classList.toggle('fa-moon');
    btnDark.classList.toggle('fa-sun');
    document.body.classList.toggle('dark');

    //Guardamos el modo en localstorage
    if(document.body.classList.contains('dark')){

      localStorage.setItem('dark-mode','true');

    }else{

      localStorage.setItem('dark-mode','false');

    }

  });



  //Obtenemos el modo actual
  if(localStorage.getItem('dark-mode') === 'true'){
      document.body.classList.add('dark');
      btnDark.classList.add('fa-sun');
      btnDark.classList.remove('fa-moon');
  }else{
    document.body.classList.remove('dark');
    btnDark.classList.add('fa-moon');
    btnDark.classList.remove('fa-sun');
  }


  //Escritorio

  btnDarkDesk.addEventListener('click', (e) =>{

    btnDarkDesk.classList.toggle('fa-moon');
    btnDarkDesk.classList.toggle('fa-sun');
    document.body.classList.toggle('dark');

    //Guardamos el modo en localstorage
    if(document.body.classList.contains('dark')){
      localStorage.setItem('dark-mode','true');
    }else{
      localStorage.setItem('dark-mode','false');
    }

  });

  //Obtenemos el modo actual
  if(localStorage.getItem('dark-mode') === 'true'){

    document.body.classList.add('dark');
    btnDarkDesk.classList.add('fa-sun');
    btnDarkDesk.classList.remove('fa-moon');

  }else{

    document.body.classList.remove('dark');
    btnDarkDesk.classList.add('fa-moon');
    btnDarkDesk.classList.remove('fa-sun');

  }

//* ===============================================
//* Modal Informacion <web></web>
//* ===============================================
const info = document.querySelector('#modalInfo');

info?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'Información general web',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span class="modal__config"><i class="far fa-check-circle"></i> Diseño web responsivo</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Hospedaje Web GRATIS por 1 año</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Dominio .com GRATIS por 1 año</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Posicionamiento SEO orgánico</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Links a redes sociales</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Formulario de contacto</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Mapa en tu sitio web</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Alta en el buscadores web</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  Diseño del Wireframe</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  Publicación del proyecto en línea</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  Soporte técnico 24/7 vía correo</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  Diseño de Mockup</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  Código optimizado</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  Asesoría para la selección del dominio</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  Configuración de correo electrónico</span>',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
});

//* ===============================================
//* Modal Poliza Basica
//* ===============================================
const basica = document.querySelector('#polBasica');

basica?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'Poliza Básica',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span class="modal__config">Mensual: <b>$3,000</b></span>' +
    '<span class="modal__config">Trimestral: <b>$8,000</b></span>' +
    '<span class="modal__config">Anual: <b>$30,000</b></span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> <b>Para planes trimestrales y anuales el pago se difiere en mensualidades.</b></span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> <b>La poliza es individual por equipo dentro de la poliza he intrasferible para otro equipo.</b></span>',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
});

//* ===============================================
//* Modal Poliza Silver
//* ===============================================
const silver = document.querySelector('#polSilver');

silver?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'Poliza Silver',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span class="modal__config">Mensual: <b>$6,000</b></span>' +
    '<span class="modal__config">Trimestral: <b>$13,000</b></span>' +
    '<span class="modal__config">Anual: <b>$60,000</b></span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> <b>Para planes trimestrales y anuales el pago se difiere en mensualidades.</b></span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> <b>La poliza es individual por equipo dentro de la poliza he intrasferible para otro equipo.</b></span>',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
});

//* ===============================================
//* Modal Poliza Gold
//* ===============================================
const gold = document.querySelector('#polGold');

gold?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'Poliza Gold',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span class="modal__config">Mensual: <b>$10,000</b></span>' +
    '<span class="modal__config">Trimestral: <b>$22,000</b></span>' +
    '<span class="modal__config">Anual: <b>$90,000</b></span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> <b>Para planes trimestrales y anuales el pago se difiere en mensualidades.</b></span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> <b>La poliza es individual por equipo dentro de la poliza he intrasferible para otro equipo.</b></span>',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
});

//* ===============================================
//* Modal Poliza inplant
//* ===============================================
const oficina = document.querySelector('#polOficina');

oficina?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'Implants Personal en la oficina',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span class="modal__config">Mensual: <b>$15,000</b></span>' +
    '<span class="modal__config">Trimestral: <b>$45,000</b></span>' +
    '<span class="modal__config">Semestral: <b>$90,000</b></span>' +
    '<span class="modal__config">Anual: <b>$180,000</b></span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> <b>Para planes trimestrales, semestrales y anuales el pago se difiere en mensualidades.</b></span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> <b>La poliza cubre todos los eventos tegnologicos dentro de la empresa y los costos son por personal contratado.</b></span>',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
});

//* ===============================================
//* FAQ
//* ===============================================

const faq1 = document.querySelector('#faq01');

faq1?.addEventListener('click', (e) =>{
  Swal.fire({
    title: '¿Qué es una Página WEB?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>Una página web se define como un documento electrónico el cual contiene información escrita y audiovisual que se encuentra alojado en un servidor y puede ser accesible mediante internet. Una página web se encuentra identificado bajo el nombre de un dominio, que es la palabra que la identifica en la World Wide Web (Red Extensa Mundial de Internet) y que puede ser visualizada a través de un navegador, como Chrome, Mozilla, Internet Explorer y Safari.</span>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const faq2 = document.querySelector('#faq02');

faq2?.addEventListener('click', (e) =>{
  Swal.fire({
    title: '¿Qué es el Diseño Responsivo (Responsive Design) de una página WEB?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>La modernidad y las tendencias actuales del uso de dispositivos móviles, han originado que la información fluya y este en constante cambio, las fronteras se han acortado. Los negocios deben de fluir con la nueva ola, la información y los mensajes deben de estar disponibles en cualquier momento. Un diseño responsivo para dispositivos móviles de una página web, permite una navegación amigable y más efectiva. Se le da la oportunidad al cliente de contar con lo que busca de forma rápida y no mal gastar su tiempo. Un Diseño Responsivo aumenta la popularidad del sitio web y produce un ranking más alto en los buscadores. Se suprime la necesidad de contar con dos páginas para la misma información, una para visualizarla en PC’s y otra para dispositivos móviles.</span>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const faq3 = document.querySelector('#faq03');

faq3?.addEventListener('click', (e) =>{
  Swal.fire({
    title: '¿Qué es un sitio o Página WEB Estático?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>Son las páginas web cuya información no varía en un periodo corto o mediano plazo. La información que se presenta es de cierta forma permanente. Con excepción del formulario de contacto, no existe interacción entre el usuario y la página web. Uno de los grandes beneficios de este tipo de páginas web es la facilidad para crearlas y no se necesita algún tipo de programación especial.</span>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const faq4 = document.querySelector('#faq04');

faq4?.addEventListener('click', (e) =>{
  Swal.fire({
    title: '¿Qué es un sitio o Página WEB Autoadministrable o Dinámica?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>Son páginas web que permiten una mayor interacción con el usuario, se utiliza programación especial, lo que permite crear aplicaciones en el sitio web. La característica principal de estas páginas es que contienen bases de datos, para administrar la información que se comparte o se recabe.</span>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const faq5 = document.querySelector('#faq05');

faq5?.addEventListener('click', (e) =>{
  Swal.fire({
    title: '¿Cuáles son las diferencias de una página WEB Económica y una página WEB Empresarial?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>Evidentemente el costo es uno de los factores distintivos entre una página web económica y una página web empresarial. No obstante la imagen que se representa en internet de una empresa o un negocio se puede proyectar en la magnitud que se desee, con lo que no es mandatorio si se es un negocio pequeño tener una página pequeña en internet. Entre las diferencias podemos encontrar las siguientes: Nivel de diseño, funcionalidad, y método de trabajo.</span>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const faq6 = document.querySelector('#faq06');

faq6?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'Qué son los backlinks?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>Son los enlaces que recibe una página web desde otras páginas web, entre más backlinks tenga una pagina web mayor relevancia puede obtener por parte de los buscadores, existe una relación entre el número de enlaces entrantes y la posición que puede ocupar en la clasificación de los motores de búsqueda.</span>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const faq7 = document.querySelector('#faq07');

faq7?.addEventListener('click', (e) =>{
  Swal.fire({
    title: '¿Qué es el SEO?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>SEO son las siglas en ingles de Search Engine Optimization, traducido al español como: Optimización para Motores de Búsqueda.<br> SEO son el conjunto de técnicas que permiten la optimización de una página web para obtener una mejor posición en los resultados orgánicos (los que no tienen costo) de los buscadores (Google, Yahoo y Bing).<br> El SEO va acompañado de otras estrategias de marketing digital como son las redes sociales o la búsqueda de enlaces relevantes (backlinks).</span>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});


//* ===============================================
//* Validar formulario
//* ===============================================
document.addEventListener('DOMContentLoaded', function(){

  const formulario = {
      nombre: '',
      correo: '',
      telefono: '',
      servicio: '',
      mensaje: ''
  }

  // 1 Seleccionamos elementos a validar
  const inputNombre = document.querySelector('#nombre');
  const inputCorreo = document.querySelector('#correo');
  const inputTelefono = document.querySelector('#telefono');
  const inputServicio = document.querySelector('#servicio');
  const textMensaje = document.querySelector('#mensaje');
  const btnEnviar = document.querySelector('#formulario  input[type="submit"]');

  // 2 Asignamos los eventos

  inputNombre.addEventListener('blur', validar);
  inputCorreo.addEventListener('blur', validar);
  inputTelefono.addEventListener('blur', validar);
  inputServicio.addEventListener('blur', validar);
  textMensaje.addEventListener('blur', validar);


  function validar(e) {

    if(e.target.value.trim() === ''){
      mostarAlerta(`El Campo ${e.target.id} es obligatorio`,e.target.parentElement);
      formulario[e.target.name] = '';
      comprobarFormulario();
      return;
    }

    if(e.target.id === 'correo' && !validarCorreo(e.target.value)){
      mostarAlerta('El correo no es valido',e.target.parentElement);
      formulario[e.target.name] = '';
      comprobarFormulario();
      return;
    }

    if(e.target.id === 'nombre' && !validarNombre(e.target.value)){
      mostarAlerta('Elimina caracteres especiales y numeros',e.target.parentElement);
      formulario[e.target.name] = '';
      comprobarFormulario();
      return;
    }

    if(e.target.id === 'telefono' && !validarTelefono(e.target.value)){
      mostarAlerta('Escribe solo números',e.target.parentElement);
      formulario[e.target.name] = '';
      comprobarFormulario();
      return;
    }

    limpiarAlerta(e.target.parentElement);

    // 5 Asignamos valores al objeto formulario
    formulario[e.target.name] = e.target.value.trim();

    //Comprobar el objeto de email
    comprobarFormulario();

  }

  function mostarAlerta(mensaje, referencia) {

    limpiarAlerta(referencia);

    // 3 Generar alerta
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error__alerta');

    // 4 Inyectar el error al formulario
    referencia.appendChild(error);

  }

  function limpiarAlerta(referencia){
    const alerta = referencia.querySelector('.error__alerta');
    if(alerta){
      alerta.remove();
    }
  }

  function validarCorreo(email){

    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    const resultado =regex.test(email);
    return resultado;

  }

  function validarNombre(nombre){

    const regex =  /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
    const resultado =regex.test(nombre);
    return resultado;

  }

  function validarTelefono(telefono){

    const regex =  /^[0-9]+$/
    const resultado =regex.test(telefono);
    return resultado;

  }

  function comprobarFormulario(){
    if(Object.values(formulario).includes('')){
      btnEnviar.classList.add('deshabilitado');
    }else{
      btnEnviar.classList.remove('deshabilitado');
    }

  }

});


//* ===============================================
//* CAPTCHA
//* ===============================================
