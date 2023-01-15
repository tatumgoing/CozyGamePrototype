class Customers extends Phaser.Scene {
    constructor() {
      super("Customers");
    }
    preload(){
    
    }

    create() {
        this.add.text(20, 20, "This is the customer interaction screen!");

    }

    update() {
      if(Phaser.Input.Keyboard.JustDown(keyESC)) {
        this.scene.start('SceneOne');
      }
    }
}