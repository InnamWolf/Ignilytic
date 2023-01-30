<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--===============================================
  Lib CSS
  =================================================-->
  <link rel="stylesheet" href="view/src/css/main.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
  <!-- Normalize -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"/>
  <!-- Animate Css -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

  <!--===============================================
  lib js
  =================================================-->
  <!-- Jquery -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  <!-- SweetAlert -->
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

  <link rel="icon" href="view/src/img/icono.png" sizes="64x64">

  <title>Ignilytic - TI</title>

</head>

<body>

  <div class="wrapper">

    <?php
      //* ===============================================
      //* Mobile and PC Menu
      //* ===============================================
      include_once 'view/components/menu.php';

      //* ===============================================
      //* White List URL
      //* ===============================================
      if(isset($_GET["url"])){

        if( $_GET["url"] == "inicio" ||
            $_GET["url"] == "servicios" ||
            $_GET["url"] == "web"

        ){

          include "view/pages/".$_GET["url"].".php";

        }else{
            // include "pages/404.php";
        }

      }else{
          include "view/pages/inicio.php";
      }
      //* ===============================================
      //* Footer
      //* ===============================================
      include_once 'view/components/footer.php';
    ?>

  </div>

  <script src="view/src/js/main.js"></script>

</body>

</html>
