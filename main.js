enchant();
var game;
var scene_game;
window.onload = function () {
    game = new Game(480, 320);
    game.onload = function () {
        // 画像のプリロード
        //game.preload('map0.png', 'chara3.png');

        // メインメニューの表示
        var scene_main_menu = new Scene();
        scene_main_menu.backgroundColor = "pink";
        var label_title = new Label("BREAK FACE");
        label_title.x = 100;
        label_title.y = 50;
        scene_main_menu.addChild(label_title);
        var btn_start = new Button("START");
        btn_start.moveTo(150, 120);

        scene_game = new Scene();
        scene_game.backgroundColor = "green";

        btn_start.ontouchstart = function(){
            game.pushScene(scene_game);
            this.text = "ボタンを押しました";
        }
        scene_main_menu.addChild(btn_start);
        game.pushScene(scene_main_menu);
    };
    game.start();
}
