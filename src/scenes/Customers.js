class Customers extends Phaser.Scene {
    constructor() {
      super("Customers");
    }
    preload(){
      this.load.image('customerbg', './assets/ComfyGame.png');

    }

    create() {
      this.background = this.add.sprite(0, 0, 'customerbg').setOrigin(0, 0).setInteractive();
      this.add.text(500, 20, "Press Space to Talk!");

      
      //keys
      keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

    }

    update() {
      if(Phaser.Input.Keyboard.JustDown(keyESC)) {
        this.scene.start('SceneOne');
      }
    }
}