
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { SceneManager } from "./src/scene"
import {BoxObj} from "./src/box.js"
import { Light } from './src/light.js'
import { CabinetBuilder } from './src/CabinetBuilder.js'
import { Room } from './src/room.js'
import { UiControls } from './src/ui.js'
import { Cabinet } from './src/cabinet.js'

import { boxMaterial, tableTopMaterial } from './src/materials.js'


const Studio = new SceneManager
const light = new Light()

light.addToScene(Studio.scene)

const room = new Room(30, 25, 30, Studio.scene)

room.updateSizes(30,25,30)

const builder = new CabinetBuilder(Studio.scene)

const uiControls = new UiControls(room, builder, Studio)
//uiControls.start()





let cabinets = []



const cabinet1 = new Cabinet(Studio.scene)
const cabinet2 = new Cabinet(Studio.scene)
 cabinet2.setPosition(-5,0,15)

cabinets.push(cabinet1,cabinet2)
console.log(cabinets)

uiControls.raycaster(cabinets, room.floor)

// cabinet1.setPosition(5,0,15)




//cabinet1.setRotation(2)























  














