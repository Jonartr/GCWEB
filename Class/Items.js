import { OBJLoader } from "../Loaders/OBJLoader.js";
import { MTLLoader } from "../Loaders/MTLLoader.js";
import * as THREE from "../three.module.js";
import { updateHpText, lifetext } from "./Fonts.js";

//let delay =3000;

export function createCollisionSphere(object) {
  const Esfera = new THREE.SphereGeometry(1, 32, 32);
  const Esferamat = new THREE.MeshBasicMaterial({
    color: 0xff0000, // Color rojo
    wireframe: true, // Mostrar solo la malla (wireframe)
  });
  const collisionSphere = new THREE.Mesh(Esfera, Esferamat);
  collisionSphere.position.copy(object.position); // Alinear la posición con el objeto
  object.add(collisionSphere); // Agregar la esfera de colisión como hijo del objeto
  object.userData.collisionSphere = collisionSphere; // Guardar la esfera de colisión en userData

  // Opcional: puedes ajustar la escala de la esfera para que se adapte mejor al objeto
  collisionSphere.scale.set(3, 3, 3);
}

export function aleronitem(scene, carType, delay = 3000) {
  if (scene.Items.aleron && lifetext) {
    scene.remove(scene.Items.aleron);
    scene.remove(lifetext);
  }

  function getRandomPosition(range) {
    return Math.random() * range - range / 2;
  }

  // Cargar el modelo OBJ
  const aleron = new MTLLoader();
  aleron.load("./gcw/aleroon/aleron.mtl", function (materials) {
    materials.preload();

    const loader = new OBJLoader();
    loader.setMaterials(materials);
    loader.load(
      "./gcw/aleroon/aleron.obj", // Ruta de tu archivo OBJ
      function (object) {
        object.scale.set(1, 1, 1);
        object.position.set(getRandomPosition(50), 50, getRandomPosition(50)); // Nueva posición aleatoria
        scene.add(object);
        scene.Items.aleron = object;
        scene.Items.aleron.damage = 10;

      //createCollisionSphere

        const car = scene.userData[carType];
        if (car) {
          car.life -= scene.Items.aleron.damage;

          updateHpText(
            scene,
            car.life,
            car.position.x,
            car.position.y,
            car.position.z
          );

          // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
        }

        // Variables para la velocidad de caída y el incremento de tamaño
        let fallSpeed = 0.5;
        let scaleIncrement = 0.01;

        // Función para actualizar la posición del ítem
        function updateItemPosition() {
          object.position.y -= fallSpeed; // Velocidad de caída

          // Incrementar el tamaño del objeto

          if (
            object.scale.x < 20 &&
            object.scale.y < 20 &&
            object.scale.z < 20
          ) {
            object.scale.set(1, 1, 1);
          } else {
            object.scale.x += scaleIncrement;
            object.scale.y += scaleIncrement;
            object.scale.z += scaleIncrement;
          }

          // Incrementar la velocidad de caída
          fallSpeed += 0.001;

          if (object.position.y <= -10) {
            object.position.set(
              getRandomPosition(50),
              50,
              getRandomPosition(50)
            ); // Nueva posición aleatoria
            //     object.scale.set(1, 1, 1); // Resetear el tamaño
            fallSpeed = 0.5; // Resetear la velocidad de caída
          //  object.userData.collisionSphere.position.copy(object.position);
          }

          requestAnimationFrame(updateItemPosition);
        }

        updateItemPosition();
        //  let delay = 3000;
        setTimeout(() => {
          updateItemPosition();
        }, delay);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% cargado");
      },
      function (error) {
        console.error("Ocurrió un error al cargar el modelo: ", error);
      }
    );
  });
}

export function toolboxitem(scene, carType, delay = 3000) {
  if (scene.Items.toolbox && lifetext) {
    scene.remove(scene.Items.toolbox);
    scene.remove(lifetext);
  }

  function getRandomPosition(range) {
    return Math.random() * range - range / 2;
  }

  // Cargar el modelo OBJ
  const caja = new MTLLoader();
  caja.load("./gcw/caja/caja_herramientas.mtl", function (materials) {
    materials.preload();

    const loader = new OBJLoader();
    loader.setMaterials(materials);
    loader.load(
      "./gcw/caja/caja_herramientas.obj", // Ruta de tu archivo OBJ
      function (object) {
        object.scale.set(0.2, 0.2, 0.2);
        object.position.set(getRandomPosition(50), 50, getRandomPosition(50)); // Nueva posición aleatoria
        scene.add(object);
        scene.Items.toolbox = object;

      //createCollisionSphere

        const car = scene.userData[carType];
        if (car) {
          car.life = 100;

          updateHpText(
            scene,
            car.life,
            car.position.x,
            car.position.y,
            car.position.z
          );

          // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
        }

        // Variables para la velocidad de caída y el incremento de tamaño
        let fallSpeed = 0.5;
        let scaleIncrement = 0.01;

        // Función para actualizar la posición del ítem
        function updateItemPosition() {
          object.position.y -= fallSpeed; // Velocidad de caída

          // Incrementar el tamaño del objeto

          if (
            object.scale.x < 20 &&
            object.scale.y < 20 &&
            object.scale.z < 20
          ) {
            object.scale.set(1, 1, 1);
          } else {
            object.scale.x += scaleIncrement;
            object.scale.y += scaleIncrement;
            object.scale.z += scaleIncrement;
          }

          // Incrementar la velocidad de caída
          fallSpeed += 0.001;

          if (object.position.y <= -10) {
            object.position.set(
              getRandomPosition(100),
              50,
              getRandomPosition(100)
            ); // Nueva posición aleatoria
            //  object.scale.set(1, 1, 1); // Resetear el tamaño
            fallSpeed = 0.5; // Resetear la velocidad de caída
          //  object.userData.collisionSphere.position.copy(object.position);
          }

          requestAnimationFrame(updateItemPosition);
        }

        updateItemPosition();

        setTimeout(() => {
          updateItemPosition();
        }, delay);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% cargado");
      },
      function (error) {
        console.error("Ocurrió un error al cargar el modelo: ", error);
      }
    );
  });
}

export function escapeitem(scene, carType, delay = 3000) {
  if (scene.Items.escape && lifetext) {
    scene.remove(scene.Items.escape);
    scene.remove(lifetext);
  }

  function getRandomPosition(range) {
    return Math.random() * range - range / 2;
  }

  const escape = new MTLLoader();
  escape.load("./gcw/escape/escape.mtl", function (materials) {
    materials.preload();

    const loader = new OBJLoader();
    loader.setMaterials(materials);
    loader.load(
      "./gcw/escape/escape.obj", // Ruta de tu archivo OBJ
      function (object) {
        object.scale.set(0.5, 0.5, 0.5);
        object.position.set(getRandomPosition(50), 50, getRandomPosition(50)); // Nueva posición aleatoria
        scene.add(object);
        scene.Items.escape = object;
        scene.Items.escape.damage = 15;

      //createCollisionSphere

        const car = scene.userData[carType];
        if (car) {
          car.life -= scene.Items.escape.damage;

          updateHpText(
            scene,
            car.life,
            car.position.x,
            car.position.y,
            car.position.z
          );

          // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
        }

        // Variables para la velocidad de caída y el incremento de tamaño
        let fallSpeed = 0.5;
        let scaleIncrement = 0.01;

        // Función para actualizar la posición del ítem
        function updateItemPosition() {
          object.position.y -= fallSpeed; // Velocidad de caída

          // Incrementar el tamaño del objeto

          if (
            object.scale.x < 20 &&
            object.scale.y < 20 &&
            object.scale.z < 20
          ) {
            object.scale.set(1, 1, 1);
          } else {
            object.scale.x += scaleIncrement;
            object.scale.y += scaleIncrement;
            object.scale.z += scaleIncrement;
          }

          // Incrementar la velocidad de caída
          fallSpeed += 0.001;

          if (object.position.y <= -10) {
            object.position.set(
              getRandomPosition(50),
              50,
              getRandomPosition(50)
            ); // Nueva posición aleatoria
            //    object.scale.set(1, 1, 1); // Resetear el tamaño
            fallSpeed = 0.5; // Resetear la velocidad de caída
          //  object.userData.collisionSphere.position.copy(object.position);
          }

          requestAnimationFrame(updateItemPosition);
        }

        updateItemPosition();

        setTimeout(() => {
          updateItemPosition();
        }, delay);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% cargado");
      },
      function (error) {
        console.error("Ocurrió un error al cargar el modelo: ", error);
      }
    );
  });
}

export function wheelitem(scene, carType, delay = 3000) {
  if (scene.Items.llanta && lifetext) {
    scene.remove(scene.Items.llanta);
    scene.remove(lifetext);
  }

  function getRandomPosition(range) {
    return Math.random() * range - range / 2;
  }

  const llanta = new MTLLoader();
  llanta.load("./gcw/llanta/llanta.mtl", function (materials) {
    materials.preload();

    const loader = new OBJLoader();
    loader.setMaterials(materials);
    loader.load(
      "./gcw/llanta/llanta.obj", // Ruta de tu archivo OBJ
      function (object) {
        object.scale.set(0.2, 0.2, 0.2);
        object.position.set(getRandomPosition(50), 50, getRandomPosition(50)); // Nueva posición aleatoria
        scene.add(object);

        scene.Items.llanta = object;
        scene.Items.llanta.damage = 12;

      //createCollisionSphere

        const car = scene.userData[carType];
        if (car) {
          car.life -= scene.Items.llanta.damage;

          updateHpText(
            scene,
            car.life,
            car.position.x,
            car.position.y,
            car.position.z
          );

          // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
        }

        // Variables para la velocidad de caída y el incremento de tamaño
        let fallSpeed = 0.5;
        let scaleIncrement = 0.01;

        // Función para actualizar la posición del ítem
        function updateItemPosition() {
          object.position.y -= fallSpeed; // Velocidad de caída

          // Incrementar el tamaño del objeto

          if (
            object.scale.x < 20 &&
            object.scale.y < 20 &&
            object.scale.z < 20
          ) {
            object.scale.set(1, 1, 1);
          } else {
            object.scale.x += scaleIncrement;
            object.scale.y += scaleIncrement;
            object.scale.z += scaleIncrement;
          }

          // Incrementar la velocidad de caída
          fallSpeed += 0.001;

          if (object.position.y <= -10) {
            object.position.set(
              getRandomPosition(50),
              50,
              getRandomPosition(50)
            ); // Nueva posición aleatoria
            //    object.scale.set(1, 1, 1); // Resetear el tamaño
            fallSpeed = 0.5; // Resetear la velocidad de caída
          //  object.userData.collisionSphere.position.copy(object.position);
          }

          requestAnimationFrame(updateItemPosition);
        }

        updateItemPosition();

        setTimeout(() => {
          updateItemPosition();
        }, delay);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% cargado");
      },
      function (error) {
        console.error("Ocurrió un error al cargar el modelo: ", error);
      }
    );
  });
}

export function motoritem(scene, carType, delay = 3000) {
  if (scene.Items.motor && lifetext) {
    scene.remove(scene.Items.motor);
    scene.remove(lifetext);
  }

  function getRandomPosition(range) {
    return Math.random() * range - range / 2;
  }

  const motor = new MTLLoader();
  motor.load("./gcw/motor/motor.mtl", function (materials) {
    materials.preload();

    const loader = new OBJLoader();
    loader.setMaterials(materials);
    loader.load(
      "./gcw/motor/motor.obj", // Ruta de tu archivo OBJ
      function (object) {
        object.scale.set(0.7, 0.7, 0.7);
        object.position.set(getRandomPosition(50), 50, getRandomPosition(50)); // Nueva posición aleatoria
        scene.add(object);

        scene.Items.motor = object;
        scene.Items.motor.damage = 12;

      //createCollisionSphere

        const car = scene.userData[carType];
        if (car) {
          car.life -= scene.Items.motor.damage;

          updateHpText(
            scene,
            car.life,
            car.position.x,
            car.position.y,
            car.position.z
          );

          // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
        }

        // Variables para la velocidad de caída y el incremento de tamaño
        let fallSpeed = 0.5;
        let scaleIncrement = 0.01;

        // Función para actualizar la posición del ítem
        function updateItemPosition() {
          object.position.y -= fallSpeed; // Velocidad de caída

          // Incrementar el tamaño del objeto

          if (
            object.scale.x < 20 &&
            object.scale.y < 20 &&
            object.scale.z < 20
          ) {
            object.scale.set(1, 1, 1);
          } else {
            object.scale.x += scaleIncrement;
            object.scale.y += scaleIncrement;
            object.scale.z += scaleIncrement;
          }

          // Incrementar la velocidad de caída
          fallSpeed += 0.001;

          if (object.position.y <= -10) {
            object.position.set(
              getRandomPosition(50),
              50,
              getRandomPosition(50)
            ); // Nueva posición aleatoria
            //     object.scale.set(1, 1, 1); // Resetear el tamaño
            fallSpeed = 0.5; // Resetear la velocidad de caída
          //  object.userData.collisionSphere.position.copy(object.position);
          }

          requestAnimationFrame(updateItemPosition);
        }

        updateItemPosition();

        setTimeout(() => {
          updateItemPosition();
        }, delay);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% cargado");
      },
      function (error) {
        console.error("Ocurrió un error al cargar el modelo: ", error);
      }
    );
  });
}

export function nitroitem(scene, carType, delay = 3000) {
  if (scene.Items.nitro && lifetext) {
    scene.remove(scene.Items.nitro);
    scene.remove(lifetext);
  }

  function getRandomPosition(range) {
    return Math.random() * range - range / 2;
  }

  const nitro = new MTLLoader();
  nitro.load("./gcw/nitro/nitro.mtl", function (materials) {
    materials.preload();

    const loader = new OBJLoader();
    loader.setMaterials(materials);
    loader.load(
      "./gcw/nitro/nitro.obj", // Ruta de tu archivo OBJ
      function (object) {
        object.scale.set(0.4, 0.4, 0.4);
        object.position.set(getRandomPosition(50), 50, getRandomPosition(50)); // Nueva posición aleatoria
        scene.add(object);

        scene.Items.nitro = object;
        scene.Items.nitro.damage = 12;

      //createCollisionSphere

        const car = scene.userData[carType];
        if (car) {
          car.life -= scene.Items.nitro.damage;

          updateHpText(
            scene,
            car.life,
            car.position.x,
            car.position.y,
            car.position.z
          );

          // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
        }

        // Variables para la velocidad de caída y el incremento de tamaño
        let fallSpeed = 0.5;
        let scaleIncrement = 0.01;

        // Función para actualizar la posición del ítem
        function updateItemPosition() {
          object.position.y -= fallSpeed; // Velocidad de caída

          // Incrementar el tamaño del objeto

          if (
            object.scale.x < 20 &&
            object.scale.y < 20 &&
            object.scale.z < 20
          ) {
            object.scale.set(1, 1, 1);
          } else {
            object.scale.x += scaleIncrement;
            object.scale.y += scaleIncrement;
            object.scale.z += scaleIncrement;
          }
          // Incrementar la velocidad de caída
          fallSpeed += 0.001;

          if (object.position.y <= -10) {
            object.position.set(
              getRandomPosition(50),
              50,
              getRandomPosition(50)
            ); // Nueva posición aleatoria
            //    object.scale.set(1, 1, 1); // Resetear el tamaño
            fallSpeed = 0.5; // Resetear la velocidad de caída
          //  object.userData.collisionSphere.position.copy(object.position);
          }

          requestAnimationFrame(updateItemPosition);
        }

        updateItemPosition();

        setTimeout(() => {
          updateItemPosition();
        }, delay);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% cargado");
      },
      function (error) {
        console.error("Ocurrió un error al cargar el modelo: ", error);
      }
    );
  });
}

export function dooritem(scene, carType, delay = 3000) {
  if (scene.Items.puerta && lifetext) {
    scene.remove(scene.Items.puerta);
    scene.remove(lifetext);
  }

  function getRandomPosition(range) {
    return Math.random() * range - range / 2;
  }

  const puerta = new MTLLoader();
  puerta.load("./gcw/puerta/puerta.mtl", function (materials) {
    materials.preload();

    const loader = new OBJLoader();
    loader.setMaterials(materials);
    loader.load(
      "./gcw/puerta/puerta.obj", // Ruta de tu archivo OBJ
      function (object) {
        object.scale.set(0.2, 0.2, 0.2);
        object.position.set(getRandomPosition(50), 50, getRandomPosition(50)); // Nueva posición aleatoria
        object.rotation.z = object.rotation.z + (Math.PI / 180) * 90;
        scene.add(object);

        scene.Items.puerta = object;
        scene.Items.puerta.damage = 12;

      //createCollisionSphere

        const car = scene.userData[carType];
        if (car) {
          car.life -= scene.Items.puerta.damage;

          updateHpText(
            scene,
            car.life,
            car.position.x,
            car.position.y,
            car.position.z
          );

          // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
        }

        // Variables para la velocidad de caída y el incremento de tamaño
        let fallSpeed = 0.5;
        let scaleIncrement = 0.01;

        // Función para actualizar la posición del ítem
        function updateItemPosition() {
          object.position.y -= fallSpeed; // Velocidad de caída

          // Incrementar el tamaño del objeto

          if (
            object.scale.x < 20 &&
            object.scale.y < 20 &&
            object.scale.z < 20
          ) {
            object.scale.set(1, 1, 1);
          } else {
            object.scale.x += scaleIncrement;
            object.scale.y += scaleIncrement;
            object.scale.z += scaleIncrement;
          }

          // Incrementar la velocidad de caída
          fallSpeed += 0.001;

          if (object.position.y <= -10) {
            object.position.set(
              getRandomPosition(50),
              50,
              getRandomPosition(50)
            ); // Nueva posición aleatoria
            //    object.scale.set(1, 1, 1); // Resetear el tamaño
            fallSpeed = 0.5; // Resetear la velocidad de caída
          //  object.userData.collisionSphere.position.copy(object.position);
          }

          requestAnimationFrame(updateItemPosition);
        }

        updateItemPosition();

        setTimeout(() => {
          updateItemPosition();
        }, delay);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% cargado");
      },
      function (error) {
        console.error("Ocurrió un error al cargar el modelo: ", error);
      }
    );
  });
}

export function suspensionitem(scene, carType, delay = 3000) {
  if (scene.Items.suspension && lifetext) {
    scene.remove(scene.Items.suspension);
    scene.remove(lifetext);
  }

  function getRandomPosition(range) {
    return Math.random() * range - range / 2;
  }

  const suspension = new MTLLoader();
  suspension.load("./gcw/suspension/suspension.mtl", function (materials) {
    materials.preload();

    const loader = new OBJLoader();
    loader.setMaterials(materials);
    loader.load(
      "./gcw/suspension/suspension.obj", // Ruta de tu archivo OBJ
      function (object) {
        object.scale.set(0.2, 0.2, 0.2);
        object.position.set(getRandomPosition(50), 50, getRandomPosition(50)); // Nueva posición aleatoria
        scene.add(object);
        scene.Items.suspension = object;
        scene.Items.suspension.damage = 16;

      //createCollisionSphere

        const car = scene.userData[carType];
        if (car) {
          car.life -= scene.Items.suspension.damage;

          updateHpText(
            scene,
            car.life,
            car.position.x,
            car.position.y,
            car.position.z
          );

          // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
        }

        // Variables para la velocidad de caída y el incremento de tamaño
        let fallSpeed = 0.5;
        let scaleIncrement = 0.01;

        // Función para actualizar la posición del ítem
        function updateItemPosition() {
          object.position.y -= fallSpeed; // Velocidad de caída

          // Incrementar el tamaño del objeto

          if (
            object.scale.x < 20 &&
            object.scale.y < 20 &&
            object.scale.z < 20
          ) {
            object.scale.set(1, 1, 1);
          } else {
            object.scale.x += scaleIncrement;
            object.scale.y += scaleIncrement;
            object.scale.z += scaleIncrement;
            // console.log( object.scale.x);
          }

          // Incrementar la velocidad de caída
          fallSpeed += 0.001;

          if (object.position.y <= -10) {
            object.position.set(
              getRandomPosition(50),
              50,
              getRandomPosition(50)
            ); // Nueva posición aleatoria
            //    object.scale.set(1, 1, 1); // Resetear el tamaño
            fallSpeed = 0.5; // Resetear la velocidad de caída
          //  object.userData.collisionSphere.position.copy(object.position);
          }

          requestAnimationFrame(updateItemPosition);
        }

        updateItemPosition();

        setTimeout(() => {
          updateItemPosition();
        }, delay);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% cargado");
      },
      function (error) {
        console.error("Ocurrió un error al cargar el modelo: ", error);
      }
    );
  });
}
