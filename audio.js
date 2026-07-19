let audioContext;
let masterGain;


function setupAudio(){

    audioContext =
    new (window.AudioContext ||
    window.webkitAudioContext)();


    masterGain =
    audioContext.createGain();


    masterGain.gain.value = 0.3;

    masterGain.connect(
        audioContext.destination
    );

}



function explosionSound(){

    if(!audioContext)
        setupAudio();


    let oscillator =
    audioContext.createOscillator();


    let gain =
    audioContext.createGain();



    oscillator.type = "sawtooth";


    oscillator.frequency.setValueAtTime(
        80,
        audioContext.currentTime
    );


    oscillator.frequency.exponentialRampToValueAtTime(
        20,
        audioContext.currentTime + 3
    );



    gain.gain.setValueAtTime(
        1,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 4
    );



    oscillator.connect(gain);

    gain.connect(masterGain);


    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 4
    );

}




function rumbleSound(){

    if(!audioContext)
        setupAudio();


    let oscillator =
    audioContext.createOscillator();


    let gain =
    audioContext.createGain();


    oscillator.type="sine";


    oscillator.frequency.value=30;


    gain.gain.value=.5;



    oscillator.connect(gain);

    gain.connect(masterGain);



    oscillator.start();


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime+5
    );


    oscillator.stop(
        audioContext.currentTime+5
    );

}
