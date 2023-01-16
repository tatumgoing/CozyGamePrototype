class TaskFour extends Phaser.Scene {
    constructor() {
      super("TaskFour");
    }
    preload(){
        this.load.image('backgrounddeco', './assets/ComfyGame 3.png');
        this.load.image('textboxdeco', './assets/textbox_decorating.png');
    }

    create() {
        this.add.sprite(0, 0, "backgrounddeco").setOrigin(0, 0);
        this.textboxdeco= this.add.sprite(gamewidth/2, 450, "textboxdeco").setOrigin(0.5, 0.5);
        this.textboxdeco.alpha=0;

        this.add.text(20, 20, "Press Space to decorate the cake! Esc to go back!");

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && cooked){
            decorated=true;
           }
        if(textbox){
            this.textboxdeco.alpha=.75;
        }

        if(Phaser.Input.Keyboard.JustDown(keyESC)){
            this.scene.start('SceneOne');
        }
    }
}