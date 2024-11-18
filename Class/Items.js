import {OBJLoader} from "../Loaders/OBJLoader.js";
import {MTLLoader} from "../Loaders/MTLLoader.js";
import * as THREE from "../three.module.js";
import { updateHpText, lifetext } from "./Fonts.js";


export function aleronitem(scene , carType){

    if(scene.Items.aleron && lifetext){
        scene.remove(scene.Items.aleron);
        scene.remove(lifetext);
    }
         
                 // Cargar el modelo OBJ
                 const aleron = new MTLLoader();
                 aleron.load('./gcw/aleroon/aleron.mtl',
                 function(materials){
                 materials.preload();
          
                    const loader = new OBJLoader();
                    loader.setMaterials(materials);
                     loader.load(
                         './gcw/aleroon/aleron.obj', // Ruta de tu archivo OBJ
                         function (object) {
          
                          object.scale.set(1,1,1);
                           object.position.set(10,0,0);
                             scene.add(object);
                             scene.Items.aleron = object;
                             scene.Items.aleron.damage = 10;

                             const car = scene.userData[carType];
                             if (car) {
                               car.life -= scene.Items.aleron.damage;
                            
                               updateHpText(scene, car.life, car.position.x,car.position.y, car.position.z);
                       
                              // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
                             }
                       
                         },
                         function (xhr) {
                             console.log((xhr.loaded / xhr.total * 100) + '% cargado');
                         },
                         function (error) {
                             console.error('Ocurrió un error al cargar el modelo: ', error);
                         }
                     );
               }
          
          
          
           );
}

export function toolboxitem(scene, carType){
     
                 // Cargar el modelo OBJ
                 const caja = new MTLLoader();
                 caja.load('./gcw/caja/caja_herramientas.mtl',
                function(materials){
                materials.preload();
         
                   const loader = new OBJLoader();
                   loader.setMaterials(materials);
                    loader.load(
                        './gcw/caja/caja_herramientas.obj', // Ruta de tu archivo OBJ
                        function (object) {
         
                         object.scale.set(.2,.2,.2);
                         object.position.set(15,0,30);
                         scene.add(object);          
                         scene.Items.toolbox = object;

                         const car = scene.userData[carType];
                             if (car) {
                               car.life = 100;
                            
                               updateHpText(scene, car.life, car.position.x,car.position.y, car.position.z);
                       
                              // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
                             }

                        },
                        function (xhr) {
                            console.log((xhr.loaded / xhr.total * 100) + '% cargado');
                        },
                        function (error) {
                            console.error('Ocurrió un error al cargar el modelo: ', error);
                        }
                    );
              }
         
         
         
          );
}

export function escapeitem(scene, carType){
    const escape = new MTLLoader();
    escape.load('./gcw/escape/escape.mtl',
          function(materials){
          materials.preload();
   
             const loader = new OBJLoader();
             loader.setMaterials(materials);
              loader.load(
                  './gcw/escape/escape.obj', // Ruta de tu archivo OBJ
                  function (object) {
   
                    object.scale.set(.5,.5,.5);
                    object.position.set(-10,0,-10);
                    scene.add(object);
                    scene.Items.escape = object;
                    scene.Items.escape.damage = 15;

                    const car = scene.userData[carType];
                    if (car) {
                        car.life -= scene.Items.escape.damage;
                   
                      updateHpText(scene, car.life, car.position.x,car.position.y, car.position.z);
              
                     // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
                    }


                  },
                  function (xhr) {
                      console.log((xhr.loaded / xhr.total * 100) + '% cargado');
                  },
                  function (error) {
                      console.error('Ocurrió un error al cargar el modelo: ', error);
                  }
              );
        }
   
   
   
    );
}

export function wheelitem(scene, carType){
    const llanta = new MTLLoader();
    llanta.load('./gcw/llanta/llanta.mtl',
          function(materials){
          materials.preload();
   
             const loader = new OBJLoader();
             loader.setMaterials(materials);
              loader.load(
                  './gcw/llanta/llanta.obj', // Ruta de tu archivo OBJ
                  function (object) {
   
                    object.scale.set(.2,.2,.2);
                    object.position.set(-30,0,0);
                    scene.add(object);

                    scene.Items.llanta = object;
                    scene.Items.llanta.damage = 12;

                    const car = scene.userData[carType];
                    if (car) {
                        car.life -= scene.Items.llanta.damage;
                   
                      updateHpText(scene, car.life, car.position.x,car.position.y, car.position.z);
              
                     // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
                    }

                  },
                  function (xhr) {
                      console.log((xhr.loaded / xhr.total * 100) + '% cargado');
                  },
                  function (error) {
                      console.error('Ocurrió un error al cargar el modelo: ', error);
                  }
              );
        }
   
   
   
    );
}

export function motoritem(scene, carType){
    const motor = new MTLLoader();
    motor.load('./gcw/motor/motor.mtl',
          function(materials){
          materials.preload();
   
             const loader = new OBJLoader();
             loader.setMaterials(materials);
              loader.load(
                  './gcw/motor/motor.obj', // Ruta de tu archivo OBJ
                  function (object) {
   
                    object.scale.set(.7,.7,.7);
                    object.position.set(-10,0,10);
                    scene.add(object);

                    scene.Items.motor = object;
                    scene.Items.motor.damage = 12;

                    const car = scene.userData[carType];
                    if (car) {
                        car.life -= scene.Items.motor.damage;
                   
                      updateHpText(scene, car.life, car.position.x,car.position.y, car.position.z);
              
                     // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
                    }

    

                  },
                  function (xhr) {
                      console.log((xhr.loaded / xhr.total * 100) + '% cargado');
                  },
                  function (error) {
                      console.error('Ocurrió un error al cargar el modelo: ', error);
                  }
              );
        }
   
   
   
    );
}


export function nitroitem(scene, carType){
    const nitro = new MTLLoader();
    nitro.load('./gcw/nitro/nitro.mtl',
          function(materials){
          materials.preload();
   
             const loader = new OBJLoader();
             loader.setMaterials(materials);
              loader.load(
                  './gcw/nitro/nitro.obj', // Ruta de tu archivo OBJ
                  function (object) {
   
                   object.scale.set(.4,.4,.4);
                    object.position.set(10,0,20);
                      scene.add(object);

                      
                    scene.Items.nitro = object;
                    scene.Items.nitro.damage = 12;

                    const car = scene.userData[carType];
                    if (car) {
                        car.life -= scene.Items.nitro.damage;
                   
                      updateHpText(scene, car.life, car.position.x,car.position.y, car.position.z);
              
                     // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
                    }
                 

                  },
                  function (xhr) {
                      console.log((xhr.loaded / xhr.total * 100) + '% cargado');
                  },
                  function (error) {
                      console.error('Ocurrió un error al cargar el modelo: ', error);
                  }
              );
        }
   
   
   
    );
}

export function dooritem(scene, carType){
    const puerta = new MTLLoader();
    puerta.load('./gcw/puerta/puerta.mtl',
          function(materials){
          materials.preload();
   
             const loader = new OBJLoader();
             loader.setMaterials(materials);
              loader.load(
                  './gcw/puerta/puerta.obj', // Ruta de tu archivo OBJ
                  function (object) {
   
                   object.scale.set(.2,.2,.2);
                   object.position.set(-25,0,20);
                   object.rotation.z =  object.rotation.z +(Math.PI / 180*90);
                      scene.add(object);

                      scene.Items.puerta = object;
                      scene.Items.puerta.damage = 12;
  
                      const car = scene.userData[carType];
                      if (car) {
                          car.life -= scene.Items.puerta.damage;
                     
                        updateHpText(scene, car.life, car.position.x,car.position.y, car.position.z);
                
                       // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
                      }
        

                  },
                  function (xhr) {
                      console.log((xhr.loaded / xhr.total * 100) + '% cargado');
                  },
                  function (error) {
                      console.error('Ocurrió un error al cargar el modelo: ', error);
                  }
              );
        }
   
   
   
    );
}


export function suspensionitem(scene, carType){
    const suspension = new MTLLoader();
    suspension.load('./gcw/suspension/suspension.mtl',
          function(materials){
          materials.preload();
   
             const loader = new OBJLoader();
             loader.setMaterials(materials);
              loader.load(
                  './gcw/suspension/suspension.obj', // Ruta de tu archivo OBJ
                  function (object) {
   
                   object.scale.set(.2,.2,.2);
                    object.position.set(-10,0,0);
                      scene.add(object);
                      scene.Items.suspension = object;
                      scene.Items.suspension.damage = 16;
  
                      const car = scene.userData[carType];
                      if (car) {
                          car.life -= scene.Items.suspension.damage;
                     
                        updateHpText(scene, car.life, car.position.x,car.position.y, car.position.z);
                
                       // console.log(`El coche ha recibido ${scene.Items.aleron.damage} de daño. Vida restante: ${car.life}`);
                      }
        

                  },
                  function (xhr) {
                      console.log((xhr.loaded / xhr.total * 100) + '% cargado');
                  },
                  function (error) {
                      console.error('Ocurrió un error al cargar el modelo: ', error);
                  }
              );
        }
   
   
   
    );
}