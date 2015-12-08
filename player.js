/*
 * プレイヤーに関する処理
 */
Player = Class.create(Sprite, {
    initialize: function(x, y, next){
        Sprite.call(this, 32, 32);
        this.next = next.mapPos;
        this.pos = next.eventPos;
        this.image = game.assets['./img/chara0.png'];
        this.setPos(x, y);
        this.speed = 7;
        this.directionX = 0;
        this.directionY = 0
        this.movingFlag = false;
        this.direction = 1;
        game.addEventListener('spacebuttondown', function(){
            console.log('spacebuttondown');
        });
    },
    setPos:function(x, y){
        this.x = x;
        this.y = y;
        this.frame = [4];
    },
    judgeChengeMap: function() {
        console.log("hello map");
    },
    enable: function(){
        this.flag = true;
    },
    disable: function(){
        this.flag = false;
    },
    getCurrentPos: function(){
        var ret = new Position(this.x + 16, this.y + 16);
        return ret;
    },
    onenterframe: function(){
        this.movingFlag = false;

        if(!this.movingFlag){
            if(game.input.up){
                this.y -= this.speed;
                this.movingFlag = true;
                this.frame = [31, 31, 31, 30, 30, 30, 31, 31, 31, 32, 32, 32];
                this.direction = -1;
            }
        }
        if(!this.movingFlag){
            if(game.input.right){
                if(this.movingFlag) {
                    return;
                }
                this.x += this.speed;
                this.movingFlag = true;
                this.frame = [22, 22, 22, 21, 21, 21, 22, 22, 22, 23, 23, 23];
                this.direction = 2;
            }
        }
        if(!this.movingFlag){
            if(game.input.left){
                if(this.movingFlag) {
                    return;
                }
                this.x -= this.speed;
                this.movingFlag = true;
                this.frame = [13, 13, 13, 12, 12, 12, 13, 13, 13, 14, 14, 14];
                this.direction = -2;
            }
        }
        if(!this.movingFlag){
            if(game.input.down){
                this.y += this.speed;
                this.movingFlag = true;
                this.frame = [4, 4, 4, 3, 3, 3, 4, 4, 4, 5, 5, 5];
                this.direction = 1;
            }
        }

        if(this.movingFlag == false){
            switch(this.direction){
                case -1: this.frame = [31]; break;
                case  2: this.frame = [22];break;
                case -2: this.frame = [13];break;
                case  1: this.frame = [4];break;
            }
        }

        if (map.hitTest(this.x + 10, this.y + 20) ||                     // upper left
            map.hitTest(this.x + this.width - 10, this.y + 20) ||        // upper right
            map.hitTest(this.x + 10, this.y + this.height) ||            // lower left
            map.hitTest(this.x + this.width - 10, this.y + this.height)  // lower right
            === true) {
            switch(this.direction){
                case -1: this.y += this.speed;break;
                case  2: this.x -= this.speed;break;
                case -2: this.x += this.speed;break;
                case  1: this.y -= this.speed;break;
            }
        }
        
        console.log("x = " + this.x);
        console.log("y = " + this.y);

        console.log("left = " + this.next.A["left"]);

        if(this.next.A) {
            if(this.next.A["left"] < this.x  && this.x < this.next.A["right"]) {
                if(this.next.A["top"] < this.y && this.y < this.next.A["bottom"]) {
                  br = new BreakFace(this.next.A["mapData"], this.pos.A);
                  game.pushScene(br);
                }
            }
        }
        if(this.next.B) {
            if(this.next.B["left"] < this.x  && this.x < this.next.B["right"]) {
                if(this.next.B["top"] < this.y && this.y < this.next.B["bottom"]) {
                  br = new BreakFace(this.next.B["mapData"], this.pos.B);
                  game.pushScene(br);
                }
            }
        }
        if(this.next.C) {
            if(this.next.C["left"] < this.x  && this.x < this.next.C["right"]) {
                if(this.next.C["top"] < this.y && this.y < this.next.C["bottom"]) {
                  br = new BreakFace(this.next.C["mapData"], this.pos.C);
                  game.pushScene(br);
                }
            }
        }
        if(this.next.D) {
            if(this.next.D["left"] < this.x  && this.x < this.next.D["right"]) {
                if(this.next.D["top"] < this.y && this.y < this.next.D["bottom"]) {
                  br = new BreakFace(this.next.D["mapData"], this.pos.D);
                  game.pushScene(br);
                }
            }
        }
        if(this.next.E) {
            if(this.next.E["left"] < this.x  && this.x < this.next.E["right"]) {
                if(this.next.E["top"] < this.y && this.y < this.next.E["bottom"]) {
                  br = new BreakFace(this.next.E["mapData"], this.pos.E);
                  game.pushScene(br);
                }
            }
        }
    }
});

