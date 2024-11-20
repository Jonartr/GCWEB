<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos/MenuPausa_styles.css">
    <link rel="stylesheet" href="FontAwesome/fontawesome-free-6.5.1-web/css/all.css" rel="stylesheet">
    <title>Menú de Pausa</title>
</head>

<body>
    <div class="container">
        <div class="black-square">
            <div class="inner-container">
                <h1>Configuraciones</h1>
                <button class="continuar-button" onclick="openSettings()">
                    <i class="fa-solid fa-play"></i>
                    <span class="continuar-button-text">continuar</span>
                </button>
                <h2>Música</h2>
                <div class="volume-container">
                    <input type="range" id="volume-slider" class="volume-slider" value="50" />
                </div>
                <button class="salir-button" onclick="openSettings_02()">
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span class="continuar-button-text">salir</span>
                </button>
            </div>
        </div>
    </div>
    <script>
        function openSettings() {

            location.href = 'GameScreen.php';
        }

        function openSettings_02() {

            location.href = 'index.php';
        }
    </script>
</body>

</html>