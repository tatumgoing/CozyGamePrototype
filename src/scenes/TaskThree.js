class TaskThree extends Phaser.Scene {
    constructor() {
      super("TaskThree");
    }
    preload(){
    
    }

    create() {
        this.add.text(20, 20, "This is the three task screen!");
        
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyESC)){
            this.scene.start('SceneOne');
        }
    }
}