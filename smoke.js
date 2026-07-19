let smokeParticles = [];


function createSmoke(scene){


    // Rising column

    for(let i=0;i<180;i++){


        let smoke =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                Math.random()*.5+.2,
                16,
                16
            ),


            new THREE.MeshStandardMaterial({

                color:0x111111,

                transparent:true,

                opacity:.35,

                roughness:1

            })

        );



        smoke.position.set(

            (Math.random()-.5)*2,

            Math.random()*8,

            (Math.random()-.5)*2

        );



        smoke.position.y -=1;



        smoke.speed =
        Math.random()*.03+.01;



        smoke.wind =
        Math.random()*.02;



        scene.add(smoke);

        smokeParticles.push(smoke);


    }




    // Mushroom cap

    for(let i=0;i<250;i++){


        let smoke =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                Math.random()*.8+.3,
                16,
                16
            ),


            new THREE.MeshStandardMaterial({

                color:0x080808,

                transparent:true,

                opacity:.4

            })

        );



        let angle =
        Math.random()*Math.PI*2;


        let radius =
        Math.random()*7;



        smoke.position.set(

            Math.cos(angle)*radius,

            7+Math.random()*2,

            Math.sin(angle)*radius

        );



        smoke.speed =
        Math.random()*.02;



        smoke.wind =
        Math.random()*.03;



        scene.add(smoke);

        smokeParticles.push(smoke);


    }


}




function updateSmoke(){


    smokeParticles.forEach(s=>{


        s.position.y +=
        s.speed;


        s.position.x +=
        s.wind;



        s.rotation.x += .005;

        s.rotation.y += .005;



        s.scale.multiplyScalar(
            1.0005
        );



        if(s.material.opacity>0){

            s.material.opacity -=
            .00025;

        }


    });


}
