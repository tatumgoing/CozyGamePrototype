class TaskTwo extends Phaser.Scene {
    constructor() {
      super("TaskTwo");
    }
    preload(){
      this.load.image('batter', './assets/batter.png');
    }

    create() {
      //let current_scene = this;
      this.add.text(20, 20, "Press space to mix the batter! Esc to go back!");

      let batter = this.add.sprite(100, 200,'batter').setOrigin(.5, .5).setInteractive();
      
      let yoinked = null;
      
      //batter
      batter.on('pointerdown', function() {
        yoinked = batter;
      }, this);

      this.input.on('pointerup', function() {
        yoinked = null;
      }, this);

      this.input.on('pointermove', function(pointer) {
        if (yoinked != null) {
          yoinked.x = pointer.x;
          yoinked.y = pointer.y;
        }
      }, this);


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