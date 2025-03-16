import * as THREE from 'three'
import { boxMaterial ,tableTopMaterial } from './materials';
import KitchenConfig from './KitchenConfig';
import { UpperCabinet } from './cabinets/UpperCabinet';
import { LowerCabinet } from './cabinets/LowerCabinet';
import { TableTop } from './cabinets/TableTop';

export class CabinetBuilder{

    constructor(scene){
        this.scene = scene
        this.objects = [];
    
    }


    addLeftLevel1(){
        let zPos = 8

        
      

        // for (let i = 0; i < 3; i++) {
      
        //     const cube6 = new Cabinet()
    
        //     cube6.receiveShadow = true
        //     cube6.castShadow = true
    
        //     cube6.position.set(-12.5, 4, zPos)
        //     cube6.rotation.y = Math.PI/2
        //     this.scene.add(cube6)
        //     zPos += 6
        //     this.addTabletop(17.85, 0.3, 5.3, -12.4, 8.15, 14, Math.PI/2)
        // }
    }

    addLeftLevel2(){
        let zPos = 4.5
        for (let i = 0; i < 4; i++) {
      
            const geometry = new THREE.BoxGeometry(5, 6, 2);
            const cube6 = new THREE.Mesh(geometry, boxMaterial);
    
            cube6.receiveShadow = true
            cube6.castShadow = true
    
            cube6.position.set(-14, 17, zPos)
            cube6.rotation.y = -Math.PI/2
            this.scene.add(cube6)
            zPos += 5.1
            
        }
    }

    addRightLevel1(){
        let zPos = 8
        for (let i = 0; i < 3; i++) {
      
            const geometry = new THREE.BoxGeometry(5.95, 8, 5);
            const cube6 = new THREE.Mesh(geometry, boxMaterial);
    
            cube6.receiveShadow = true
            cube6.castShadow = true
    
            cube6.position.set(12.5, 4, zPos)
            cube6.rotation.y = -Math.PI/2
            this.scene.add(cube6)
            zPos += 6
            this.addTabletop(17.85, 0.3, 5.3, 12.4, 8.15, 14, Math.PI/2)
        }
    }

    addRightLevel2(){
        let zPos = 4.5
        for (let i = 0; i < 4; i++) {
      
            const geometry = new THREE.BoxGeometry(5, 6, 2);
            const cube6 = new THREE.Mesh(geometry, boxMaterial);
    
          
    
            cube6.position.set(14, 17, zPos)
            cube6.rotation.y = Math.PI/2
            this.scene.add(cube6)
            zPos += 5.1
            
        }
    }
    


     addLevel2(){
        let xPos = -1.2
        for (let i = 0; i < 5; i++) {
      
            const cube = new UpperCabinet()
            
    
            
    
            cube.setPosition(xPos, 0.4, 0.25)
            this.scene.add(cube)
            xPos += 0.6
        }
    }

 
    
    
     addLevel1(){
  
        let xPos = -1.2
        for (let i = 0; i < 5; i++) {
      
            const cube = new LowerCabinet(0.6, 0.7, 0.5)
    
          
    
            cube.position.set(xPos, 0.45, 0.01)
            this.scene.add(cube)
            xPos += 0.605
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
    
    
    //addLevel1()
    //addLevel2()
    //addLevel3()
    //addTabletop()
    //addBaseCabinet()
    
}