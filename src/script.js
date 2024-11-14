import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"



// Scene
const scene = new THREE.Scene()

// Size
const sizes={
    width:window.innerWidth,
    height:window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(25,sizes.width/sizes.height,0.1,100)

camera.position.set(7,7,7)
scene.add(camera)



//  Renderer
const renderer=new THREE.WebGLRenderer({
    antialias:true
})
document.body.appendChild(renderer.domElement)
renderer.setSize(sizes.width,sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))

// Controls
const controls = new OrbitControls(camera,renderer.domElement)
controls.enableDamping=true


// Update
window.addEventListener("resize",()=>{
    // Update sizes
    sizes.width=window.innerWidth
    sizes.height=window.innerHeight

    // Update camera 
    camera.aspect=sizes.width/sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width,sizes.height)
    renderer.render(scene,camera)  
})
 

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );



// Animate

const clock = new THREE.Clock()

function animate(){

   cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    // Update controls
    controls.update()
    
    // Render
    renderer.render(scene,camera)
}

renderer.setAnimationLoop(animate)



