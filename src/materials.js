import * as THREE from 'three'

let textureLoader = new THREE.TextureLoader

//плитка
const diffuseMap = textureLoader.load('textures/Tiles1/Color.jpg'); // Цвет
const normalMap = textureLoader.load('textures/Tiles1/NormalGL.jpg'); // Нормали
const displacementMap = textureLoader.load('textures/Tiles1/Displacement.jpg');
diffuseMap.colorSpace = THREE.SRGBColorSpace

diffuseMap.wrapS = THREE.RepeatWrapping;
diffuseMap.wrapT = THREE.RepeatWrapping;
diffuseMap.repeat.set(3, 3); // Количество повторений текстуры по ширине и высоте

normalMap.wrapS = THREE.RepeatWrapping;
normalMap.wrapT = THREE.RepeatWrapping;
normalMap.repeat.set(3, 3);


//дерево
const diffuseMap2 = textureLoader.load('textures/wood/Color.jpg'); // Цвет
const normalMap2 = textureLoader.load('textures/wood/Normal.jpg'); // Нормали
const displacementMap2 = textureLoader.load('textures/wood/Displacement.jpg');
diffuseMap2.colorSpace = THREE.SRGBColorSpace

diffuseMap2.wrapS = THREE.RepeatWrapping;
diffuseMap2.wrapT = THREE.RepeatWrapping;
diffuseMap2.repeat.set(4, 4); // Количество повторений текстуры по ширине и высоте

normalMap2.wrapS = THREE.RepeatWrapping;
normalMap2.wrapT = THREE.RepeatWrapping;
normalMap2.repeat.set(4, 4);

//фасад
const facade = textureLoader.load('textures/wood/Color.jpg'); // Цвет
facade.colorSpace = THREE.SRGBColorSpace




export const material = new THREE.MeshStandardMaterial({color:'red'})

export const floorMaterial = new THREE.MeshPhysicalMaterial({
    map: diffuseMap2,
   
    normalMap: normalMap2,
    //aoMap: metalAO,
    // displacementMap: displacementMap,
     displacementScale: 0.9,
   // metalness: 0.3,  // Металл
    roughness: 0.1,  // Гладкая поверхность
   clearcoat: 1.0,  // Покрытие (эффект лака)
    clearcoatRoughness: 0.9 // Гладкость покрытия
  });
  
  export const wallsMaterial = new THREE.MeshStandardMaterial({
    color:0xFFFFFF,
   // transparent: true, // Включаем прозрачность
    opacity: 0.9, // Полупрозрачный материал (50%)
    //alphaTest: 0.5, // Опционально: для устранения артефактов
  })

  export const wallMaterial = new THREE.MeshPhysicalMaterial({

    map: diffuseMap,
   
    normalMap: normalMap,
    //aoMap: metalAO,
    // displacementMap: displacementMap,
     displacementScale: 0.9,
   // metalness: 0.3,  // Металл
    roughness: 0.1,  // Гладкая поверхность
   clearcoat: 1.0,  // Покрытие (эффект лака)
    clearcoatRoughness: 0.9 // Гладкость покрытия
  });


  //export const boxMaterial = new THREE.MeshStandardMaterial({color: 'white'})

   export const boxMaterial = [
        new THREE.MeshStandardMaterial({ color: 0xDFC7AF }), // Красная (передняя сторона)
        new THREE.MeshStandardMaterial({ color: 0xDFC7AF }), // Зелёная (задняя сторона)
        new THREE.MeshStandardMaterial({ color: 0xDFC7AF }), // Синяя (верхняя сторона)
        new THREE.MeshStandardMaterial({ color: 0x3B312D }), // Жёлтая (нижняя сторона)
        new THREE.MeshStandardMaterial({ color: 0xDFC7AF }), // лицевая
        new THREE.MeshStandardMaterial({ color:'grey' }), // задняя (правая сторона)rgb(1, 65, 1)
    ];

    export const tableTopMaterial = [
        new THREE.MeshStandardMaterial({ color: 0x808080 }), // Красная (передняя сторона)
        new THREE.MeshStandardMaterial({ color:0x808080 }), // Зелёная (задняя сторона)
        new THREE.MeshStandardMaterial({ color:0x808080 }), // Синяя (верхняя сторона)
        new THREE.MeshStandardMaterial({ color:0x808080 }), // Жёлтая (нижняя сторона)
        new THREE.MeshStandardMaterial({ color:0x808080 }), // лицевая
        new THREE.MeshStandardMaterial({ color:0x808080 }), // задняя (правая сторона)rgb(1, 65, 1)
    ];
