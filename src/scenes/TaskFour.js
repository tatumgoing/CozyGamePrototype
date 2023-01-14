class TaskFour extends Phaser.Scene {
    constructor() {
      super("TaskFour");
    }
    preload(){
    
    }

    create() {
        this.add.text(20, 20, "This is the fourth task screen!");

        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyESC)){
            this.scene.start('SceneOne');
        }
    }
}