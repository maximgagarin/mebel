const loader = new GLTFLoader();

loader.load( 'data/objects/polka1.glb', function ( gltf ) {

    let obj = gltf.scene
    obj.position.set(6,6,6)
    SceneScene.add(obj)
    console.log(gltf)

}, undefined, function ( error ) {

    console.error( error );

} );