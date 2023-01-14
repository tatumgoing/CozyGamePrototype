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
        this.cashier = this.add.sprite(0, 0, 'cashier').setOrigin(0, 0);
        this.cashier.scaleX= .75;
        this.cashier.scaleY= .75;
        this.decorating = this.add.sprite(0, 0, 'decorating').setOrigin(0, 0);
        this.decorating.scaleX= .75;
        this.decorating.scaleY= .75;
        this.mailing = this.add.sprite(0, 0, 'mailing').setOrigin(0, 0);
        this.mailing.scaleX= .75;
        this.mailing.scaleY= .75;
        this.mixing = this.add.sprite(0, 0, 'mixing').setOrigin(0, 0);
        this.mixing.scaleX= .75;
        this.mixing.scaleY= .75;
        this.oven = this.add.sprite(0, 0, 'ovens').setOrigin(0, 0);
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
    }
}