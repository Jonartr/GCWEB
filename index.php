<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos/index_styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <title>Menú principal</title>
</head>

<body>
    <?php
    session_start();
    if (isset($_GET['modegame'])) {
        $_SESSION['modegame'] = $_GET['modegame'];
    }
    ?>

    <header>
        <img src="img/Videojuego_Logo.png" alt="Tu Logo" class="logo">
    </header>

    <nav>
        <ul style="color: aliceblue;">
            <li class="black" id="create-game-btn">
                <i class="icon"><i class="fa-solid fa-play"></i></i>
                <a style="color: aliceblue; text-decoration: none;" href="Config.php?modegame=1">PVP Arena</a>
            </li>
            <li class="black" id="create-game-btn">
                <i class="icon"><i class="fa-solid fa-play"></i></i>
                <a style="color: aliceblue; text-decoration: none;" href="Config.php?modegame=2">Avalancha</a>
            </li>
            <li class="black" id="configuraciones-btn">
                <i class="icon"><i class="fa-solid fa-gear"></i></i>
                <a style="color: aliceblue; text-decoration: none;" href="puntuaciones.php">Puntuaciones</a>
            </li>
            <li class="black" id="puntuaciones-btn">
                <i class="icon"><i class="fa-solid fa-trophy"></i></i>
                <a style="color: aliceblue; text-decoration: none;" href="configuraciones.php">Configuraciones</a>
            </li>
        </ul>
    </nav>

</body>

</html>
