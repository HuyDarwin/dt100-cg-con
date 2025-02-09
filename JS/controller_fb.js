import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
//

const db = getDatabase();

//

onValue(ref(db), (snapshot) => {
    const data = snapshot.val();

});

//

var MAX_QS = 50;

var questions = [];

var question_now = 0;

//

function upd(key, val) {
    update(ref(db), {
        [key]: val
    })
}

function enb(key) {
    $(key).removeAttr('disabled')
}

function dib(key) {
    $(key).attr('disabled', true);
}

//

$('.get-qs').on("change", function(e){
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var data = e.target.result;
    var workbook = XLSX.read(e.target.result);
    var sheet = workbook.Sheets[workbook.SheetNames[0]];

    questions = [];
    
    for(var i = 1; i <= MAX_QS; i++) {
        var last = 3 + (i - 1) * 12;
      
        questions.push({
          Type: sheet['B' + (last + 1)].v,
          
          One_Name: sheet['B' + (last + 2)].v,
          One_Img: sheet['B' + (last + 3)].v,
          One_Audio: sheet['B' + (last + 4)].v,
          One_Difficulty: sheet['B' + (last + 5)].v,
          One_Question: sheet['B' + (last + 6)].v.replace("++++", "<br />"),
          One_AnswerA: sheet['B' + (last + 7)].v,
          One_AnswerB: sheet['B' + (last + 8)].v,
          One_AnswerC: sheet['B' + (last + 9)].v,
          One_CorrectAns: sheet['B' + (last + 10)].v,
          One_Note: sheet['B' + (last + 11)].v,
          
          Two_Name: sheet['D' + (last + 2)].v,
          Two_Img: sheet['D' + (last + 3)].v,
          Two_Audio: sheet['D' + (last + 4)].v,
          Two_Difficulty: sheet['D' + (last + 5)].v,
          Two_Question: sheet['D' + (last + 6)].v.replace("++++", "<br />"),
          Two_AnswerA: sheet['D' + (last + 7)].v,
          Two_AnswerB: sheet['D' + (last + 8)].v,
          Two_AnswerC: sheet['D' + (last + 9)].v,
          Two_CorrectAns: sheet['D' + (last + 10)].v,
          Two_Note: sheet['D' + (last + 11)].v,
        })
    }
  };
  
  $(".list_qs").empty();
  
  for(var i = 0; i < questions.length; i++){
    var type = questions[i].Type;
    var text = "";
    if (type == 1) {
      text = "Khó dễ";
    }
    else if (type == 2) {
      text = "Khó dễ có hình ảnh";
    }
    else if (type == 3) {
      text = "2 chủ đề";
    }
    else if (type == 4) {
      text = "2 chủ đề có hình ảnh";
    }
    else if (type == 5) {
      text = "2 hình ảnh";
    }
    else if (type == 6) {
      text = "2 hình ảnh đính kèm chủ đề";
    }
    $(".list-qs").append('<option value="' + (i + 1) + '">' + (i + 1) + '. ' + text + '</option>');
    console.log(i)
  }
  question_now = 1;

  enb(".c-reveal");    
  
  reader.readAsArrayBuffer(file);
});

$(".q-submit").click(function(){
  question_now = $('.list-qs').val() - 1;
});

//

remove(ref(db));
$('button').attr("disabled","true");
$('.reload').removeAttr("disabled");
$('.q-submit').removeAttr("disabled");