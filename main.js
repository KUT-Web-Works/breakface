enchant();
/*
window.onload = function() {
    var game = new Game(320, 320);
    game.fps = 20;
    game.preload('map0.png');
    game.onload = function() {
        var map = new Map(16, 16);
        map.image = game.assets['map0.png'];
        map.loadData(
            [
            [4, 4, 4, 4, 4, 4, 4],
            [4, 5, 5, 5, 5, 5, 4],
            [4, 5, 4, 5, 4, 5, 4],
            [4, 5, 5, 5, 5, 5, 4],
            [4, 5, 4, 5, 4, 5, 4],
            [4, 5, 5, 5, 5, 5, 4],
            [4, 4, 4, 4, 4, 4, 4]
            ]
        );
        game.rootScene.addChild(map);
    };
    game.start();
};*/


var mapData1 = [
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],

    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],

    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],

    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5],
    [ 5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5,      5,  5,  5,  5,  5,     5,  5,  5,  5,  5]
];



Player = Class.create(Sprite, {
    initialize: function(x, y){
        Sprite.call(this, 32, 32);
        this.image = game.assets['./img/chara0.png'];
        this.setPos(x, y);
        this.speed = 3;
        this.directionX = 0;
        this.directionY = 0
        this.movingFlag = false;
        this.direction = 1;
    },
    setPos: function(x, y){
        this.x = x;
        this.y = y;
        this.frame = [4];
        //this.enable();
    },
    enable: function(){
        this.flag = true;
    },
    disable: function(){
        this.flag = false;
    },
    onenterframe: function(){
        this.movingFlag = false;

        if(game.input.up){
            this.y -= this.speed;
            this.movingFlag = true;
            this.frame = [31, 30, 31, 32];
            this.direction = -1;
        }
        if(game.input.right){
            this.x += this.speed;
            this.movingFlag = true;
            this.frame = [22, 21, 22, 23];
            this.direction = 2;
        }
        if(game.input.left){
            this.x -= this.speed;
            this.movingFlag = true;
            this.frame = [13, 12, 13, 14];
            this.direction = -2;
        }
        if(game.input.down){
            this.y += this.speed;
            this.movingFlag = true;
            this.frame = [4, 3, 4, 5];
            this.direction = 1;
        }

        if(this.movingFlag == false){
            switch(this.direction){
                case -1: this.frame = [31]; break;
                case  2: this.frame = [22];break;
                case -2: this.frame = [13];break;
                case  1: this.frame = [4];break;
            }
        }
    }
});


BreakFace = Class.create({
    initialize: function(){
        map = new Map(16, 16);
        scene_game = new Scene();

        map.image = game.assets['./img/map0.png'];
        map.loadData(mapData1);

        player = new Player(50, 50);

        scene_game.addChild(map);
        scene_game.addChild(player);

        game.pushScene(scene_game);
    },
});


window.onload = function () {
    game = new Game(480, 320);
    game.preload('./img/map0.png', './img/chara0.png');

    game.onload = function () {
        game.keybind('s'.charCodeAt(0), 's');

        scene_top = new Scene();
        label_title = new Label();
        label_title.x = 300;
        label_title.y = 50;
        label_title.scaleX = 2.0;
        label_title.scaleY = 2.0;
        label_title.text = "BREAK FACE";
        scene_top.addChild(label_title);

        scene_top.addEventListener('touchend', function(){
            breakface = new BreakFace();
        });

        game.pushScene(scene_top);
    };
    game.start();
};
