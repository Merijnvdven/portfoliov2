var object = document.getElementById('item');

object.onclick=function(){
  var x = Math.floor(Math.random()*450);
  var y = Math.floor(Math.random()*850);
  object.style.top = x + 'px';
  object.style.left = y + 'px';
};