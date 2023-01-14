class TaskThree extends Phaser.Scene {
    constructor() {
      super("TaskThree");
    }
    preload(){
    
    }

    create() {
        this.add.text(20, 20, "Press Space to Cook the cake! Esc to go back!");
        
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && mixed){
            cooked=true;
           }

        if(Phaser.Input.Keyboard.JustDown(keyESC)){
            this.scene.start('SceneOne');
        }
    }
}