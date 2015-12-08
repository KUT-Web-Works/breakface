# breakface
高知工科大学のサークル、KUT Web Worksが作成するホラーゲームです。  
__現在製作中!__

##ダウンロード
gitがインストールされているPCの任意のディレクトリ内で以下のコマンドを実行してください。  
`$git clone https://github.com/KUT-Web-Works/breakface.git`

##使用ライブラリ
以下のライブラリを使用させていただいてます。

* [enchant.js](http://enchantjs.com/ja/)
* [javascript-astar](https://github.com/bgrins/javascript-astar)

##画面遷移の編集箇所
* 各マップのmapPosとeventPos
  * mapPosは取りうる出口
  * eventPosはmapPosに対応する遷移後のプレイヤー位置
* ユーザ位置の確認方法
  * consoleより確認可能
* mapPosの見方
  * 第1引数に遷移後のマップ位置
  * 第2引数にx座標の最小値
  * 第3引数にx座標の最大値
  * 第4引数にy座標の最小値
  * 第5引数にy座標の最大値
  * 座標の値は大きめにとることでうまく行くことがある

