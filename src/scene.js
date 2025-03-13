import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
//export const controls = new OrbitControls(camera, renderer.domElement)

export const axesHelper = new THREE.AxesHelper(30);




export class SceneManager {
    constructor() {
        this.scene = new THREE.Scene();
        
        this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 20, 60);
        
        
        this.targetPosition = new THREE.Vector3(1, 5, 1);
        this.camera.lookAt(this.targetPosition);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Мягкие тени

        this.renderer.setClearColor(0xf7f9fc, 1) // фон
        
        this.container = document.getElementById('render');
        this.container.appendChild(this.renderer.domElement);
        
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

       
        this.controls.target.copy(this.targetPosition);
        this.controls.update();

        this.animate = this.animate.bind(this);
        this.animate();

        this.scene.add(new THREE.AxesHelper(5)); 
    }


    addObject(object){
        this.scene.add(object.mesh)
    }

    add(obj){
        this.scene.add(obj)
    }
   

    animate(){
       requestAnimationFrame(this.animate);
      
       this.renderer.render(this.scene, this.camera);
    }
}

