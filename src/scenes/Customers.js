class Customers extends Phaser.Scene {
    constructor() {
      super("Customers");
    }
    preload(){
      this.load.image('customerbg', './assets/ComfyGame.png');
      this.load.image('textboxcustomer', './assets/textbox_customer.png');

    }

    create() {
      this.background = this.add.sprite(0, 0, 'customerbg').setOrigin(0, 0).setInteractive();
      this.textboxcustomer = this.add.sprite(450, 30, 'textboxcustomer').setOrigin(0, 0).setInteractive();
      this.textboxcustomer.alpha=0;

      this.add.text(500, 20, "Press Space to Talk!");

      
      //keys
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

    }

    update() {
      if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
        textbox=true;
        this.textboxcustomer.alpha=1;
      }
      if(Phaser.Input.Keyboard.JustDown(keyESC)) {
        this.scene.start('SceneOne');
      }
    }
}