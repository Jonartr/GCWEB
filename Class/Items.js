import {OBJLoader} from "../Loaders/OBJLoader.js";
import {MTLLoader} from "../Loaders/MTLLoader.js";
import * as THREE from "../three.module.js";


export function aleronitem(scene){

         
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
                             scene.Items = object;
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

export function toolboxitem(scene){
     
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
                          object.position.set(15,15,0);
                            scene.add(object);          

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

export function escapeitem(scene){
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
                    object.position.set(10,20,0);
                      scene.add(object);

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

export function wheelitem(scene){
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
                    object.position.set(-15,15,0);
                      scene.add(object);

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

export function motoritem(scene){
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
                    object.position.set(-10,15,0);
                      scene.add(object);
    

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


export function nitroitem(scene){
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
                    object.position.set(10,10,0);
                      scene.add(object);
                 

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

export function dooritem(scene){
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
                   object.position.set(15,5,0);
                   object.rotation.z =  object.rotation.z +(Math.PI / 180*90);
                      scene.add(object);
        

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


export function suspensionitem(scene){
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
                    object.position.set(10,0,0);
                      scene.add(object);
                      scene.Items = object;

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