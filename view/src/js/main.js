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
    text: 'Do you want to continue',
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
