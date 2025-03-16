
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { SceneManager } from "./src/scene"

import { Light } from './src/light.js'
import { CabinetBuilder } from './src/CabinetBuilder.js'
import { Room } from './src/room.js'
import { UiControls } from './src/ui.js'
import { LowerCabinet } from './src/cabinets/LowerCabinet.js'
import { TableTop } from './src/cabinets/TableTop.js'


import { boxMaterial, tableTopMaterial } from './src/materials.js'


const Studio = new SceneManager
const light = new Light()

light.addToScene(Studio.scene)

const room = new Room(3, 2.5, 3, Studio.scene)

room.updateSizes(3,2.5,3)

const builder = new CabinetBuilder(Studio.scene)

const uiControls = new UiControls(room, builder, Studio)

uiControls.start()






// cabinets.push(cabinet1)

//uiControls.raycaster(cabinets, room.floor, room.wall)

// cabinet1.setPosition(5,0,15)




//cabinet1.setRotation(2)























  














