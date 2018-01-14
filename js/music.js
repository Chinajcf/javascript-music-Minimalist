(function(global){
  var _info_ = {
    Author:"JCF",
    Version:"1.0.0",
    Time:"2018-01-12"
  }
  var defaults = {
    Dom:'<i id="playmusic" class="start"></i><select id="sel"></select><audio src="music/多幸运-韩安旭.mp3" autoplay></audio>',
  }
  function dataUrl(data){
    var div = document.createElement('div');
    var sel = document.getElementById('sel');
    var add_dom = document.getElementsByTagName("style")[0];
    div.className = "music";

    style(div,data,add_dom);
    div.innerHTML = defaults.Dom;
    document.body.appendChild(div);
    fun(div);
    arr(data);
  }
  function style(obj,data,add_dom){
    var css = '*{margin:0;padding:0;}.music>select{width:140px;margin-left:10px;border-radius:3px;border:1px solid #c3ced5;padding:4px;position:relative;bottom:6px;}.music>select:hover{box-shadow:0px 0px 3px #fff;}.music{background-size:100% 100%;background:url(img/music_bg.png) no-repeat 0 0;padding:5px;opacity:0.8;width:186px;height:28px;border-radius:5px;border:1px solid #c3ced5;}.start{background: url(img/music_start.png) no-repeat;background-size:100% 100%;display:inline-block;width:35px;height:27px;cursor:pointer;}.end{background: url(img/music_end.png) no-repeat;background-size:100% 100%;display:inline-block;width:35px;height:27px;cursor:pointer;}'
    var sty = add_dom ? document.head.appendChild(adddom) : document.head.appendChild(document.createElement('style'));
    sty.innerHTML = css;
    sty.innerHTML += data.posiTion.csstext;
  }
  var flag;
  function fun(){
    flag = true;
    var btn = document.getElementById('playmusic');
    var audio = document.getElementsByTagName('audio')[0];
    btn.onclick = function(){
      if(flag){
        audio.pause();
        flag = false;
          btn.className = ' end';
      }else{
        audio.play();
        flag = true;
        btn.className = ' start';
      }
    }
  }
  function arr(arr){
      for(var i=0;i<arr.music.length;i++){
        var opt = document.createElement('option');
        var musi = arr.music[i].slice(0,arr.music[i].indexOf('/')+1);
        var mu = arr.music[i].slice(arr.music[i].lastIndexOf('/')+1,arr.music[i].length);
        opt.innerHTML += mu;
        sel.appendChild(opt);
      }
      change(musi,arr);
  }
  function change(musi,arr){
    var btn = document.getElementById('playmusic');
    var audi = document.getElementsByTagName('audio')[0];
        sel.onchange = function(){
            audi.src = musi+this.value;
            btn.className = ' start';
            audi.play();
        }
  }
  global.music = global.JCF = dataUrl;
})(typeof window !== 'undefined' ? window : this);
