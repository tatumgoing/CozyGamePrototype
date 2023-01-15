class TaskTwo extends Phaser.Scene {
    constructor() {
      super("TaskTwo");
    }
    preload(){
      this.load.image('batter', './assets/batter.png');
      this.load.image('mixing_bowl', './assets/mixing_bowl.png');
    }

    create() {
      //let current_scene = this;
      this.add.text(20, 20, "Press space to mix the batter! Esc to go back!");
      this.mixing_bowl = this.add.sprite(540, 350,'mixing_bowl').setOrigin(.5, .5).setInteractive();
      this.batter = this.add.sprite(100, 200,'batter').setOrigin(.5, .5).setInteractive();
      this.batter2 = this.add.sprite(150, 200,'batter').setOrigin(.5, .5).setInteractive();
      this.batter3 = this.add.sprite(100, 250,'batter').setOrigin(.5, .5).setInteractive();
      
      let yoinked = null;
  
      //batter
      this.batter.on('pointerdown', function() {
        yoinked = this.batter;
      }, this);
      //batter2
      this.batter2.on('pointerdown', function() {
        yoinked = this.batter2;
      }, this);
      //batter3
      this.batter3.on('pointerdown', function() {
        yoinked = this.batter3;
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
      //collision checking
      if(this.collisioncheck(this.batter, this.mixing_bowl) || this.collisioncheck(this.batter2, this.mixing_bowl) 
            || this.collisioncheck(this.batter3, this.mixing_bowl)) {
        console.log('ingredient in bowl');
      }

      if(Phaser.Input.Keyboard.JustDown(keySPACE) && ordered){
        console.log('mixed');
        mixed=true;
       }

      if(Phaser.Input.Keyboard.JustDown(keyESC)){
        this.scene.start('SceneOne');
       }
    }

    collisioncheck(ingredient, in_bowl) {
      if (ingredient.x+50 >= in_bowl.x && ingredient.x-50 <= in_bowl.x + in_bowl.width*.75 && 
        ingredient.y+50 >= in_bowl.y && ingredient.y-50 <= in_bowl.y + in_bowl.height*.75) {
        ingredient.alpha = 0;
      }

    }
}