function ResetAllTypes(){
  $('.type').css('top','100%');
  
  $('.type-1 #easy').css('left', '-0.25%');
  $('.type-1 #hard').css('left', '49.75%');
}

function RevealType (type) {
  $('.type').css('top','100%');
  if(type==1){
    $('#type-1').animate({"top":"0%"},500);
  }
}

/* Init */
ResetAllTypes();
setTimeout(function(){
  RevealType(1)
}, 500)