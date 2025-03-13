import * as THREE from 'three'
import { boxMaterial ,tableTopMaterial } from './materials';
import KitchenConfig from './KitchenConfig';

export class CabinetBuilder{

    constructor(scene){
        this.scene = scene
        this.objects = [];
    //     this.addLevel1()
    //     this.addLevel2()
    //  //   this.addLevel3()
    //     this.addTabletop(30, 0.3, 5.3, 0, 8.15, 2.65, 0)


    //     this.addLeftLevel1()
    //     this.addLeftLevel2()

    //     this.addRightLevel1()
    //     this.addRightLevel2()
    }


    addLeftLevel1(){
        let zPos = 8
        for (let i = 0; i < 3; i++) {
      
            const geometry = new THREE.BoxGeometry(5.95, 8, 5);
            const cube6 = new THREE.Mesh(geometry, boxMaterial);
    
            cube6.receiveShadow = true
            cube6.castShadow = true
    
            cube6.position.set(-12.5, 4, zPos)
            cube6.rotation.y = Math.PI/2
            this.scene.add(cube6)
            zPos += 6
            this.addTabletop(17.85, 0.3, 5.3, -12.4, 8.15, 14, Math.PI/2)
        }
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
        let xPos = -12
        for (let i = 0; i < 5; i++) {
      
            const geometry = new THREE.BoxGeometry(5.95, 6, 2);
            const cube1 = new THREE.Mesh(geometry, boxMaterial);
            cube1.name = 'Level2'
    
            cube1.receiveShadow = true
            cube1.castShadow = true
    
            cube1.position.set(xPos, 17, 1)
            cube1.rotation.y = Math.PI
            this.scene.add(cube1)
            xPos += 6
        }
    }

 
    
    
     addLevel1(){
        let xPos = -12
        for (let i = 0; i < 5; i++) {
      
            const geometry = new THREE.BoxGeometry(5.95, 8, 5);
            const cube2 = new THREE.Mesh(geometry, boxMaterial);
            cube2.name = 'Level1'
    
            cube2.receiveShadow = true
            cube2.castShadow = true
    
            cube2.position.set(xPos, 4, 2.5)
            this.scene.add(cube2)
            xPos += 6
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