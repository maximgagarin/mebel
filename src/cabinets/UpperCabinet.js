import * as THREE from 'three'

import { boxMaterial } from '../materials'

export class UpperCabinet extends THREE.Group{
   constructor(x,y,z){
           super()
           this.x = x
           this.y = y
           this.z=z
           
           this.addbox()
        
        
       }
   
   
       addbox(){
           const doorGeometry = new THREE.BoxGeometry(this.x, this.y, 0.016)
           const backGeometry = new THREE.BoxGeometry(this.x, this.y, 0.008)
           const topGeometry = new THREE.BoxGeometry((this.x)-0.032, this.z, 0.016)
           const sideGeometry = new THREE.BoxGeometry(this.z, this.y, 0.016)
          
   
   
   
           const door = new THREE.Mesh(doorGeometry, boxMaterial)
   
           const panelback = new THREE.Mesh(backGeometry, boxMaterial)
           const paneltop = new THREE.Mesh(topGeometry, boxMaterial)
           const panelbottom = new THREE.Mesh(topGeometry, boxMaterial)
   
           const panelleft = new THREE.Mesh(sideGeometry, boxMaterial)
           const panelright = new THREE.Mesh(sideGeometry, boxMaterial)
   
          
   
          
         
   
          
   
           panelleft.rotation.y = Math.PI/2
           paneltop.rotation.x = Math.PI/2
           panelbottom.rotation.x = -Math.PI/2
   
   
           panelright.rotation.y = -Math.PI/2
           panelback.rotation.y = Math.PI
          
   
   
   
           panelback.position.set(0,0,-0.004)
           panelleft.position.set((-(this.x)/2)+0.0081, 0, (this.z)/2)
           panelright.position.set(((this.x)/2)-0.0081, 0, (this.z)/2)
           paneltop.position.set(0, (this.y)-0.008, this.z)
           panelbottom.position.set(0, (-(this.y)/2)+0.008, (this.z)/2)
          
   
   
        
           door.position.set(0, 0, (this.z) +0.01)
   
           this.add(door, panelback, panelleft, panelright,   paneltop,  panelbottom)
          
           return this
   
          // this.scene.add(this)
          
       }

    setPosition(x,y,z){
        this.position.set(x,y,z)
    }

    setRotation(r){
        this.rotation.y = Math.PI/r
    }

    checkCollision(otherCabinet) {
        const box1 = this.getBoundingBox();
        const box2 = otherCabinet.getBoundingBox();
        return box1.intersectsBox(box2); // true если столкновение
    }

    getBoundingBox() {
        const box = new THREE.Box3().setFromObject(this);
        return box;
    }

    center(){
        let centerX = this.position.x
        let centerZ = (this.position.z)-2.5
        return centerZ
    }

    
}