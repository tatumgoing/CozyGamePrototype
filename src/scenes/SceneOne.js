class SceneOne extends Phaser.Scene {
    constructor() {
      super("SceneOne");
    }
    preload(){
      this.load.image('player', './assets/player.png');

      this.load.image('order', './assets/order.png');
      this.load.image('batter', './assets/batter.png');
      this.load.image('cake', './assets/cake.png');
      this.load.image('decoratedcake', './assets/decorated_cake.png');

      this.load.image('shop', './assets/shop.png');
      this.load.image('cashier', './assets/cashier_hitbox.png');
      this.load.image('decorating', './assets/decorating_hitbox.png');
      this.load.image('mailing', './assets/mailing_hitbox.png');
      this.load.image('mixing', './assets/mixing_hitbox.png');
      this.load.image('ovens', './assets/ovens_hitbox.png');
    }

    create() {
        let current_scene = this;
        this.add.text(20, 20, "This is the main screen!");

        //kitchen + scaling
        this.shop = this.add.sprite(0, 0, 'shop').setOrigin(0, 0).setInteractive();
        this.shop.scaleX= .75;
        this.shop.scaleY= .75;
        
        this.cashier = this.add.sprite(920, 250, 'cashier').setOrigin(0, 0).setInteractive();
        this.cashier.scaleX= .75;
        this.cashier.scaleY= .75;
        this.cashier.on('pointerdown', function() {
          console.log("cashier click!");
          current_scene.scene.start('TaskOne');
        });

        this.decorating = this.add.sprite(350, 290, 'decorating').setOrigin(0, 0).setInteractive();
        this.decorating.scaleX= .75;
        this.decorating.scaleY= .75;
        this.decorating.on('pointerdown', function() {
          console.log("decorating click!");
          current_scene.scene.start('TaskFour');
        });

        this.mailing = this.add.sprite(0, 150, 'mailing').setOrigin(0, 0).setInteractive();
        this.mailing.scaleX= .75;
        this.mailing.scaleY= .75;
        this.mailing.on('pointerdown', function() {
          console.log("mailing click!");
          current_scene.scene.start('TaskTwo');
        });

        this.mixing = this.add.sprite(150, 585, 'mixing').setOrigin(0, 0).setInteractive();
        this.mixing.scaleX= .75;
        this.mixing.scaleY= .75;
        this.mixing.on('pointerdown', function() {
          console.log("mixing click!");
          current_scene.scene.start('TaskTwo');
        });

        this.oven = this.add.sprite(150, 0, 'ovens').setOrigin(0, 0).setInteractive();
        this.oven.scaleX= .75;
        this.oven.scaleY= .75;
        this.oven.on('pointerdown', function() {
          console.log("oven click!");
          current_scene.scene.start('TaskThree');
        });
        

        //player
        this.player = this.add.sprite(gamewidth/1.15, gameheight/2,'player').setOrigin(.5,.5);

        this.customer = this.add.sprite(gamewidth/0.9, gameheight/2,'player').setOrigin(.5,.5).setInteractive();
        this.customer.on('pointerdown', function() {
          console.log("customer click!");
          current_scene.scene.start('Customers');
        });

        //test click and drag
        let test = this.add.sprite(100, 200,'player').setOrigin(.5, .5).setInteractive();
        let yoinked = null;

        test.on('pointerdown', function() {
          yoinked = test;
        }, this);

        this.input.on('pointerup', function() {
          yoinked = null;
        }, this);

        this.input.on('pointermove', function(pointer) {
          if (yoinked != null) {
            yoinked.x = pointer.x + current_scene.cameras.main.centerX-(current_scene.cameras.main.displayWidth/2);
            yoinked.y = pointer.y + current_scene.cameras.main.centerY-(current_scene.cameras.main.displayHeight/2);
          }
        }, this);

        //cakethings
        this.order= this.add.sprite(gamewidth/1.15, gameheight/2-50,'order').setOrigin(.5,.5);
        this.batter= this.add.sprite(gamewidth/1.15, gameheight/2-50,'batter').setOrigin(.5,.5);
        this.cake= this.add.sprite(gamewidth/1.15, gameheight/2-50,'cake').setOrigin(.5,.5);
        this.dcake= this.add.sprite(gamewidth/1.15, gameheight/2-50,'decoratedcake').setOrigin(.5,.5);
        
        this.order.alpha=0;
        this.batter.alpha=0;
        this.cake.alpha=0;
        this.dcake.alpha=0;

        //camera
        this.cameras.main.setBounds(0, 0, this.shop.width, gameheight);
        this.cameras.main.startFollow(this.player);
        this.transitioned=false;

        //movement
        this.cursors = this.input.keyboard.createCursorKeys();
        this.speed=5;

        //keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

      }

    update() {

      //movement
      this.movingstuff(this.player);

      //checks to see if player is close enough to hitbox to trigger task

      if(this.collisioncheck(this.cashier)){
        console.log("cashier");
        this.atcashiertable=true;
        if(Phaser.Input.Keyboard.JustDown(keySPACE))
        {
          this.scene.start('TaskOne');
        }
      }
      else{
        this.atcashiertable=false;
      }
      if(this.collisioncheck(this.decorating)){
        // console.log("decorating");
        if(Phaser.Input.Keyboard.JustDown(keySPACE))
        {
          this.scene.start('TaskFour');
        }
      }
      if(this.collisioncheck(this.mixing)){
        // console.log("mixing");
        if(Phaser.Input.Keyboard.JustDown(keySPACE))
        {
          this.scene.start('TaskTwo');
        }
      }
      if(this.collisioncheck(this.oven)){
        // console.log("oven");
        if(Phaser.Input.Keyboard.JustDown(keySPACE))
        {
          this.scene.start('TaskThree');
        }
      }
      
      //pans the camera if the player is at the register and follows the player if theyre not
      if(this.atcashiertable){
        this.cameras.main.stopFollow(this.player);
        this.cameras.main.pan(
          gamewidth+200,
          gameheight/2,
          1000,
          'Sine.easeOut'
          );
          this.transitioned=true;
      }
      else if(this.transitioned){
        this.transitioned=false;
        this.cameras.main.startFollow(this.player,.5,.5);
      }

      //changes opactiy on cake items and makes it move with player
      if(ordered){
        this.order.alpha= 1;
        this.movingstuff(this.order);
      }
      if(mixed){
        this.batter.alpha= 1;
        this.movingstuff(this.batter);
      }
      if(cooked){
        this.cake.alpha= 1;
        this.movingstuff(this.cake);
      }
      if(decorated){
        this.dcake.alpha= 1;
        this.movingstuff(this.dcake);
      }

      //WASD Controlls
      // if (Phaser.Input.Keyboard.JustDown(keyA))
      // {
      //   this.player.x-=this.speed;
      // }
      // else if (Phaser.Input.Keyboard.JustDown(keyD))
      // {
      //   this.player.x+=this.speed;  
      // }
      // if (Phaser.Input.Keyboard.JustDown(keyW))
      // {
      //   this.player.y-=this.speed;  
      // }
      // else if (Phaser.Input.Keyboard.JustDown(keyS))
      // {
      //   this.player.y+=this.speed;  
      // }
     
    }

    collisioncheck(station) {
      if(this.player.x +50>= station.x && this.player.x-50 <= station.x +station.width*.75 && this.player.y +50 >= station.y && this.player.y-50<= station.y+ station.height*.75) {
        station.alpha= 1;
        return true;
      }
      else {
        station.alpha= .50;
        return false;
      }
    }

    movingstuff(thingy){
      if (this.cursors.left.isDown)
      {
        thingy.x-=this.speed;
      }
      else if (this.cursors.right.isDown && thingy.x< this.cashier.x-30)
      {
        thingy.x+=this.speed;  
      }
      if (this.cursors.up.isDown)
      {
        thingy.y-=this.speed;  
      }
      else if (this.cursors.down.isDown)
      {
        thingy.y+=this.speed;  
      }
    }
}