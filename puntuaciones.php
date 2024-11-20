<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="estilos/puntuaciones_styles.css">
    <link rel="stylesheet" href="FontAwesome/fontawesome-free-6.5.1-web/css/all.css" rel="stylesheet">
    <title>Puntuaciones</title>
</head>

<body>
    <div class="container mx-5 row">
        <div class="">
            <h1 class="title text-center">Puntuaciones</h1>
        </div>

        <div class="table-responsive col"></div>
        <table class="table table-striped table-bordered" style="background-color: black; color: aliceblue;">
            <thead class="thead-dark">
                <tr>
                    <th>Jugador</th>
                    <th>Victorias PVP Arena</th>
                    <th>Victorias Avalancha</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jugador 1</td>
                    <td>5</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Jugador 2</td>
                    <td>7</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Jugador 3</td>
                    <td>2</td>
                    <td>6</td>
                </tr>
            </tbody>
        </table>
    </div>

    </div>


    <button class="back-button" onclick="openSettings()">
        <i class="fa-solid fa-circle-left"></i>
        Regresar
    </button>

    <script>
        function openSettings() {
            // Replace 'settings.html' with the path to your desired HTML file
            location.href = 'index.html';
        }
    </script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>