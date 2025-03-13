function  mouseMove (event){
    mouse.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );
   // console.log(mouse)
    raycaster.setFromCamera( mouse, SceneScene.camera );
   // box1.mesh.position.set(event.clientX, event.clientY, 2)
    const intersects = raycaster.intersectObjects( room, false );
    if ( intersects.length > 0 ) {
        const intersect = intersects[ 0 ];
        box1.mesh.position.copy(intersect.point);
        if((box1.mesh.position.z)-1 === wall.position.z-1)
        {
            box1.mesh.position.z = 19
        }

        if (intersect.object === floor) {
            box1.mesh.position.y =  box1.heightHalf // Чтобы не проваливался под пол
        }


        // if (intersect.object === wall  ) {
        //     box1.mesh.position.z =  19 // Чтобы не проваливался под пол
        // }
       console.log(box1.mesh.position.z)
       // console.log(wall.position.z)
        console.log((box1.mesh.position.z)-1)
       
        
      
    } 
}