
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


