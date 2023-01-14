let config = {
    type: Phaser.CANVAS,
    width: 960,
    height: 720,

    scene: [ SceneOne, TaskOne, TaskTwo, Customers ]
}

//game declaration
let game = new Phaser.Game(config);

//reserve key vars
let keyLEFT, keyRIGHT, keyUP, keyDOWN, keySPACE, keyESC, keyC, keySHIFT, keyENTER, keyN, keyR;

let gamewidth= game.config.width;
let gameheight= game.config.height;
let borderUISize= game.config.height / 15;
let borderPadding = borderUISize / 3;
