import * as THREE from 'three'
import KitchenConfig from "./KitchenConfig"

export class UiControls{
    constructor(room, builder, scene, floor){
        this.widthDomElement = document.getElementById('width')
        this.depthDomElement = document.getElementById('depth')
        this.heightDomElement = document.getElementById('height')

        this.directKitchen = document.getElementById('directKitchen')
        this.angleKitchen = document.getElementById('angleKitchen')
        this.doubleKitchen = document.getElementById('doubleKitchen')

        this.bottomblocks = document.getElementById('bottomblocks') // радио только нижние базы

        this.kitchenDirectBlocks = document.querySelector('.kitchenDirectBlocks')
        this.kitchenAngleBlocks = document.querySelector('.kitchenAngleBlocks')

        this.room = room
        this.builder = builder
        this.scene = scene
        this.floor = floor

    }

    start() {
        this.widthDomElement.addEventListener('input', () => {
            let width = parseFloat(this.widthDomElement.value);
            this.updateRoom(width, this.room.height, this.room.depth);
        });

        this.depthDomElement.addEventListener('input', () => {
            let depth = parseFloat(this.depthDomElement.value);
            this.updateRoom(this.room.width, this.room.height, depth);
        });

        this.heightDomElement.addEventListener('input', () => {
            let height = parseFloat(this.heightDomElement.value);
            this.updateRoom(this.room.width, height, this.room.depth);
        });


        directKitchen.addEventListener('change', () => {
            if (directKitchen.checked) {
               this.builder.addLevel1()
               this.builder.addTabletop(30, 0.3, 5.3, 0, 8.15, 2.65, 0)
               this.builder.addLevel2()
               this.kitchenDirectBlocks.style.display = 'block';
               this.kitchenAngleBlocks.style.display = 'none'
            }
        });
        
        angleKitchen.addEventListener('change', () => {
            if (angleKitchen.checked) {
                this.builder.addLeftLevel1()
                this.builder.addLeftLevel2()
                this.kitchenDirectBlocks.style.display = 'none'
                this.kitchenAngleBlocks.style.display = 'block'
            }
        });
        
        doubleKitchen.addEventListener('change', () => {
            if (doubleKitchen.checked) {
                this.builder.addRightLevel1()
                this.builder.addRightLevel2()
                // this.scene.children.forEach(element => {
                //     if(element.name==='Level2'){
                //         this.scene.remove(element)
                //     }
                // });      
            }
        });

        // bottomblocks.addEventListener('change', () => {
        //     if (bottomblocks.checked) {
            
        //         console.log('123')
        //     }
        // });
    }

   

 

    raycaster(cabinets, floor, wall){
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        let selectedEl

        let offset = new THREE.Vector3();

        let originalPos 
        
        window.addEventListener('mousedown' , (event) =>{
           
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

           raycaster.setFromCamera(mouse, this.scene.camera);
           const intersects = raycaster.intersectObjects(cabinets);
           const intersectsFloor = raycaster.intersectObject(floor);

          
           if (intersects.length>0){
            this.scene.controls.enabled = false
                let intersected = intersects[0]
                selectedEl = intersected.object.parent   
                let intersectedFloor = intersectsFloor[0]
               
                let floorPoint = intersectedFloor.point
                let cabinetPoint = selectedEl.position

                offset.subVectors(cabinetPoint, floorPoint)
           }
           
        })
        

        window.addEventListener('mousemove', (event) => {
            if (selectedEl) {
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
                raycaster.setFromCamera(mouse, this.scene.camera);
                const intersectsFloor = raycaster.intersectObject(floor);
                const intersectsWall = raycaster.intersectObject(wall);


                if(intersectsWall.length > 0){
                    this.scene.controls.enabled = false;
                    let newPosition = intersectsWall[0].point.clone();
                    selectedEl.position.set(newPosition.x, newPosition.y, 0);
                }

        
                if (intersectsFloor.length > 0) {
                    this.scene.controls.enabled = false;
        
                    let newPosition = intersectsFloor[0].point.clone();
                    newPosition.add(offset);
        
                    let originalPos = selectedEl.position.clone(); // Делаем копию позиции
                    
        
                    let collision = false;
                    this.scene.scene.children.forEach(element => {
                        if (element.name === 'Cabinet' && element !== selectedEl) {
                            selectedEl.position.set(newPosition.x, 0, newPosition.z);
        
                            if (selectedEl.checkCollision(element)) {
                                collision = true;
                            }
                        }
                    });
        
                    if (collision) {
                        selectedEl.position.copy(originalPos); // Возвращаем старую позицию, если есть коллизия
                    } else {
                        originalPos.copy(newPosition); // Если перемещение допустимо, обновляем originalPos
                    }
        
                    selectedEl.userData.x = selectedEl.position.x;
                    selectedEl.userData.z = selectedEl.position.z;
                }
            }
        });

        window.addEventListener('mouseup' , (event) =>{
           if(selectedEl){
                selectedEl.position.x = selectedEl.userData.x
                selectedEl.position.z = selectedEl.userData.z

                selectedEl = null
                this.scene.controls.enabled = true
           }
        })
    }





    updateRoom(width, height, depth) {
        if (!isNaN(width) && !isNaN(height) && !isNaN(depth)) {
            this.room.updateSizes(width, height, depth);
          
        }
}


}