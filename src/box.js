import * as THREE from 'three'

export class BoxObj {
    constructor(w, h, d ,  x, y, z, scene){
        this.w = w
        this.h = h
        this.d = d
        this.x =x
        this.y = y
        this.z = z

        const geometry = new THREE.BoxGeometry(this.w, this.h, this.d);
        const material = new THREE.MeshStandardMaterial({ color: 'red' });
        this.mesh = new THREE.Mesh(geometry, material);
        this.setPosition(this.x, this.y, this.z);

        this.heightHalf = h/2
        this.posBack = this.mesh.position.z

        this.scene = scene
        scene.add(this.mesh)
    }

 
    setPosition(x,y,z){
        this.mesh.position.set(x,y,z)
    }

    setColor(color){
        this.mesh.material.color.set(color)
    }
}