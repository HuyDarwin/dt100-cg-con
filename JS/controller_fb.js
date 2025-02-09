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

//

remove(ref(db));
$('button').attr("disabled","true");
$('.reload').removeAttr("disabled");
$('.q-submit').removeAttr("disabled");
$('.c-reveal').removeAttr("disabled");

$('.get-qs').on("change", function(e){
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    var data = e.target.result;
    var workbook = XLSX.read(e.target.result);
    var sheet = workbook.Sheets[workbook.SheetNames[0]];

    questions = [];
    
    for(var i = 1; i <= MAX_QS; i++) {
        var last = 3 + (i - 1) * 11;
        questions.push({
          Difficulty: sheet['C' + i].v,
          Question: sheet['B' + i].v.replace("++++", "<br />"),
          AnswerA: sheet['C' + i].v,
          AnswerB: sheet['D' + i].v,
          AnswerC: sheet['E' + i].v,
          AnswerD: sheet['F' + i].v,
          AnsOrder1: sheet['G' + i].v,
          AnsOrder2: sheet['H' + i].v,
          AnsOrder3: sheet['I' + i].v,
          AnsOrder4: sheet['J' + i].v,
          Note: sheet['K' + i].v
        })
    }
  };
  reader.readAsArrayBuffer(file);
})