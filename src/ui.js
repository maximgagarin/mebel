import KitchenConfig from "./KitchenConfig"

export class UiControls{
    constructor(room, builder, scene){
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

                console.log(this.scene)
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
                console.log(this.scene)
            }
        });

        // bottomblocks.addEventListener('change', () => {
        //     if (bottomblocks.checked) {
            
        //         console.log('123')
        //     }
        // });
    }

    updateRoom(width, height, depth) {
        if (!isNaN(width) && !isNaN(height) && !isNaN(depth)) {
            this.room.updateSizes(width, height, depth);
          
        }
}


}