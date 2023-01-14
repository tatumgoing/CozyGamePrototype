class TaskTwo extends Phaser.Scene {
    constructor() {
      super("TaskTwo");
    }
    preload(){
    
    }

    create() {
        this.add.text(20, 20, "Press space to mix the batter! Esc to go back!");

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update() {
      if(Phaser.Input.Keyboard.JustDown(keySPACE) && ordered){
        mixed=true;
       }

      if(Phaser.Input.Keyboard.JustDown(keyESC)){
        this.scene.start('SceneOne');
       }
    }
}