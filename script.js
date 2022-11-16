var h=0;
var min=0;
var s=0;
var ms=0;

var intervalMiliseconde;
var intervalSeconde;
var intervalMinute;
var intervalHeure;

function setMilisegonde(){
    if(ms==999)
    {
        ms=0;
    }
    ms+=1;
  document.getElementById('ms').innerHTML= ms + ' ms';
}
function setSeconde(){
    s+=1;
    if(s==59)
    {
        s=0;
    }
  document.getElementById('s').innerHTML= s + ' s';
}
function setMinute(){
    min+=1;
    if(min==59)
    {
        min=0;
    }
  document.getElementById('min').innerHTML= min+ ' min';
}
function setHeure(){
    
  h+=1;
    if(h==23)
    {
        h=0;
    }
  document.getElementById('h').innerHTML= h + ' h';
}

function start(){
   intervalHeure = setInterval(setHeure,3600000);
   intervalMinute = setInterval(setMinute,60000);
   intervalSeconde = setInterval(setSeconde,1000);
   intervalMiliseconde = setInterval(setMilisegonde,1);
}

function stop(){
    clearInterval(intervalHeure);;
    clearInterval(intervalMinute);
    clearInterval(intervalSeconde);
    clearInterval(intervalMiliseconde);
}

function reset(){
    stop();
      h=0;
      min=0;
      s=0;
      ms=0;

      document.getElementById('h').innerHTML='0 h';
      document.getElementById('min').innerHTML='0 min';
      document.getElementById('s').innerHTML='0 s';
      document.getElementById('ms').innerHTML='0 ms';

}

