import * as THREE from 'three'
import KitchenConfig from "./KitchenConfig"

export class UiControls{
    constructor(room, builder, scene, floor){
        this.widthDomElement = document.getElementById('width')
        this.depthDomElement = document.getElementById('depth')
        this.heightDomElement = document.getElementById('height')

        // ВЫБОР КУХНИ
        this.directKitchen = document.getElementById('directKitchen')
        this.angleKitchen = document.getElementById('angleKitchen')
        this.doubleKitchen = document.getElementById('doubleKitchen')

        //базы для прямой кухни
        this.bottomblocks = document.getElementById('bottomblocks') // радио только нижние базы прямая кухня
        this.allblocks = document.getElementById('allblocks') // радио только верхние нижние базы прямая кухня

        this.caseCabinetL = document.getElementById('caseCabinetL') // радио пенал
        this.caseCabinetR = document.getElementById('caseCabinetR') // радио пенал

        //базы для угловая кухня
        this.angleBottom = document.getElementById('angleBottom') // только нижние
        this.angleRight = document.getElementById('angleRight') // право
        this.angleLeft = document.getElementById('angleLeft') // лево
        this.angleAll = document.getElementById('angleAll') // все

        //базы для п образной кухни
        this.doubleBottom = document.getElementById('doubleBottom') // только нижние
        this.doubleDirect = document.getElementById('doubleDirect') // низ + прямо
        this.doubleDirectLeft = document.getElementById('doubleDirectLeft') // низ прямо лево
        this.doubleDirectRight = document.getElementById('doubleDirectRight') // низ прямо право
        this.doubleDirectRightLeft = document.getElementById('doubleDirectRightLeft') // низ прямо лево право
        this.doubleRightLeft = document.getElementById('doubleRightLeft') // низ прямо право
        this.doubleAll = document.getElementById('doubleAll') // низ прямо право
      



        this.kitchenDirectBlocks = document.querySelector('.kitchenDirectBlocks')
        this.kitchenAngleBlocks = document.querySelector('.kitchenAngleBlocks')
        this.kitchenDoubleBlocks = document.querySelector('.kitchenDoubleBlocks')


        this.room = room
        this.builder = builder
        this.scene = scene
        this.floor = floor
    }

    start() {
        //размеры комнаты
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


        //радио добавить прямая кухня
        directKitchen.addEventListener('change', () => {
            if (directKitchen.checked) {
                ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                    this.scene.scene.children
                        .filter(element => element.name === name)
                        .forEach(element => this.scene.scene.remove(element));
                });
         
                    this.builder.addLevel1();
                    this.builder.addLevel2();
    
               KitchenConfig.direct.is = true
               KitchenConfig.direct.one = true
               KitchenConfig.direct.two = true

               this.kitchenDirectBlocks.style.display = 'block';
               this.kitchenAngleBlocks.style.display = 'none'
                       this.kitchenDoubleBlocks.style.display = 'none'
            }

            console.log(KitchenConfig)
            console.log(this.scene.scene.children)
            
        });
        

        //радио добавить угловая кухня
        angleKitchen.addEventListener('change', () => {
            ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                this.scene.scene.children
                    .filter(element => element.name === name)
                    .forEach(element => this.scene.scene.remove(element));
            });


            if (angleKitchen.checked) {
                this.builder.addLevel1()
                this.builder.addLevel2()
                
                this.builder.addLeftLevel1()
                this.builder.addLeftLevel2()
                
                this.kitchenDirectBlocks.style.display = 'none'
                this.kitchenAngleBlocks.style.display = 'block'
                   this.kitchenDoubleBlocks.style.display = 'none'

                KitchenConfig.angle.is = true
                KitchenConfig.angle.side1.one = true
                KitchenConfig.angle.side1.two = true

                console.log(this.scene.scene.children)
            }
        });

         //радио добавить п образная кухня
         doubleKitchen.addEventListener('change', () => {
            ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                this.scene.scene.children
                    .filter(element => element.name === name)
                    .forEach(element => this.scene.scene.remove(element));
            });


            if (doubleKitchen.checked) {
                this.builder.addLevel1()
                this.builder.addLevel2()
                
                this.builder.addLeftLevel1()
                this.builder.addLeftLevel2()

                this.builder.addRightLevel1()
                this.builder.addRightLevel2()

                this.kitchenDirectBlocks.style.display = 'none'
                this.kitchenAngleBlocks.style.display = 'none'
                this.kitchenDoubleBlocks.style.display = 'block'

            }
        });
        
  
        //оставить только нижние прямая кухня
        bottomblocks.addEventListener('change', () => {
            ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                this.scene.scene.children
                    .filter(element => element.name === name)
                    .forEach(element => this.scene.scene.remove(element));
            });
            if (bottomblocks.checked) {
                this.builder.addLevel1()
            }
        });

        //оставить все базы прямая кухня
       this.allblocks.addEventListener('change', () => {
            if (allblocks.checked) {
                const objectsToRemove = this.scene.scene.children.filter(element => element.name === 'DirectLower');

                objectsToRemove.forEach(element => {
                    this.scene.scene.remove(element);
                });
               this.builder.addLevel1()
            //   this.builder.addTabletop(30, 0.3, 5.3, 0, 8.15, 2.65, 0)
               this.builder.addLevel2()
           //    this.kitchenDirectBlocks.style.display = 'block';
            //   this.kitchenAngleBlocks.style.display = 'none'
            }
            console.log(this.scene.scene.children)
        });

        //оставить только нижние угловая 
        this.angleBottom.addEventListener('change', () => {
            if (angleBottom.checked) {

                ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                    this.scene.scene.children
                        .filter(element => element.name === name)
                        .forEach(element => this.scene.scene.remove(element));
                });

                this.builder.addLevel1()
                
                
                this.builder.addLeftLevel1()
                

              
           //    this.kitchenDirectBlocks.style.display = 'block';
            //   this.kitchenAngleBlocks.style.display = 'none'
            }
            console.log(this.scene.scene.children)
        });


        //правый пенал
        this.caseCabinetR.addEventListener('change', () => {
            if (caseCabinetR.checked) {
               
                const objectsToRemove = this.scene.scene.children.filter(element => element.userData.index === 4);

                objectsToRemove.forEach(element => {
                    this.scene.scene.remove(element);
                });

                this.builder.addCaseCabinet()
       
            }
            console.log(this.scene.scene.children)
        });


        //левый пенал
        this.caseCabinetL.addEventListener('change', () => {
            if (caseCabinetL.checked) {
               this.builder.addCaseCabinet()
            }
            console.log(this.scene.scene.children)
        });

        //угловая право
        angleRight.addEventListener('change', () => {
            ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                this.scene.scene.children
                    .filter(element => element.name === name)
                    .forEach(element => this.scene.scene.remove(element));
            });
            if (angleRight.checked) {
                this.builder.addLevel1()
                this.builder.addLevel2()
                this.builder.addLeftLevel1()
            }
        });

        //угловая лево
        angleLeft.addEventListener('change', () => {
            ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                this.scene.scene.children
                    .filter(element => element.name === name)
                    .forEach(element => this.scene.scene.remove(element));
            });
            if (angleLeft.checked) {
                this.builder.addLevel1()        
                this.builder.addLeftLevel1()
                this.builder.addLeftLevel2()
            }
        });

        //угловая все
        angleAll.addEventListener('change', () => {
            ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                this.scene.scene.children
                    .filter(element => element.name === name)
                    .forEach(element => this.scene.scene.remove(element));
            });
            if (angleAll.checked) {
                this.builder.addLevel1()
                this.builder.addLevel2()
                this.builder.addLeftLevel1()
                this.builder.addLeftLevel2()
            }
        });

        //п образная только нижние
        doubleBottom.addEventListener('change', () => {
            ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                this.scene.scene.children
                    .filter(element => element.name === name)
                    .forEach(element => this.scene.scene.remove(element));
            });
            if (doubleBottom.checked) {
                this.builder.addLevel1()             
                this.builder.addLeftLevel1()
                this.builder.addRightLevel1()      
            }
        });

          //п образная прямо 
          doubleDirect.addEventListener('change', () => {
            ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                this.scene.scene.children
                    .filter(element => element.name === name)
                    .forEach(element => this.scene.scene.remove(element));
            });
            if (doubleDirect.checked) {
                this.builder.addLevel1()
                this.builder.addLevel2()             
                this.builder.addLeftLevel1()
                this.builder.addRightLevel1()

               
            }
        });

           //п образная прямо + лево
           doubleDirectLeft.addEventListener('change', () => {
            ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                this.scene.scene.children
                    .filter(element => element.name === name)
                    .forEach(element => this.scene.scene.remove(element));
            });
            if (doubleDirectLeft.checked) {
                this.builder.addLevel1()
                this.builder.addLevel2()     
                this.builder.addLeftLevel1()
                this.builder.addLeftLevel2()
                this.builder.addRightLevel1()              
            }
        });

           //п образная прямо + лево
           doubleDirectRight.addEventListener('change', () => {
            ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                this.scene.scene.children
                    .filter(element => element.name === name)
                    .forEach(element => this.scene.scene.remove(element));
            });
            if (doubleDirectRight.checked) {
                this.builder.addLevel1()
                this.builder.addLevel2()        
                this.builder.addLeftLevel1()        
                this.builder.addRightLevel2()
                this.builder.addRightLevel1()
            }
        });


         //п образная прямо + лево
         doubleDirectRightLeft.addEventListener('change', () => {
            ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                this.scene.scene.children
                    .filter(element => element.name === name)
                    .forEach(element => this.scene.scene.remove(element));
            });
            if (doubleDirectRightLeft.checked) {
                this.builder.addLevel1()
                this.builder.addLevel2()
                this.builder.addLeftLevel1()
                this.builder.addLeftLevel2()
                this.builder.addRightLevel2()
                this.builder.addRightLevel1()
            }
        });

        doubleRightLeft.addEventListener('change', () => {
            ['AngleLowerLeft', 'AngleUpperLeft', 'DirectUpper', 'DirectLower'].forEach(name => {
                this.scene.scene.children
                    .filter(element => element.name === name)
                    .forEach(element => this.scene.scene.remove(element));
            });
            if (doubleRightLeft.checked) {
                this.builder.addLevel1()
                this.builder.addLeftLevel1()
                this.builder.addLeftLevel2()   
                this.builder.addRightLevel2()
                this.builder.addRightLevel1()

            }
        });
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