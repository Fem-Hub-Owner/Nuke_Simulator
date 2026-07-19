let particles = [];


function createParticles(scene){

    for(let i=0;i<700;i++){

        let rock =
        Math.random() > .75;


        let mesh =
        new THREE.Mesh(

            rock ?

            new THREE.DodecahedronGeometry(
                Math.random()*.18+.05
            )

            :

            new THREE.SphereGeometry(
                Math.random()*.06+.02,
                8,
                8
            ),


            new THREE.MeshStandardMaterial({

                color:

                rock ?

                0x333333

                :

                Math.random()>.5
                ?0xffaa00
                :0xff3300,


                emissive:

                rock
                ?0x000000
                :0xff2200,


                emissiveIntensity:
                3

            })

        );



        mesh.position.set(
            0,
            3,
            0
        );



        mesh.velocity =
        new THREE.Vector3(

            (Math.random()-.5)*2,

            Math.random()*2,

            (Math.random()-.5)*2

        );



        mesh.velocity.multiplyScalar(
            Math.random()*10+3
        );


        mesh.gravity =
        Math.random()*.04+.02;



        scene.add(mesh);

        particles.push(mesh);

    }

}



function updateParticles(){

    particles.forEach(p=>{


        p.position.add(
            p.velocity.clone()
            .multiplyScalar(.02)
        );



        p.velocity.y -=
        p.gravity;



        p.velocity.multiplyScalar(
            .985
        );



        p.rotation.x += .04;

        p.rotation.y += .04;


    });

}
