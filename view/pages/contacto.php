<section class="contacto">

  <div class="general__titulo"><h1>Contacto</h1></div>

  <div class="separacion"></div>

  <div class="contacto__info">Comunícate con nosotros para que podamos atender tu solicitud, por favor llena el siguiente formulario</div>

  <div class="contacto__wrapper">

    <form class="formulario__contacto" method="post" action="enviar" autocomplete="off" id="formulario">

      <div class="dato_formulario" id='padreNombre'>
        <input type="text" id="nombre" name="nombre" placeholder="Nombre completo">
      </div>

      <div class="dato_formulario">
        <input type="email" id="correo" name="correo" placeholder="Correo electronico">
      </div>

      <div class="dato_formulario">
        <input type="text" id="telefono" name="telefono" placeholder="Telefono contacto">
      </div>

      <div class="dato_formulario">
        <label for="servicio">Tipo servicio</label>
        <select class="form-select" id="servicio" name="servicio">
          <option selected disabled value="">-- Seleccione  un servicio--</option>
          <option>Páginas web</option>
          <option>Mantenimiento de equipos</option>
          <option>Pólizas de soporte técnico</option>
          <option>Diseño grafico</option>
          <option>Software personalizado</option>
          <option>Otros</option>
        </select>
      </div>

      <div class="dato_formulario">
        <label for="mensaje">Mensaje</label>
        <textarea class="form-control" id="mensaje" name="mensaje"></textarea>
      </div>

      <input class="boton__submit deshabilitado" type="submit" id="enviar" value="Enviar">

    </form>

  </div>

</section>
