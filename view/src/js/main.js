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
    title: 'Informaci??n general web',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span class="modal__config"><i class="far fa-check-circle"></i> Dise??o web responsivo</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Hospedaje Web GRATIS por 1 a??o</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Dominio .com GRATIS por 1 a??o</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Posicionamiento SEO org??nico</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Links a redes sociales</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Formulario de contacto</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Mapa en tu sitio web</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i> Alta en el buscadores web</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  Dise??o del Wireframe</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  Publicaci??n del proyecto en l??nea</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  Soporte t??cnico 24/7 v??a correo</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  Dise??o de Mockup</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  C??digo optimizado</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  Asesor??a para la selecci??n del dominio</span>' +
    '<span class="modal__config"><i class="far fa-check-circle"></i>  Configuraci??n de correo electr??nico</span>',
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
    title: 'Poliza B??sica',
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
    title: '??Qu?? es una P??gina WEB?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>Una p??gina web se define como un documento electr??nico el cual contiene informaci??n escrita y audiovisual que se encuentra alojado en un servidor y puede ser accesible mediante internet. Una p??gina web se encuentra identificado bajo el nombre de un dominio, que es la palabra que la identifica en la World Wide Web (Red Extensa Mundial de Internet) y que puede ser visualizada a trav??s de un navegador, como Chrome, Mozilla, Internet Explorer y Safari.</span>',
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
    title: '??Qu?? es el Dise??o Responsivo (Responsive Design) de una p??gina WEB?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>La modernidad y las tendencias actuales del uso de dispositivos m??viles, han originado que la informaci??n fluya y este en constante cambio, las fronteras se han acortado. Los negocios deben de fluir con la nueva ola, la informaci??n y los mensajes deben de estar disponibles en cualquier momento. Un dise??o responsivo para dispositivos m??viles de una p??gina web, permite una navegaci??n amigable y m??s efectiva. Se le da la oportunidad al cliente de contar con lo que busca de forma r??pida y no mal gastar su tiempo. Un Dise??o Responsivo aumenta la popularidad del sitio web y produce un ranking m??s alto en los buscadores. Se suprime la necesidad de contar con dos p??ginas para la misma informaci??n, una para visualizarla en PC???s y otra para dispositivos m??viles.</span>',
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
    title: '??Qu?? es un sitio o P??gina WEB Est??tico?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>Son las p??ginas web cuya informaci??n no var??a en un periodo corto o mediano plazo. La informaci??n que se presenta es de cierta forma permanente. Con excepci??n del formulario de contacto, no existe interacci??n entre el usuario y la p??gina web. Uno de los grandes beneficios de este tipo de p??ginas web es la facilidad para crearlas y no se necesita alg??n tipo de programaci??n especial.</span>',
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
    title: '??Qu?? es un sitio o P??gina WEB Autoadministrable o Din??mica?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>Son p??ginas web que permiten una mayor interacci??n con el usuario, se utiliza programaci??n especial, lo que permite crear aplicaciones en el sitio web. La caracter??stica principal de estas p??ginas es que contienen bases de datos, para administrar la informaci??n que se comparte o se recabe.</span>',
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
    title: '??Cu??les son las diferencias de una p??gina WEB Econ??mica y una p??gina WEB Empresarial?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>Evidentemente el costo es uno de los factores distintivos entre una p??gina web econ??mica y una p??gina web empresarial. No obstante la imagen que se representa en internet de una empresa o un negocio se puede proyectar en la magnitud que se desee, con lo que no es mandatorio si se es un negocio peque??o tener una p??gina peque??a en internet. Entre las diferencias podemos encontrar las siguientes: Nivel de dise??o, funcionalidad, y m??todo de trabajo.</span>',
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
    title: 'Qu?? son los backlinks?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>Son los enlaces que recibe una p??gina web desde otras p??ginas web, entre m??s backlinks tenga una pagina web mayor relevancia puede obtener por parte de los buscadores, existe una relaci??n entre el n??mero de enlaces entrantes y la posici??n que puede ocupar en la clasificaci??n de los motores de b??squeda.</span>',
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
    title: '??Qu?? es el SEO?',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<span>SEO son las siglas en ingles de Search Engine Optimization, traducido al espa??ol como: Optimizaci??n para Motores de B??squeda.<br> SEO son el conjunto de t??cnicas que permiten la optimizaci??n de una p??gina web para obtener una mejor posici??n en los resultados org??nicos (los que no tienen costo) de los buscadores (Google, Yahoo y Bing).<br> El SEO va acompa??ado de otras estrategias de marketing digital como son las redes sociales o la b??squeda de enlaces relevantes (backlinks).</span>',
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

  inputNombre?.addEventListener('blur', validar);
  inputCorreo?.addEventListener('blur', validar);
  inputTelefono?.addEventListener('blur', validar);
  inputServicio?.addEventListener('blur', validar);
  textMensaje?.addEventListener('blur', validar);


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
      mostarAlerta('Escribe solo n??meros',e.target.parentElement);
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

    const regex =  /^[ a-zA-Z????????????????????????]+$/
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
//* PROYECTOS GALERIA
//* ===============================================
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'alwaysShowNavOnTouchDevices':true,
  'disableScrolling': true
})


//* ===============================================
//* Proyectos informacion
//* ===============================================
const radha = document.querySelector('#radha');

radha?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'RADHA EVENTOS',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">Sitio web dise??ado para la organizaci??n de eventos sociales, renta de equipos, recintos y salones</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Emprendedor <br><b>Desarrollo:</b> 7 - 10 d??as h??biles <br> <b>Url:</b> <a href="http://www.radhaeventos.com.mx" target="_blank" rel="noopener noreferrer">Inactivo</a></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const blanc = document.querySelector('#blanc');

blanc?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'BLANC MEDICAL',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">Sitio web dise??ado para la organizaci??n de eventos sociales, renta de equipos, recintos y salones</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Sistema web personalizado <br><b>Desarrollo:</b> 40 - 60 d??as h??biles <br> <b>Url:</b> <a href="#" target="_blank" rel="noopener noreferrer">Sitio web privado</a><br><b>Los datos mostrados son solo demostrativos para la funcionalidad del sistema</b></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});


const maestros = document.querySelector('#maestros');

maestros?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'MAESTROS DEL SABER',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">Biblioteca en l??nea, para compartir informaci??n sobre vida saludable, los libros se descargan mediante un login de usuario, con restricci??n por d??a de hasta un m??ximo 10 descargar por usuario.</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Sistema web personalizado <br><b>Desarrollo:</b> 15 - 20 d??as h??biles <br> <b>Url:</b> <a href="#" target="_blank" rel="noopener noreferrer">Sitio web privado</a><br><b>Los datos mostrados son solo demostrativos para la funcionalidad del sistema</b></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const livark = document.querySelector('#livark');

livark?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'GRUPO LIVARK',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">Sitio web de servicios en construcci??n, remodelaci??n, sistemas constructivos, este proyecto ya tiene tiempo con nosotros, el cliente a??n no se ha decidido actualizar su sitio web con nuevas y mejores tecnolog??as.</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Emprendedor <br><b>Desarrollo:</b> 7 - 10 d??as h??biles <br> <b>Url:</b> <a href="https://www.livark.com.mx/" target="_blank" rel="noopener noreferrer">www.livark.com.mx</a></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const mutagen = document.querySelector('#mutagen');

mutagen?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'MUTAGEN',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">Tienda en l??nea de suplementos deportivos,informaci??n y soporte cuenta con  pagos en l??nea mediante paypal.</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Tienda virtual <br><b>Desarrollo:</b> 20 - 25 d??as h??biles <br> <b>Url:</b> <a href="https://www.mutagen.com.mx" target="_blank" rel="noopener noreferrer">Inactivo</a></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const onyria = document.querySelector('#onyria');

onyria?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'ONYRIA',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">P??gina web para escuela de maquillaje y efectos especiales, cuenta con tienda de productos propios.</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Microempresa  <br><b>Desarrollo:</b> 10 - 15 d??as h??biles <br> <b>Url:</b> <a href="https://www.onyria.com.mx" target="_blank" rel="noopener noreferrer">Inactivo</a></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const iefesa = document.querySelector('#iefesa');

iefesa?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'IEFESA',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">P??gina web para distribuci??n de productos electr??nicos, metalmec??nico, farmac??uticos,  textil entre otros.</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Microempresa Personalizada <br><b>Desarrollo:</b> 25 - 30 d??as h??biles <br> <b>Url:</b> <a href="https://www.iefesamexico.net/" target="_blank" rel="noopener noreferrer">www.iefesamexico.net</a><br> <b>Proyecto no concluido por parte del cliente programaci??n del sitio 80%</b></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const numeri = document.querySelector('#numeri');

numeri?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'NUMERI M??XICO',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">P??gina web de prestadora de servicios.</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Microempresa Personalizada <br><b>Desarrollo:</b> 25 - 30 d??as h??biles <br> <b>Url:</b> <a href="https://www.numeri.com.mx/" target="_blank" rel="noopener noreferrer">Inactivo</a><br> <b>Proyecto no concluido por parte del cliente programaci??n del sitio 80%</b></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const gin = document.querySelector('#gin');

gin?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'GRUPO GIN',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">Sistema interno para la renta de inmuebles y veh??culos.</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Sistema web personalizado <br><b>Desarrollo:</b> 40 - 50 d??as h??biles <br> <b>Url:</b> <a href="#" target="_blank" rel="noopener noreferrer">Grupo Gin interno</a><br></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const sisaam = document.querySelector('#sisaam');

sisaam?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'SISAAM',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">Sistema interno para la administraci??n de taller mec??nico, historial de veh??culos, autorizaci??n de presupuestos, creaci??n de presupuestos, inventario de productos y servicios del estado de tabasco.</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Sistema web personalizado <br><b>Desarrollo:</b> 8 meses <br> <b>Url:</b> <a href="#" target="_blank" rel="noopener noreferrer">Grupo Numeri Interno</a><br></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const almeja = document.querySelector('#almeja');

almeja?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'PONTE ALMEJA',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">P??gina web del restaurante ponte almeja, proyecto del complejo dentro de edificio WTC ciudad de M??xico.</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Microempresa <br><b>Desarrollo:</b> 10 - 15 d??as h??biles <br> <b>Url:</b> <a href="#" target="_blank" rel="noopener noreferrer">Inactivo</a><br></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const atm = document.querySelector('#atm');

atm?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'ATM ASOCIACION DE TRIATLETAS MEXICANOS',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">P??gina web informativa de eventos, organizadores y galer??as.</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Emprendedor <br><b>Desarrollo:</b> 7 - 10 d??as h??biles <br> <b>Url:</b> <a href="#" target="_blank" rel="noopener noreferrer">Inactivo</a><br></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const arinco = document.querySelector('#arinco');

arinco?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'ARINCO CONSTRUCCIONES',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">Grupo de Ingenieros, Arquitectos y Personal T??cnico creado para ofrecer una experiencia integral en el sector de la construcci??n a trav??s de un amplio abanico de servicios que se adaptan a las necesidades de cada cliente.</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Economico <br><b>Desarrollo:</b> 5 - 7 d??as h??biles <br> <b>Url:</b> <a href="http://arinco.org.mx/" target="_blank" rel="noopener noreferrer">www.arinco.org.mx</a><br></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const mbx = document.querySelector('#mbx');

mbx?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'MEXICANA DE BECAS',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">Actualizaci??n de sitio web para fondo de ahorro educativo.</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Microempresa Personalizado <br><b>Desarrollo:</b> 3 Meses <br> <b>Url:</b> <a href="https://www.mb.com.mx/home/" target="_blank" rel="noopener noreferrer">www.mb.com.mx</a><br><b>Proyecto actualmente en desarrollo</b></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

const digi = document.querySelector('#digi');

digi?.addEventListener('click', (e) =>{
  Swal.fire({
    title: 'DIGISOLUTIONS',
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
    allowEnterKey: false,
    allowOutsideClick:false,
    html:
    '<p class="descripcion">Desarrollo de sitio web para empresa integradora de servicios.</p>' +
    '<p class="extra"><b>Tipo proyecto:</b> Emprendedor Personalizado <br><b>Desarrollo:</b> 3 Meses <br> <b>Url:</b> <a href="https://digisolutions.com.mx/" target="_blank" rel="noopener noreferrer">digisolutions.com.mx</a><br><b>Proyecto actualmente en desarrollo</b></p>',
    showClass: {
      popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOutDown'
    }
  })
});

//* ===============================================
//* Aviso cookies
//* ===============================================

const btnAceptar = document.querySelector('#aceptar');
const avisoCookies = document.querySelector('#cookie');
const fondo = document.querySelector('#fondo-cookie');


if(!localStorage.getItem('cookies-aceptadas')){
  avisoCookies.classList.add('activo');
  fondo.classList.add('activo');
}

btnAceptar.addEventListener('click',()=>{

  avisoCookies.classList.remove('activo');
  fondo.classList.remove('activo');

  localStorage.setItem('cookies-aceptadas', true);

});
