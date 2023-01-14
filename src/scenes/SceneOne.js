class SceneOne extends Phaser.Scene {
    constructor() {
      super("SceneOne");
    }
    preload(){
      this.load.image('player', './assets/player.png');

      this.load.image('shop', './assets/shop.png');
      this.load.image('cashier', './assets/cashier_hitbox.png');
      this.load.image('decorating', './assets/decorating_hitbox.png');
      this.load.image('mailing', './assets/mailing_hitbox.png');
      this.load.image('mixing', './assets/mixing_hitbox.png');
      this.load.image('ovens', './assets/ovens_hitbox.png');
    }

    create() {
        this.add.text(20, 20, "This is the main screen!");

        //kitchen + scaling
        this.shop = this.add.sprite(0, 0, 'shop').setOrigin(0, 0);
        this.shop.scaleX= .75;
        this.shop.scaleY= .75;
        this.cashier = this.add.sprite(920, 250, 'cashier').setOrigin(0, 0);
        this.cashier.scaleX= .75;
        this.cashier.scaleY= .75;
        this.decorating = this.add.sprite(350, 290, 'decorating').setOrigin(0, 0);
        this.decorating.scaleX= .75;
        this.decorating.scaleY= .75;
        this.mailing = this.add.sprite(0, 150, 'mailing').setOrigin(0, 0);
        this.mailing.scaleX= .75;
        this.mailing.scaleY= .75;
        this.mixing = this.add.sprite(150, 585, 'mixing').setOrigin(0, 0);
        this.mixing.scaleX= .75;
        this.mixing.scaleY= .75;
        this.oven = this.add.sprite(150, 0, 'ovens').setOrigin(0, 0).setInteractive();
        this.oven.scaleX= .75;
        this.oven.scaleY= .75;

        //player
        this.player= this.add.sprite(gamewidth/1.15, gameheight/2,'player').setOrigin(.5,.5);

        //camera
        this.cameras.main.setBounds(0, 0, this.shop.width, gameheight);
        this.cameras.main.startFollow(this.player);

        //movement
        this.cursors = this.input.keyboard.createCursorKeys();
        this.speed=5;

        //mouse
        this.isClicking = false;
        this.oven.on('pointerdown', function() {
          console.log("click! switch to task one");
        });

        //keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

      }

    update() {
      //movement
      if (this.cursors.left.isDown)
      {
        this.player.x-=this.speed;
      }
      else if (this.cursors.right.isDown)
      {
        this.player.x+=this.speed;  
      }
      if (this.cursors.up.isDown)
      {
        this.player.y-=this.speed;  
      }
      else if (this.cursors.down.isDown)
      {
        this.player.y+=this.speed;  
      }

      // if (this.isClicking = true) {
      //   this.isClicking = false;
        
      //   //this.scene.start('TaskOne');
      // }

      //popup check

      if(this.collisioncheck(this.cashier)){
        console.log("cashier");
        if(Phaser.Input.Keyboard.JustDown(keySPACE))
        {
          this.scene.start('TaskOne');
        }
      }
      if(this.collisioncheck(this.decorating)){
        console.log("decorating");
        if(Phaser.Input.Keyboard.JustDown(keySPACE))
        {
          this.scene.start('TaskTwo');
        }
      }
      if(this.collisioncheck(this.mixing)){
        console.log("mixing");
        if(Phaser.Input.Keyboard.JustDown(keySPACE))
        {
          this.scene.start('TaskThree');
        }
      }
      if(this.collisioncheck(this.oven)){
        console.log("oven");
        if(Phaser.Input.Keyboard.JustDown(keySPACE))
        {
          this.scene.start('TaskFour');
        }
      }
     
    }

    collisioncheck(station) {
      if(this.player.x>= station.x - this.player.width/2 && this.player.x <= station.x +station.width && this.player.y >= station.y - this.player.height/2 && this.player.y <= station.y+ station.height) {
        return true;
      }
      else {
        return false;
      }
    }
}