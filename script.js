const scene = new THREE.Scene();

scene.fog = new THREE.Fog(
    0x050505,
    30,
    150
);


const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);


const renderer = new THREE.WebGLRenderer({
    antialias:true
});


renderer.setSize(
    window.innerWidth,
    window.innerHeight
);


document.body.appendChild(
    renderer.domElement
);



// Camera

camera.position.set(
    0,
    12,
    30
);

camera.lookAt(
    0,
    3,
    0
);



// Lights

const ambient =
new THREE.AmbientLight(
    0x222222
);

scene.add(ambient);



const explosionLight =
new THREE.PointLight(
    0xff3300,
    0,
    300
);

explosionLight.position.y = 4;

scene.add(explosionLight);



// Ground

const ground =
new THREE.Mesh(

    new THREE.PlaneGeometry(
        150,
        150
    ),

    new THREE.MeshStandardMaterial({
        color:0x111111
    })

);


ground.rotation.x =
-Math.PI/2;


scene.add(ground);



// Fireball

const fireball =
new THREE.Mesh(

    new THREE.SphereGeometry(
        1,
        64,
        64
    ),

    new THREE.MeshStandardMaterial({

        color:0xff2200,

        emissive:0xff2200,

        emissiveIntensity:5

    })

);


fireball.position.y=3;

scene.add(fireball);



// Glow

const glow =
new THREE.Mesh(

    new THREE.SphereGeometry(
        1.2,
        32,
        32
    ),

    new THREE.MeshBasicMaterial({

        color:0xffaa00,

        transparent:true,

        opacity:.4

    })

);


glow.position.y=3;

scene.add(glow);



// Effects

createParticles(scene);

createSmoke(scene);

createShockwave(scene);

createHeat(scene);



// Button

let detonated=false;


document.getElementById("detonate").onclick=function(){


    if(detonated)
        return;


    detonated=true;


    explosionSound();


    setTimeout(
        rumbleSound,
        1500
    );


    explode();

};





function explode(){

    let size=.1;


    let timer=setInterval(()=>{


        size+=.18;


        fireball.scale.set(
            size,
            size,
            size
        );


        glow.scale.set(
            size*1.2,
            size*1.2,
            size*1.2
        );


        explosionLight.intensity += 5;



        if(size>6){

            clearInterval(timer);

            shakeCamera(4);

        }


    },16);

}




function animate(){

    requestAnimationFrame(
        animate
    );


    updateParticles();

    updateSmoke();

    updateEffects(camera);



    renderer.render(
        scene,
        camera
    );

}



animate();



window.addEventListener(
"resize",
()=>{


camera.aspect =
window.innerWidth /
window.innerHeight;


camera.updateProjectionMatrix();


renderer.setSize(
window.innerWidth,
window.innerHeight
);


});
