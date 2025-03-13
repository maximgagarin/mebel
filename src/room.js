
import * as THREE from 'three'
import { floorMaterial , wallMaterial  , wallsMaterial } from './materials';
import KitchenConfig from "./KitchenConfig"




export class Room{
    constructor( w, d , h , scene){
        this.scene = scene
        this.width = w
        this.depth = d
        this.height = h
        this.objects = []; // Массив для хранения объектов комнаты
        this.createRoom()



    }

    createRoom(){
        this.floorGeometry = new THREE.PlaneGeometry(this.width,this.depth)
        this.wallGeometry = new THREE.PlaneGeometry(this.width,this.height)
        this.wallLeftGeometry = new THREE.PlaneGeometry(this.depth,this.height)
        this.wallRightGeometry = new THREE.PlaneGeometry(this.depth,this.height)

        this.floor = new THREE.Mesh( this.floorGeometry, floorMaterial );
        this.wall = new THREE.Mesh( this.wallGeometry, wallMaterial );
        this.wallLeft = new THREE.Mesh( this.wallLeftGeometry, wallsMaterial );
        this.wallRight = new THREE.Mesh( this.wallRightGeometry, wallsMaterial );

        this.wall.receiveShadow = true
        this.wall.castShadow = true
        this.floor.receiveShadow = true
        this.floor.castShadow = true

        this.wall.position.set(0, (this.height)/2 ,0)
        this.wallLeft.position.set(-(this.width)/2, (this.height)/2 , (this.depth)/2)
        this.wallRight.position.set((this.width)/2,(this.height)/2,(this.depth)/2 )
        this.floor.position.set(0,0, (this.depth)/2)

        this.floor.rotation.x = -Math.PI/2
        this.wallLeft.rotation.y = Math.PI/2
        this.wallRight.rotation.y = -Math.PI/2

        this.scene.add(this.floor)
        this.scene.add(this.wall)
        this.scene.add(this.wallLeft)
        this.scene.add(this.wallRight)

        this.objects.push(this.floor, this.wall, this.wallLeft, this.wallRight);
    }

    updateSizes(w,h,d){

        this.objects.forEach(obj => {
            this.scene.remove(obj);
            obj.geometry.dispose();
        });
        this.objects = [];

        this.width = w
        this.depth = d
        this.height = h
        this.createRoom()
        KitchenConfig.depth = this.depth
        KitchenConfig.width = this.width
        KitchenConfig.height = this.height
        console.log(KitchenConfig)
    }

}














