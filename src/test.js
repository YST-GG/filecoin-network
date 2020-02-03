var camera, scene, renderer;
var geometry, material, mesh,Group;

init();
animate();
intModels();
function init(){
    camera = new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,0.01,10);
    camera.position.z = 1;
    scene = new THREE.Scene();
    geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
    material = new THREE.MeshNormalMaterial();
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
    sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 18, 12), material);
    scene.add(sphere);
    renderer = new THREE.WebGLRenderer({antialias:true,alpha:true} );
    renderer.setClearAlpha(0);
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild(renderer.domElement );

}

   function intModels(){
    var globeTextureLoader = new THREE.TextureLoader();
    globeTextureLoader.load('../assets/images/1.jpg',function (texture) {
    var globeGgeometry = new THREE.SphereGeometry(200,100,100);
    var globeMaterial = new THREE.MeshStandardMaterial({map: texture});
    var globeMesh = new THREE.Mesh(globeGgeometry, globeMaterial);
        scene.add(globeMesh);
  });
 }

function animate() {
    requestAnimationFrame(animate );
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    renderer.render( scene,camera);

}