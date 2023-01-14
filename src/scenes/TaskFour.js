class TaskFour extends Phaser.Scene {
    constructor() {
      super("TaskFour");
    }
    preload(){
    
    }

    create() {
        this.add.text(20, 20, "Press Space to decorate the cake! Esc to go back!");

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && cooked){
            decorated=true;
           }

        if(Phaser.Input.Keyboard.JustDown(keyESC)){
            this.scene.start('SceneOne');
        }
    }
}