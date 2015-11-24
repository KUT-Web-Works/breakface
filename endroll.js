function endroll(){
  game.pushScene(createEndingScene());
}

function createEndingScene() {
    var scene = new Scene();
    /*背景を生成*/
    var backEntity = new Entity();
    backEntity.width = 320;
    backEntity.height = 320;
    backEntity.backgroundColor = "black";
    backEntity.opacity = 0.4;
    scene.addChild(backEntity);
    
    var aryText = ["Presents","KUTWebWorks",
                   "Producer","Fumiya Kawamura",
                   "Director","Takahumi Kataoka",
                   "Scenario","Ayato Kasutani",
                   "Programming","Fumiya Kawamura","Takahumi Kataoka","Ayato Kasutani","Kousuke Matsumoto","Kouki Hamaguti","Yuki Sawamura","Yuria Ujihara",
                   "Design","enchant.js material","Yuki Sawamura",
                   "Publicist","Tetsurou Murase","Naoto Maekawa",
                   "Music","a"];
    var aryY = [0,30,90,120,180,210,270,300,360,390,420,450,480,510,540,570,630,660,690,750,780,810,870,900];
    var dispY = 0;
    var aryObj = new Array(aryText.length);
   
    for (var i=0; i<aryObj.length; i++) {
       aryObj[i] = new EndingLabel(0, dispY);
       aryObj[i].text = aryText[i];
       aryObj[i].addEventListener(Event.ENTER_FRAME,function(){this.y-=2;});
       aryObj[i].y = aryY[i] + 350;
       scene.addChild(aryObj[i]);
    }

    return scene;
}

EndingLabel = Class.create(Label,{
    initialize:function(x,y){
	enchant.Label.call(this,"");
	this.x = x;
	this.y = y;
	this.textAlign = 'center';
	this.font = "20px monospace";
	this.color = "rgb(255, 255, 255)";
    }
});

/*function hello(){
    console.log("hello");
}*/