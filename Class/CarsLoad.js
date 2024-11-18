import * as THREE from '../three.module.js';
import { MTLLoader } from '../Loaders/MTLLoader.js';
import { OBJLoader } from '../Loaders/OBJLoader.js';
import { HpText, lifetext } from "./Fonts.js";



function loadCar(scene, carType, mtlPath, objPath, onLoadCallback) {
  if (!scene.userData) {
    scene.userData = {};
  }

  const mtlLoader = new MTLLoader();
  mtlLoader.load(mtlPath, function (materials) {
    materials.preload();

    const loader = new OBJLoader();
    loader.setMaterials(materials);
    loader.load(objPath, function (object) {
      object.scale.set(0.05, 0.05, 0.05);
      object.position.set(0, 0, 0);
      scene.add(object);
      // Asignar el objeto al userData correspondiente
      scene.userData[carType] = object;
      scene.userData[carType].life = 100;
      scene.userData[carType].attack = 5;
      scene.userData[carType].defense = 2;
      if (onLoadCallback) onLoadCallback(object); // Llama al callback una vez cargado

      HpText(scene, scene.userData[carType].life);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% cargado');
    },
    function (error) {
      console.error('Ocurrió un error al cargar el modelo: ', error);
    });
  });
}

export function loadnormalcar(scene, onLoadCallback) {
  loadCar(scene, 'normalCar', './gcw/carros/carro_normal.mtl', './gcw/carros/carro_normal.obj', onLoadCallback);
}

export function loadmusclecar(scene, onLoadCallback) {
  loadCar(scene, 'muscleCar', './gcw/carros/muscle.mtl', './gcw/carros/muscle.obj', onLoadCallback);
}

export function loadeportivecar(scene, onLoadCallback) {
  loadCar(scene, 'deportivoCar', './gcw/carros/deportivo.mtl', './gcw/carros/deportivo.obj', onLoadCallback);
}

export function loadconvertiblecar(scene, onLoadCallback) {
  loadCar(scene, 'convertibleCar', './gcw/carros/convertible.mtl', './gcw/carros/convertible.obj', onLoadCallback);
}

export function loadlambocar(scene, onLoadCallback) {
  loadCar(scene, 'lamboCar', './gcw/carros/lambo.mtl', './gcw/carros/lambo.obj', onLoadCallback);
}
