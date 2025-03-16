import * as THREE from 'three'

import { boxMaterial } from '../materials'

export class LowerCabinet extends THREE.Group{
    constructor(x,y,z,scene){
        super()
        this.scene = scene
        this.addbox()
        this.x = x
        this.y = y
        this.z = z
    }


    addbox(){
        const doorGeometry = new THREE.BoxGeometry(0.4, 0.7, 0.016)
        const backGeometry = new THREE.BoxGeometry(0.4, 0.7, 0.008)
        const topGeometry = new THREE.BoxGeometry((0.4)-0.032, 0.3, 0.016)
        const sideGeometry = new THREE.BoxGeometry(0.3, 0.7, 0.016)
        const baseGeometry = new THREE.BoxGeometry(0.4, 0.1, 0.016)



        const door = new THREE.Mesh(doorGeometry, boxMaterial)

        const panelback = new THREE.Mesh(backGeometry, boxMaterial)
       // const paneltop = new THREE.Mesh(topGeometry, boxMaterial)
        const panelbottom = new THREE.Mesh(topGeometry, boxMaterial)

        const panelleft = new THREE.Mesh(sideGeometry, boxMaterial)
        const panelright = new THREE.Mesh(sideGeometry, boxMaterial)

        const basepanel = new THREE.Mesh(baseGeometry, boxMaterial)

       
      

       

        panelleft.rotation.y = Math.PI/2
       // paneltop.rotation.x = Math.PI/2
        panelbottom.rotation.x = -Math.PI/2


        panelright.rotation.y = -Math.PI/2
        panelback.rotation.y = Math.PI
       



        panelback.position.set(0,0,-0.004)
        panelleft.position.set((-0.2)+0.0081, 0, 0.15)
        panelright.position.set((0.2)-0.0081, 0, 0.15)
        //paneltop.position.set(0, (0.35)-0.008, 0.15)
        panelbottom.position.set(0, (-0.35)+0.008, 0.15)
        basepanel.position.set(0, -0.4, 0.29)


     
        door.position.set(0, 0, 0.31)

        this.add(door, panelback, panelleft, panelright,  basepanel ,  panelbottom)
        this.name = 'Cabinet'
        //return this
        this.scene.add(this)
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