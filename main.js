enchant();


var map_aster;


Position = function(x, y){
    this.x = x;
    this.y = y;
}


/*
 * ばけもんに関する処理
 * A*アルゴリズムの本体は"./lib/aster.js"に
 */
 const MOVE_UP = 1;
 const MOVE_DOWN = 2;
 const MOVE_RIGHT = 3;
 const MOVE_LEFT = 4;

Monster = Class.create(Sprite, {
    initialize: function(x, y, target){
        Sprite.call(this, 32, 32);
        this.image = game.assets['./img/chara0.png'];
        this.frame = [7];
        this.x = x;
        this.y = y;
        this.speed = 3;
        this.target = target;
        this.current_x = Math.floor((this.x + 16) / 16);
        this.current_y = Math.floor((this.y + 32) / 16);
        this.old_move = 0;
    },
    tracking: function(){
        if(this.current_x == this.target_x && this.current_y == this.target_y){
            return;
        }
        if(this.old_target_x != this.target_x || this.old_target_y != this.target_y){
            var graph = new Graph(map_aster);
            var start = graph.grid[this.current_y][this.current_x];
            var end = graph.grid[this.target_y][this.target_x];
            this.shortestPath = astar.search(graph, start, end);
            if(this.shortestPath[0] == undefined){
                //console.log(start, end, "bug");
                return;
            }
            this.old_target_x = this.target_x;
            this.old_target_y = this.target_y;
            this.step = 0;
            this.next_x = this.shortestPath[this.step].y;
            this.next_y = this.shortestPath[this.step].x;
        }else{
            if(this.current_y == this.next_y && this.current_x == this.next_x){
                this.step++;
                if(this.step >= this.shortestPath.length){
                    console.log("step", this.step);
                    return;
                }
                this.next_x = this.shortestPath[this.step].y;
                this.next_y = this.shortestPath[this.step].x;
            }
        }


        if(this.current_y < this.next_y){
            this.y += this.speed;
            if(this.old_move !== MOVE_DOWN){
                this.old_move = MOVE_DOWN;
                this.frame = [7, 7, 6, 6, 7, 7, 8, 8];
            }
        }else if(this.current_y > this.next_y){
            this.y -= this.speed;
            if(this.old_move !== MOVE_UP){
                this.old_move = MOVE_UP;
                this.frame = [34, 34, 33, 33, 34, 34, 35, 35];
            }
        }

        if(this.current_x < this.next_x){
            this.x += this.speed;
            if(this.old_move !== MOVE_RIGHT){
                this.old_move = MOVE_RIGHT;
                this.frame = [25, 25, 24, 24, 25, 25, 26, 26];
            }
        }else if(this.current_x > this.next_x){
            this.x -= this.speed;
            if(this.old_move !== MOVE_LEFT){
                this.old_move = MOVE_LEFT;
                this.frame = [16, 16, 15, 15, 16, 16, 17, 17];
            }
        }
    },
    onenterframe: function(){
        this.current_x = Math.floor((this.x + 16) / 16);
        this.current_y = Math.floor((this.y + 32) / 16);
        this.target_x = Math.floor((this.target.x + 16) / 16);
        this.target_y = Math.floor((this.target.y + 32) / 16);
        this.tracking();
    },
});

/*
 * プレイヤーに関する処理
 */
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
        game.addEventListener('spacebuttondown', function(){
            console.log('spacebuttondown');
        });
    },
    setPos: function(x, y){
        this.x = x;
        this.y = y;
        this.frame = [4];
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
                case -1: this.y += this.speed; break;
                case  2: this.x -= this.speed;break;
                case -2: this.x += this.speed;break;
                case  1: this.y -= this.speed;break;
            }
        }
        //console.log(this.x, this.y);
    }
});

/*
 * マップの壁との衝突判定とA*のための配列の準備
 */
BreakFace_Map = Class.create(Map, {
    initialize: function(w, h, colData){
        Map.call(this, 16, 16);
        this.mapWidth = w;
        this.mapHeight = h;
        this.collisionData = colData;

        map_aster = new Array(this.mapHeight);
        for(i = 0; i < this.mapHeight; i++){
            map_aster[i] = new Array(this.mapWidth);
            for(j = 0; j < this.mapWidth; j++){
                if(colData[i][j] === 0){
                    map_aster[i][j] = 1;
                }else{
                    map_aster[i][j] = 0;
                }
            }
        }
    },
});


Map1_1 = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData1_1_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData1_1_0, mapData1_1_1);
        this.eventPos = {
            'A': new Position(0, 50),
            'B': new Position(450, 50),
            'C': new Position(0, 230),
            'D': new Position(450, 230),
        };
    }
});

Map1_2 = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData1_2_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData1_2_0, mapData1_2_1);
        this.eventPos = {
            'A': new Position(0, 50),
            'B': new Position(450, 50),
            'C': new Position(0, 230),
            'D': new Position(450, 230),
        };
    }
});

Map1_3 = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData1_3_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData1_3_0, mapData1_3_1);
        this.eventPos = {
            'A': new Position(0, 50),
            'B': new Position(450, 50),
            'C': new Position(0, 230),
            'D': new Position(450, 230),
        };
    }
});

Map1_4 = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData1_4_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData1_4_0, mapData1_4_1);
        this.eventPos = {
            'A': new Position(0, 50),
            'B': new Position(450, 50),
            'C': new Position(0, 230),
            'D': new Position(450, 230),
        };
    }
});

Map2_2 = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData2_2_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData2_2_0, mapData2_2_1);
        this.eventPos = {
            'A': new Position(0, 50),
            'B': new Position(450, 50),
            'C': new Position(0, 230),
            'D': new Position(450, 230),
        };
    }
});

Map2_3 = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData2_3_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData2_3_0, mapData2_3_1);
        this.eventPos = {
            'A': new Position(0, 50),
            'B': new Position(450, 50),
            'C': new Position(0, 230),
            'D': new Position(450, 230),
            'E': new Position(390, 0),
            'F': new Position(380, 280),
        };
    }
});

Map2_4 = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData2_4_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData2_4_0, mapData2_4_1);
        this.eventPos = {
            'A': new Position(0, 50),
            'B': new Position(450, 50),
            'C': new Position(0, 230),
            'D': new Position(450, 230),
        };
    }
});

/*
 * ゲーム本体のシーン
 */
BreakFace = Class.create(Scene, {
    initialize: function(){
        Scene.call(this);
        map = new Map1_1();
        player = new Player(300, 50);
        monster = new Monster(330, 208, player);
        this.addChild(map);
        this.addChild(player);
        this.addChild(monster);
    },
});

/*
 * ロード時に呼び出される関数
 */
window.onload = function () {
    game = new Game(480, 320);
    game.preload('./img/map0.png', './img/chara0.png', 'testbgm.mp3');

    game.onload = function () {
        game.keybind(' '.charCodeAt(0), 'space');

        scene_top = new Scene();
        label_title = new Label();
        label_title.x = 300;
        label_title.y = 50;
        label_title.scaleX = 2.0;
        label_title.scaleY = 2.0;
        label_title.text = "BREAK FACE";
        scene_top.addChild(label_title);

        /*if(game.assets['testbgm.mp3'].src){
            game.assets['testbgm.mp3'].play();
            game.assets['testbgm.mp3'].src.loop = true;
        }else{
            game.onenterframe = function(){
                game.assets['testbgm.mp3'].play();
            }
        }*/

        scene_top.addEventListener('touchend', function(){
            breakface = new BreakFace();
            game.pushScene(breakface);
        });

        game.pushScene(scene_top);
    };
    game.start();
};
