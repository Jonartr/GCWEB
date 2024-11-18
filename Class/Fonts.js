import {TextGeometry} from "../Loaders/TextGeometry.js";  
import {FontLoader} from "../Loaders/FontLoader.js";
import * as THREE from "../three.module.js";

export let lifetext = null;

export function texthola(scene){
    
    const fontLoader = new FontLoader();
    fontLoader.load(
    'Fonts/gentilis_regular.typeface.json',
    (font)=>{
        const textGeometry = new TextGeometry('Hola mundo',{
            height:2,
            size:10,
            font: font,

        });
        const textMaterial = new THREE.MeshNormalMaterial();
        const textMesh = new THREE.Mesh(textGeometry,textMaterial);
        textMesh.position.set(0,40,0);
        scene.add(textMesh);
    }




    );

}

export function textselect(scene){
    
    const fontLoader = new FontLoader();
    fontLoader.load(
    'Fonts/gentilis_regular.typeface.json',
    (font)=>{
        const textGeometry = new TextGeometry('Escoge tu vehiculo',{
            height:2,
            size:4,
            font: font,

        });
        const textMaterial = new THREE.MeshNormalMaterial();
        const textMesh = new THREE.Mesh(textGeometry,textMaterial);
        textMesh.position.set(0,10,0);
        scene.add(textMesh);
        scene.Fonts.Player1 = textMesh;
    }




    );

}

export function HpText(scene, Hp){
    
    const fontLoader = new FontLoader();
    fontLoader.load(
    'Fonts/gentilis_regular.typeface.json',
    (font)=>{
        const textGeometry = new TextGeometry(`${Hp}`,{
            height:1,
            size:2,
            font: font,

        });
        const textMaterial = new THREE.MeshNormalMaterial();
        lifetext = new THREE.Mesh(textGeometry,textMaterial);
       //e lifetext.position.set(0,10,0);
       // lifetext.rotation.x = lifetext.rotation.x +(Math.PI / 180* - 90);
        scene.add(lifetext);
        console.log(lifetext);
    }




    );

}

export function updateHpText(scene, Hp, x, y,z) {
    if (lifetext) {
      scene.remove(lifetext); // Remover el texto anterior
  
      // Crear nuevo texto con el valor actualizado
      const fontLoader = new FontLoader();
      fontLoader.load(
        'Fonts/gentilis_regular.typeface.json',
        (font) => {
          const textGeometry = new TextGeometry(`${Hp}`, {
            height: 1,
            size: 2,
            font: font,
          });
          const textMaterial = new THREE.MeshNormalMaterial();
          lifetext = new THREE.Mesh(textGeometry, textMaterial);
          lifetext.position.set(x, y, z);
          scene.add(lifetext);
        }
      );
    }
  }
  