<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos/index_styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <title>Configuración partida</title>
</head>

<body>
    <?php session_start(); ?>

    <header class="text-center py-3">
        <img src="img/Videojuego_Logo.png" alt="Tu Logo" class="logo">
    </header>

    <script>
        console.log(<?php echo $_SESSION["modegame"]; ?>);
    </script>

    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <h3 style="color: white;">Configuración partida</h3>
                <form action="Selector.php" method="POST">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <input type="radio" name="gamemode" value="1" id="jee">
                            <label for="jee">JcE</label>
                        </li>
                        <li class="list-group-item">
                            <input type="radio" name="gamemode" value="2" id="jcj">
                            <label for="jcj">JcJ</label>
                        </li>
                        <li class="list-group-item">
                            <input type="radio" name="escenario" value="1" id="esc1">
                            <label for="esc1">Escenario 1</label>
                        </li>
                        <li class="list-group-item">
                            <input type="radio" name="escenario" value="2" id="esc2">
                            <label for="esc2">Escenario 2</label>
                        </li>
                        <li class="list-group-item">
                            <input type="radio" name="escenario" value="3" id="esc3">
                            <label for="esc3">Escenario 3</label>
                        </li>
                    </ul>
                    <div class="mt-3">
                        <button class="btn btn-success" type="submit">Jugar</button>
                        <a class="btn btn-warning" href="index.php" style="text-decoration: none; color:white">Regresar</a>
                    </div>
                </form>
            </div>
        </div>
    </div>

</body>

</html>
