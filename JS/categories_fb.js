$.keyframe.define([
  {
    name: 'hide',
    '0%': {
      "opacity": "1",
      "scale": "1"
    },
    '100%': {
      "opacity": "0",
      "scale": "0"
    }
  }
]);

function ResetAllTypes(){
  $('.type').css('top','100%');
  
  $('.type-1 #easy').animate({"left":"-0.25%"}, 0);
  $('.type-1 #easy').resetKeyframe();
  $('.type-1 #hard').animate({"left":"49.75%"}, 0);
  $('.type-1 #hard').resetKeyframe();
}

function RevealType (type) {
  $('.type').css('top','100%');
  if(type==1){
    $('#type-1').animate({"top":"0%"}, 500);
  }
}

function ChooseOption (type, opt){
  if(type==1){
    if(opt==1){
      $('#type-1 #hard').playKeyframe({
        name: 'hide',
        duration: '0.25s',
        timingFunction: 'ease'
      })
      $('#type-1 #easy').animate({"left":"25%"}, 250);
    }
  }
}

/* Init */
ResetAllTypes();
setTimeout(function(){
  RevealType(1)
}, 500)
setTimeout(function(){
  ChooseOption(1,1)
}, 2000)

setTimeout(function(){
  ResetAllTypes();
}, 3500)
setTimeout(function(){
  RevealType(1)
}, 4500)
setTimeout(function(){
  ChooseOption(1,1)
}, 6000)