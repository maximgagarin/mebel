//cтолешница

import * as THREE from 'three'

import { tableTopMaterial } from '../materials'

export class TableTop extends THREE.Group{
    constructor(x,y,z,scene){
        super()
        this.x = x
        this.y = y
        this.z=z
        this.scene = scene
        this.addbox()
     
     
    }


    addbox(){
        const geometry = new THREE.BoxGeometry(this.x, this.y, this.z)
        const panel = new THREE.Mesh(geometry, tableTopMaterial)

        panel.castShadow = true
        panel.receiveShadow = true


        this.add(panel)
       
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