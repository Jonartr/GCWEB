
<!DOCTYPE html>
<html lang="en">
  <head>
  <?php
        header('Access-Control-Allow-Origin: *');
     header('Content-Type: text/html; charset=UTF-8'); // Asegúrate de que el tipo de contenido sea text/html
    ?>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>War Racing</title>
    <style>

      body {
        margin: 0;
      }
    </style>
  </head>
  <body>
  <button type="button" id="btn-login">Login</button>
  <button type="button" id="btn-logout">Logout</button>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/examples/js/loaders/FBXLoader.js"></script>

    <script type="module">
      import * as THREE from "./three.module.js";
      import { OrbitControls } from "./OrbitControls.js";
      import * as Carload from "./Class/CarsLoad.js";
      import * as Scenario from "./Class/Scenarios.js";
      import * as Fonts from "./Class/Fonts.js";
      import * as Items from "./Class/Items.js";
  


      //====================================FIREBASE====================================//
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
      import {
        getAuth,
        signOut,
        signInWithPopup,
        GoogleAuthProvider,
        signInWithRedirect,
      } from "https://www.gstatic.com/firebasejs//11.0.1/firebase-auth.js";
      import {
        getDatabase,
        ref,
        onValue,
        set,
      } from "https://www.gstatic.com/firebasejs//11.0.1/firebase-database.js";

      import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";


      // Your web app's Firebase configuration
      const firebaseConfig = {
          apiKey: "AIzaSyDLiBo7b6KcF4bR8d9LCjL6lzid5Zmummo",
          authDomain: "gcwc-40cc5.firebaseapp.com",
          databaseURL: "https://gcwc-40cc5-default-rtdb.firebaseio.com",
          projectId: "gcwc-40cc5",
          storageBucket: "gcwc-40cc5.appspot.com",
          messagingSenderId: "84941083045",
          appId: "1:84941083045:web:dcc0e88d0a2b1784c9d84c",
          measurementId: "G-P5F3KEGPDT"
      };

      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const db = getDatabase();

      const buttonLogin = document.getElementById("btn-login");
      const buttonLogout = document.getElementById("btn-logout");

      //==========================VARIABLES DE MODELOS Y OBJETOS=============================//
      let car = null;
      let item = null;
      let currentUser;


      buttonLogin.addEventListener("click", async function () {
        await signInWithPopup(auth, provider)
          .then((result) => {
            if (result.user) {
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;

              const user = result.user;
              currentUser = user;
                alert(currentUser);
          //    console.log(user.email); // Asegúrate de que user.email esté definido
              writeUserData();
            } else {
              console.error("No se pudieron recuperar los datos del usuario.");
            }


          })
          .catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
         //    const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
           // console.error(`Error Code: ${errorCode}, Message: ${errorMessage}, Email: ${email}`);
          });
      });

      buttonLogout.addEventListener("click", async function () {
        await signOut(auth)
          .then(() => {
            console.log("Sign-out successful");
          })
          .catch((error) => {
            console.log("An error happened", error);
          });
      });

      //============================RENDERIZADO====================================//
      const skydomeimage = new THREE.TextureLoader().load("./skydome.jpg");
      const scene = new THREE.Scene();
      scene.userData = {};
      scene.Items = {};
      scene.background = skydomeimage;

      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
      camera.position.set(0, 5, 20);

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
      scene.add(hemisphereLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 5, -1);
      scene.add(directionalLight);

      const planeGeometry = new THREE.PlaneGeometry(50, 50);
      const planeMaterial = new THREE.MeshStandardMaterial({ color: "slategrey" });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotateX(-Math.PI / 2);
      plane.position.set(0, -2.5, 0);

      const light = new THREE.PointLight(0xffffff, 100, 20);
      light.position.set(0, 20, 0);
      light.castShadow = true;

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      scene.add(light, plane);

      Scenario.scenario_1(scene);
      Items.suspensionitem(scene);
      Fonts.texthola(scene);

      console.log(scene.Items);

      <?php
      if (isset($_GET['selectedCar'])) {
          $selectedCar = $_GET['selectedCar'];
          echo "const selectedCar = '$selectedCar';";
      } else {
          echo "const selectedCar = null;";
      }
      ?>

      

      if (selectedCar) {
          switch(selectedCar) {
              case 'normalCar':
                  Carload.loadnormalcar(scene, (loadedCar) => car = loadedCar);
                  break;
              case 'muscleCar':
                  Carload.loadmusclecar(scene, (loadedCar) => car = loadedCar);
                  break;
              case 'deportivoCar':
                  Carload.loadeportivecar(scene, (loadedCar) => car = loadedCar);
                  break;
              case 'convertibleCar':
                  Carload.loadconvertiblecar(scene, (loadedCar) => car = loadedCar);
                  break;
              case 'lamboCar':
                  Carload.loadlambocar(scene, (loadedCar) => car = loadedCar);
                  break;
              default:
                  console.error('Modelo de coche no reconocido:', selectedCar);
                  break;
          }
      } else {
          console.error('No se ha seleccionado ningún coche.');
      }

      const keysPressed = {};
      document.addEventListener('keydown', (event) => {
          keysPressed[event.key.toLowerCase()] = true;
      });

      document.addEventListener('keyup', (event) => {
          keysPressed[event.key.toLowerCase()] = false;
      });

      function updateCarPosition() {
          if (!car) return;

          if (keysPressed['w']) {
              car.position.z -= 0.1;
          }
          if (keysPressed['s']) {
              car.position.z += 0.1;
          }
          if (keysPressed['a']) {
              car.position.x -= 0.1;
          }
          if (keysPressed['d']) {
              car.position.x += 0.1;
          }

          if (keysPressed['e']) {
              car.rotation.y += 0.01;
          }
          if (keysPressed['q']) {
              car.rotation.y -= 0.01;
          }
      }


      const Esfera = new THREE.SphereGeometry(1, 32, 32);
      const Esferamat = new THREE.MeshBasicMaterial({
        color: 0xff0000, // Color rojo
        wireframe: true // Mostrar solo la malla (wireframe)
      });
      const Esferasi = new THREE.Mesh(Esfera, Esferamat);
      scene.add(Esferasi);

      
      const Esfera2 = new THREE.SphereGeometry(1, 32, 32);
      const Esferamat2 = new THREE.MeshBasicMaterial({
        color: 0x00ff00, // Color rojo
        wireframe: true // Mostrar solo la malla (wireframe)
      });
      const Esferasi2 = new THREE.Mesh(Esfera2, Esferamat2);
      scene.add(Esferasi2);



      function animate() {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
          updateCarPosition();
          detectCollisions();
      }

      function writeUserData() {
        set(ref(db, "jugadores/1" ), {
          x: "Hola mundo"
        });
      }

            // Función para detectar colisiones
      function detectCollisions() {
        if (!car) return false;
        
        Esferasi.position.copy(car.position);
        Esferasi2.position.copy(scene.Items.position);

        const PlayerHitbox = new THREE.Sphere(car.position,1);
       //console.log(PlayerHitbox);
        
        const ObjHitbox = new THREE.Sphere(scene.Items.position,1);
        //console.log(ObjHitbox)

        if (PlayerHitbox.intersectsSphere(ObjHitbox)){
          console.log("Colision");
        }

     
      }



      animate();
    </script>
  </body>
</html>
