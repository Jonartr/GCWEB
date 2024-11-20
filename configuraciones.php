<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos/config_styles.css">
    <link rel="stylesheet" href="FontAwesome/fontawesome-free-6.5.1-web/css/all.css" rel="stylesheet">
    <title>Configuraciones</title>
</head>
<body>
    <div class="container">
        <div class="black-square">
        <div class="inner-container">
            <h1>Configuraciones</h1>
            <h2>Música</h2>
            <div class="volume-container">
                <input type="range" id="volume-slider" class="volume-slider" value="50" />
            </div>
            <button class="back-button" onclick="openSettings()">
                <i class="fa-solid fa-circle-left"></i>
                Regresar
            </button>
        </div>
    </div>
</div>

<script>
    function openSettings() {
        // Replace 'settings.html' with the path to your desired HTML file
        location.href = 'index.php';
    }
</script>

</body>
</html>
