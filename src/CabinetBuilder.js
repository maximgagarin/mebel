import * as THREE from 'three'
import { boxMaterial ,tableTopMaterial ,doorMaterial } from './materials';
import KitchenConfig from './KitchenConfig';
import { UpperCabinet } from './cabinets/UpperCabinet';
import { LowerCabinet } from './cabinets/LowerCabinet';
import { CaseCabinet } from './cabinets/CaseCabinet';
import { TableTop } from './cabinets/TableTop';

export class CabinetBuilder{

    constructor(scene){
        this.scene = scene
        this.objects = [];
    
    }


    addLeftLevel1(){
        let zPos = 0.85

        
      

        for (let i = 0; i < 3; i++) {
      
            const cube = new LowerCabinet(0.6, 0.7, 0.5)
    
    
            cube.position.set(-1.45, 0.45, zPos)
            cube.rotation.y = Math.PI/2
            this.scene.add(cube)
            zPos += 0.6
            cube.name = 'AngleLowerLeft'
            cube.userData.index = i
           
        }
    }

    addLeftLevel2(){
        let zPos = 0.85
        for (let i = 0; i < 3; i++) {
            const cube = new UpperCabinet(0.6, 0.7, 0.3)
    
    
            cube.position.set(-1.4, 1.7, zPos)
            cube.rotation.y = Math.PI/2
            this.scene.add(cube)
            zPos += 0.6
            cube.name = 'AngleUpperLeft'
            cube.userData.index = i
            
        }
    }

    addRightLevel1(){
        let zPos = 0.85
        for (let i = 0; i < 3; i++) {
      
            const cube = new LowerCabinet(0.6, 0.7, 0.5)
    
    
            cube.position.set(1.45, 0.45, zPos)
            cube.rotation.y = -Math.PI/2
            this.scene.add(cube)
            zPos += 0.6
            cube.name = 'AngleLowerLeft'
            cube.userData.index = i
           
        }
    }

    addRightLevel2(){
        let zPos = 0.85
        for (let i = 0; i < 3; i++) {
            const cube = new UpperCabinet(0.6, 0.7, 0.3)
    
    
            cube.position.set(1.4, 1.7, zPos)
            cube.rotation.y =- Math.PI/2
            this.scene.add(cube)
            zPos += 0.6
            cube.name = 'AngleUpperLeft'
            cube.userData.index = i
            
        }
            
        
    }
    


     addLevel2(){
        let xPos = -1.2
        for (let i = 0; i < 5; i++) {
            const cube = new UpperCabinet(0.6, 0.7, 0.3)
            cube.setPosition(xPos, 1.7, 0.01)
            this.scene.add(cube)
            xPos += 0.6
            cube.name = 'DirectUpper'
            cube.userData.index = i
        }
    }

 
    
    
     addLevel1(){
  
        let xPos = -1.2
        for (let i = 0; i < 5; i++) {
            const cube = new LowerCabinet(0.6, 0.7, 0.5)
            cube.position.set(xPos, 0.45, 0.05)
            this.scene.add(cube)
            xPos += 0.6
            cube.name = 'DirectLower'
            cube.userData.index = i
        }
    }
    
     addLevel3(){
        let xPos = -12
        for (let i = 0; i < 5; i++) {
      
            const geometry = new THREE.BoxGeometry(5.95, 4, 3);
            const cube3 = new THREE.Mesh(geometry, boxMaterial);
    
            cube3.receiveShadow = true
            cube3.castShadow = true
    
            cube3.position.set(xPos, 22, 1.5)
            this.scene.add(cube3)
            xPos += 6
        }
    }
    
    addTabletop( w,h,d, x,y,z , r){
        const geometry = new THREE.BoxGeometry(w,h,d);
        const cube4 = new THREE.Mesh(geometry, tableTopMaterial);

        cube4.receiveShadow = true
        cube4.castShadow = true

        cube4.rotation.y = r
    
        cube4.position.set(x,y,z)
        this.scene.add(cube4)
    }
    
    
     addBaseCabinet(){
        const geometry = new THREE.BoxGeometry(6, 24, 5);
        const cube5 = new THREE.Mesh(geometry, boxMaterial);
    
        cube5.receiveShadow = true
        cube5.castShadow = true
        
        cube5.position.set(18, 12, 2.5)
        this.scene.add(cube5)
    }


    addCaseCabinet(){
       
            const cube = new CaseCabinet(0.6, 1.95, 0.6)
            cube.setPosition(1.2, 1.075, 0.01)
            this.scene.add(cube)
            cube.name = 'CaseCabinet'
          
        }
    
    
    
    //addLevel1()
    //addLevel2()
    //addLevel3()
    //addTabletop()
    //addBaseCabinet()
    
}