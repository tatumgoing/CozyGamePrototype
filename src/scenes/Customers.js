class Customers extends Phaser.Scene {
    constructor() {
      super("Customers");
    }
    preload(){
    
    }

    create() {
      this.add.text(20, 20, "This is the customer interaction screen!");
      
      //keys
      keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

    }

    update() {
      if(Phaser.Input.Keyboard.JustDown(keyESC)) {
        this.scene.start('SceneOne');
      }
    }
}