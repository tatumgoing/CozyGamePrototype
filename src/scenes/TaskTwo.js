class TaskTwo extends Phaser.Scene {
    constructor() {
      super("TaskTwo");
    }
    preload(){
      this.load.image('milk', './assets/milk.png');
      this.load.image('mixing_bowl', './assets/mixing_bowl.png');
      this.load.image('mixing_table', './assets/mixing_table.png');
      this.load.image('flour', './assets/flour.png');
      this.load.image('eggs', './assets/eggs.png');
    }

    create() {
      //let current_scene = this;
      this.table = this.add.sprite(0, 0, 'mixing_table').setOrigin(0, 0).setInteractive();
      this.add.text(20, 20, "Drag ingredients into the bowl! Press space to mix the batter! Esc to go back!");
      this.mixing_bowl = this.add.sprite(700, 350,'mixing_bowl').setOrigin(.5, .5).setInteractive();
      this.milk = this.add.sprite(250, 400,'milk').setOrigin(.5, .5).setInteractive();
      this.eggs = this.add.sprite(300, 200,'eggs').setOrigin(.5, .5).setInteractive();
      this.flour = this.add.sprite(100, 250,'flour').setOrigin(.5, .5).setInteractive();
      
      
      let yoinked = null;
  
      //milk
      this.milk.on('pointerdown', function() {
        yoinked = this.milk;
      }, this);
      //eggs
      this.eggs.on('pointerdown', function() {
        yoinked = this.eggs;
      }, this);
      //flour
      this.flour.on('pointerdown', function() {
        yoinked = this.flour;
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
      if(this.collisioncheck(this.milk, this.mixing_bowl) || this.collisioncheck(this.eggs, this.mixing_bowl) 
            || this.collisioncheck(this.flour, this.mixing_bowl)) {
        console.log('ingredient in bowl');
      }

      if(Phaser.Input.Keyboard.JustDown(keySPACE) && ordered){
        console.log('mixed');
        mixed = true;
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