enchant();


var map_aster;


Position = function(x, y){
    this.x = x;
    this.y = y;
}

Transition = function(mapData, top, bottom, left, right){
    this.mapData = mapData;
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
}


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
        this.mapPos = {
            'A': new Transition(Map1_2, 0, 450, 0, 8),
            'B': new Transition(Map2_1, -30, 0, 0, 480),
        };
        this.eventPos = {
            'A': new Position(440, 135),
            'B': new Position(320, 20),
        };
    }
});

Map1_2 = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData1_2_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData1_2_0, mapData1_2_1);
        this.mapPos = {
            'A': new Transition(Map1_1, 0, 450, 440, 470),
            'B': new Transition(Map1_3, 0, 450, 0, 8),
        };
        this.eventPos = {
            'A': new Position(4, 135),
            'B': new Position(440, 135),
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
        this.mapPos = {
            'A': new Transition(Map1_2, 0, 450, 440, 470),
            'B': new Transition(Map1_4, 0, 450, 0, 8),
            'C': new Transition(Map2_3, 260, 450, 0, 470), 
        };
        this.eventPos = {
            'A': new Position(8, 135),
            'B': new Position(440, 135),
            'C': new Position(385, 255),
        };
    }
});

Map1_4 = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData1_4_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData1_4_0, mapData1_4_1);
        this.mapPos = {
            'A': new Transition(Map1_3, 0, 450, 440, 470),
            'B': new Transition(Map2_4, -30, 0, 0, 480),
            'C': new Transition(Map_B1, 260, 450, 0, 480),
        };
        this.eventPos = {
            'A': new Position(8, 135),
            'B': new Position(320, 15),
            'C': new Position(290, 135),
        };
    }
});

Map2_1 = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData2_1_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData2_1_0, mapData2_1_1);
        this.mapPos = {
            'A': new Transition(Map2_2, 0, 120, 0, 15),
            'B': new Transition(Map2_2, 140, 480, 0, 15),
            'C': new Transition(Map1_1, -30, 0, 300, 340),
        };
        this.eventPos = {
            'A': new Position(425, 55),
            'B': new Position(425, 232),
            'C': new Position(320, 20),
        };
    }
});

Map2_2 = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData2_2_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData2_2_0, mapData2_2_1);
        this.mapPos = {
            'A': new Transition(Map2_1, 0, 120, 430, 480),
            'B': new Transition(Map2_1, 140, 480, 430, 480),
            'C': new Transition(Map2_3, 0, 120, 0, 15),
            'D': new Transition(Map2_3, 140, 480, 0, 15),
        };
        this.eventPos = {
            'A': new Position(20, 55),
            'B': new Position(20, 232),
            'C': new Position(425, 55),
            'D': new Position(425, 232),
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

Map_B1 = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData_B1_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData_B1_0, mapData_B1_1);
        this.mapPos = {
            'A': new Transition(Map1_4, 0, 450, 300, 480),
        };
        this.eventPos = {
            'A': new Position(50, 255),
        };
    }
});
Map_clockTower = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData_clockTower_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData_clockTower_0, mapData_clockTower_1);
        this.eventPos = {
            'A': new Position(0, 50),
            'B': new Position(450, 50),
            'C': new Position(0, 230),
            'D': new Position(450, 230),
        };
    }
});

Map_exit = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData_exit_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData_exit_0, mapData_exit_1);
        this.eventPos = {
            'A': new Position(0, 50),
            'B': new Position(450, 50),
            'C': new Position(0, 230),
            'D': new Position(450, 230),
        };
    }
});

Map_lab = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData_lab_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData_lab_0, mapData_lab_1);
        this.eventPos = {
            'A': new Position(0, 50),
            'B': new Position(450, 50),
            'C': new Position(0, 230),
            'D': new Position(450, 230),
        };
    }
});

Map_kyomu = Class.create(BreakFace_Map, {
    initialize: function(){
        BreakFace_Map.call(this, 30, 20, mapData_kyomu_col);
        this.image = game.assets['./img/map0.png'];
        this.loadData(mapData_kyomu_0, mapData_kyomu_1);
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
    initialize: function(mapData, pos){
        Scene.call(this);
        map = new mapData;
        player = new Player(pos.x, pos.y, map);
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

        default_map = new Position(300, 50);
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
            breakface = new BreakFace(Map1_2, default_map);
            game.pushScene(breakface);
        });

        game.pushScene(scene_top);
    };
    game.start();
};
