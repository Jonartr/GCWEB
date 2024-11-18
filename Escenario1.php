
<!DOCTYPE html>
<html lang="en">
  <head>
  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> -->
  <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> -->
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
    <div class = "row col-3 mx-auto">
        <button type="button"  class="btn btn-success mt-2 " id="btn-login">Login</button>
       
        <button type="button" class="btn btn-warning" id="btn-logout">Logout</button>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/examples/js/loaders/FBXLoader.js"></script>
<div class="col-6">
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
      let currentUser = null;
      let hpPlayer1 = null
      let colissionInterval = 200;
      let lastCollisionCheck = 0;


      buttonLogin.addEventListener("click", async function () {
        await signInWithPopup(auth, provider)
          .then((result) => {
            if (result.user) {
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;

              const user = result.user;
              currentUser = user;
                alert(currentUser.uid);
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
            currentUser = null;
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
      scene.Fonts = {};
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

      scene.add(light);

      Scenario.scenario_3(scene);
 
    //=========================================================================================//

      //console.log(scene.Items);

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
                  Carload.loadnormalcar(scene, (loadedCar) =>{ car = loadedCar; //console.log(scene.Fonts) 

                  });
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

          Items.suspensionitem(scene, selectedCar);
          Items.aleronitem(scene, selectedCar);

          Items.wheelitem(scene, selectedCar);
          Items.toolboxitem(scene, selectedCar);

          Items.motoritem(scene, selectedCar);
          Items.escapeitem(scene, selectedCar);
          
          Items.nitroitem(scene, selectedCar);
          Items.dooritem(scene, selectedCar);

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
              car.position.z -= 0.3;
          }
          if (keysPressed['s']) {
              car.position.z += 0.3;
          }
          if (keysPressed['a']) {
              car.position.x -= 0.3;
          }
          if (keysPressed['d']) {
              car.position.x += 0.3;
          }

          if (keysPressed['q']) {
              car.rotation.y += 0.05;
          }
          if (keysPressed['e']) {
              car.rotation.y -= 0.05;
          }
      }


      const Esfera = new THREE.SphereGeometry(1, 32, 32);
      const Esferamat = new THREE.MeshBasicMaterial({
        color: 0xff0000, // Color rojo
        wireframe: true // Mostrar solo la malla (wireframe)
      });
      const Esferasi = new THREE.Mesh(Esfera, Esferamat);
 //     scene.add(Esferasi);

      
      const Esfera2 = new THREE.SphereGeometry(1, 32, 32);
      const Esferamat2 = new THREE.MeshBasicMaterial({
        color: 0x00ff00, // Color rojo
        wireframe: true // Mostrar solo la malla (wireframe)
      });
      const Esferasi2 = new THREE.Mesh(Esfera2, Esferamat2);
 //     scene.add(Esferasi2);

      
      const Esfera3 = new THREE.SphereGeometry(1, 32, 32);
      const Esferamat3 = new THREE.MeshBasicMaterial({
        color: 0x0000ff, // Color rojo
        wireframe: true // Mostrar solo la malla (wireframe)
      });
      const Esferasi3 = new THREE.Mesh(Esfera3, Esferamat3);
    //  scene.add(Esferasi3);

    
      
      

      function writeUserData() {
        set(ref(db, "jugadores/" + currentUser.uid ), {
          x: car.position.x,
          z: car.position.z
        });
      }

            // Función para detectar colisiones
      function detectCollisions() {
        if (!car) return false;
        
        // Esferasi.position.copy(car.position);
        // Esferasi2.position.copy(scene.Items.aleron.position);
        // Esferasi3.position.copy(scene.Items.suspension.position);

        const PlayerHitbox = new THREE.Sphere(car.position,1);
        
        const ObjHitbox = new THREE.Sphere(scene.Items.aleron.position,1);
     //  console.log(scene.Items.aleron.position)
          
        const ObjHitbox2 = new THREE.Sphere(scene.Items.suspension.position,1);
      //  console.log(scene.Items.suspension.position)

      const ObjHitbox3 = new THREE.Sphere(scene.Items.toolbox.position,1);
     //  console.log(scene.Items.aleron.position)
          
        const ObjHitbox4 = new THREE.Sphere(scene.Items.escape.position,1);
      //  console.log(scene.Items.suspension.position)

      const ObjHitbox5 = new THREE.Sphere(scene.Items.motor.position,1);
     //  console.log(scene.Items.aleron.position)
          
        const ObjHitbox6 = new THREE.Sphere(scene.Items.nitro.position,1);
      //  console.log(scene.Items.suspension.position)

      const ObjHitbox7 = new THREE.Sphere(scene.Items.puerta.position,1);
      //  console.log(scene.Items.suspension.position)

      const ObjHitbox8 = new THREE.Sphere(scene.Items.llanta.position,1);
      //  console.log(scene.Items.suspension.position)

       //console.log(selectedCar);

        if (PlayerHitbox.intersectsSphere(ObjHitbox)){
          console.log("Colision aleron");
          Items.aleronitem(scene, selectedCar); 

        }
        
        if (PlayerHitbox.intersectsSphere(ObjHitbox2)){
          console.log("Colision suspension");
          Items.dooritem(scene, selectedCar); 

        }
        
        if (PlayerHitbox.intersectsSphere(ObjHitbox3)){
          console.log("Recuperas vida");
          Items.toolboxitem(scene, selectedCar); 
        }

        if (PlayerHitbox.intersectsSphere(ObjHitbox4)){
          console.log("Colision escape");
          Items.escapeitem(scene, selectedCar); 

        }
        
        if (PlayerHitbox.intersectsSphere(ObjHitbox5)){
          console.log("Colision motor");
          Items.motoritem(scene, selectedCar); 
        }


        if (PlayerHitbox.intersectsSphere(ObjHitbox6)){
          console.log("Colision nitro");
          Items.nitroitem(scene, selectedCar); 

        }
     
        if (PlayerHitbox.intersectsSphere(ObjHitbox7)){
          console.log("Colision puerta");
          Items.dooritem(scene, selectedCar); 

        }

        
        if (PlayerHitbox.intersectsSphere(ObjHitbox8)){
          console.log("Colision llanta");
          Items.wheelitem(scene, selectedCar); 
        }

     
      }

      function FontFollow(){
        Fonts.lifetext.position.set(car.position.x - 2.5, car.position.y + 2, car.position.z);
        Fonts.lifetext.rotation.y  =  car.rotation.y;
      }


     
      function animate() {

          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
          updateCarPosition();
          FontFollow();


        const now = performance.now();

        if (now - lastCollisionCheck > colissionInterval){
           detectCollisions();
           lastCollisionCheck = now;
        }

     

          if(currentUser != null){
            writeUserData();
          }
      }

        
      animate();
      //window.onload = init;
    </script>
    </div>
  </body>
</html>
