class TaskOne extends Phaser.Scene {
    constructor() {
      super("TaskOne");
    }
    preload(){
    
    }

    create() {
        if(!decorated){
          this.add.text(20, 20, "Press space to collect the order! Esc to return to the kitchen!");
          this.add.text(20, 40, "Come back with the finished cake!");
        }
        else{
          this.add.text(20,20, "You did it!");
        }


        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    }

    update() {
      console.log(ordered);
      //replace with actual gameplay mechanics, updates global tracking variable when task has been accomplished 
      if(Phaser.Input.Keyboard.JustDown(keySPACE)){
        ordered=true;
       }

      if(Phaser.Input.Keyboard.JustDown(keyESC)){
        this.scene.start('SceneOne');
       }
    }
}