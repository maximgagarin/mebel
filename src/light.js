import * as THREE from 'three'



export class Light {
    constructor() {
        // Ambient Light
        this.ambientLight = new THREE.AmbientLight('white',2);

        // Directional Light 1
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        this.directionalLight.castShadow = true;
        this.directionalLight.shadow.camera.left = -5;
        this.directionalLight.shadow.camera.right = 5;
        this.directionalLight.shadow.camera.top = 5;
        this.directionalLight.shadow.camera.bottom = -5;
        this.directionalLight.shadow.camera.near = 1;
        this.directionalLight.shadow.camera.far = 50;
        this.directionalLight.shadow.mapSize.width = 2048;
        this.directionalLight.shadow.mapSize.height = 2048;
        this.directionalLight.shadow.bias = -0.0005;
        this.directionalLight.position.set(1, 3, 2);

        // Directional Light Helper 1
        this.directionalLightHelper = new THREE.DirectionalLightHelper(this.directionalLight, 0.5);

        // Directional Light 2
        this.directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
        this.directionalLight2.position.set(1, 10, 1);

        // Directional Light Helper 2
        this.directionalLightHelper2 = new THREE.DirectionalLightHelper(this.directionalLight2, 0.5);

        // Spot Light
        this.spotLight = new THREE.SpotLight(0xffffff, 1);
        this.spotLight.position.set(1, 4, 3);
        this.spotLight.angle = Math.PI / 4;
        this.spotLight.penumbra = 0.6;
        this.spotLight.decay = 0.2;
        this.spotLight.distance = 13;
        this.spotLight.castShadow = true;

        // Spot Light Helper
        this.spotLightHelper = new THREE.SpotLightHelper(this.spotLight);
    }

    // Method to add all lights to the scene
    addToScene(scene) {
        scene.add(this.ambientLight);
       scene.add(this.directionalLight);
    //   scene.add(this.directionalLightHelper);
    //    scene.add(this.directionalLight2);
    //    scene.add(this.directionalLightHelper2);
        scene.add(this.spotLight);
     //   scene.add(this.spotLightHelper);
    }
}


