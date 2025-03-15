import * as THREE from 'three'

import { boxMaterial } from './materials'

export class Cabinet extends THREE.Group{
    constructor(scene){
        super()
        this.scene = scene
        this.addbox()
        
    }


    addbox(){
        const geometry = new THREE.BoxGeometry(5, 10, 0.5);
        const panelTopGeometry = new THREE.BoxGeometry(5, 0.5, 5);


        const panelback = new THREE.Mesh(geometry, boxMaterial)
        const panelleft = new THREE.Mesh(geometry, boxMaterial)
        const panelright = new THREE.Mesh(geometry, boxMaterial)
        const paneltop = new THREE.Mesh(panelTopGeometry, boxMaterial)
        const panelbottom = new THREE.Mesh(panelTopGeometry, boxMaterial)

        const door = new THREE.Mesh(geometry, boxMaterial)

        panelleft.rotation.y = -Math.PI/2
        panelright.rotation.y = Math.PI/2
        panelback.rotation.y = Math.PI
        door.rotation.y = Math.PI



        panelback.position.set(0,5,0)
        panelleft.position.set(-2.5, 5, 2.5)
        panelright.position.set(2.5, 5, 2.5)
        paneltop.position.set(0, 10, 2.5)
        panelbottom.position.set(0, 0, 2.5)

     
        door.position.set(0, 5, 5)

        this.add(panelback, panelleft, panelright, door , paneltop, panelbottom)
        this.name = 'Cabinet'
        this.scene.add(this)

        


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

    setPosition(x,y,z){
        this.position.set(x,y,z)
    }

    setRotation(r){
        this.rotation.y = Math.PI/r
    }
}