import Movements from "./movements.js";

//declaration of a new scene with three.js
const scene = new THREE.Scene();
scene.background=new THREE.Color(0xbfd1e5);

//camera and renderer configuration
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//setting the scene lights
const ambient_light = new THREE.AmbientLight(0xbda355)
const direction_Light = new THREE.DirectionalLight(0xffffff,1);
ambient_light.add(direction_Light);
scene.add(ambient_light)

//Setting up a flat space of the metaverse
const geometry_space = new THREE.BoxGeometry(100,0.2,50);
const material_space = new THREE.MeshPhongMaterial({color:0xffffff});
const space = new THREE.Mesh(geometry_space,material_space);
scene.add(space);

//Geometricfigure to be represented in the Metaverse: cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

////Geometricfigure to be represented in the Metaverse: cone
const geometry_cone = new THREE.ConeGeometry( 5, 20, 32 );
const material_cone = new THREE.MeshPhongMaterial( {color: 0xed810a} );
const cone = new THREE.Mesh( geometry_cone, material_cone );
cone.position.set(-10,5,0);
scene.add( cone );

////Geometricfigure to be represented in the Metaverse: cylinder
const geometry_cylinder = new THREE.CylinderGeometry( 5, 5, 5, 32 );
const material_cylinder = new THREE.MeshPhongMaterial( {color: 0x0000ff} );
const cylinder = new THREE.Mesh( geometry_cylinder, material_cylinder);
cylinder.position.set(20, 5, 0);
scene.add( cylinder );


camera.position.set(10,5,40)

function animate() {
    cube.rotation.x +=0.05
    cube.rotation.y +=0.05

    cone.rotation.x +=0.01
    cone.rotation.y +=0.01
   
    cylinder.rotation.x +=0.05;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    //Movement to the left
    if (Movements.isPressed(37)){
        camera.position.x -=0.5;
    }
    //upward movement
    if (Movements.isPressed(38)){
        camera.position.x +=0.5;
        camera.position.y +=0.5;
    }
    //Movement to the rigth
    if (Movements.isPressed(39)){
        camera.position.x +=0.5;
    }
    //downward movement
    if (Movements.isPressed(40)){
        camera.position.x -=0.5;
        camera.position.y -=0.5;
    }

    camera.lookAt(space.position);
    renderer.render( scene, camera );
}
animate();






