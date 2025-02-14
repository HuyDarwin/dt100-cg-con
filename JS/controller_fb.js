import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {
        //

        const db = getDatabase();

        //

        var MAX_QS = 50;

        var questions = [];

        var question_now = 0;
      
        var option = 0;

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
      
        $('button [name="autoname_class"]').click(function(){
          var bid = this.class;
          update(ref(db), { [bid] : 1 })
        })
      
        $('button [name="autoname"]').click(function(){
          var bid = this.id;
          update(ref(db), { [bid] : 1 })
        })
      
        function ResetQuestion() {
          upd("q_type", "");
          upd("option_a_name", "");
          upd("option_b_name", "");
          upd("option_a_img", "");
          upd("option_b_img", ""); 
          upd("difficulty", "");
          upd("question", "");
          upd("answer_a", "");
          upd("answer_b", "");
          upd("answer_c", "");
          upd("correct_ans", "");
          upd("note", "");
        }
      
        function Init(){
          remove(ref(db));
          $('button').attr("disabled","true");
          $('.reload').removeAttr("disabled");
          $('.q-submit').removeAttr("disabled");

          upd("question_now", 0);
          
          ResetQuestion();
        }

        function UpdateData (index) {
          if (question_now < 1 || question_now > 50) return;

          var r = question_now - 1;

          if (index == 1) {
            upd("q_type", questions[r].Type);
            
            var type = questions[r].Type;
            if(type == 1) {
              upd("option_a_name", questions[r].One_Name);              
            }
            else if(type == 2) {
              upd("option_a_name", questions[r].One_Name);
              upd("option_a_img", questions[r].One_Img);
            }
            else if(type == 3) {
              upd("option_a_name", questions[r].One_Name);
              upd("option_b_name", questions[r].Two_Name);
            }
            else if(type == 4) {
              upd("option_a_name", questions[r].One_Name);
              upd("option_b_name", questions[r].Two_Name);
              upd("option_a_img", questions[r].One_Img);
            }
            else if(type == 5) {
              upd("option_a_img", questions[r].One_Img);
              upd("option_b_img", questions[r].Two_Img);
            }
            else if(type == 6) {
              upd("option_a_name", questions[r].One_Name);
              upd("option_b_name", questions[r].Two_Name);
              upd("option_a_img", questions[r].One_Img);
              upd("option_b_img", questions[r].Two_Img);
            }
          }
          else if (index == 2) {
            upd("choose_option", option);
            
            if (option == 1) {
              upd("difficulty", questions[r].One_Difficulty);
              upd("question", questions[r].One_Question);
              upd("answer_a", questions[r].One_AnswerA);
              upd("answer_b", questions[r].One_AnswerB);
              upd("answer_c", questions[r].One_AnswerC);
            }
            else if (option == 2) {
              upd("difficulty", questions[r].Two_Difficulty);
              upd("question", questions[r].Two_Question);
              upd("answer_a", questions[r].Two_AnswerA);
              upd("answer_b", questions[r].Two_AnswerB);
              upd("answer_c", questions[r].Two_AnswerC);              
            }
          }
          else if (index == 3) {
            if (option == 1) {
              upd("correct_ans", questions[r].One_CorrectAns);
              upd("note", questions[r].One_Note);
            }
            else if (option == 2) {
              upd("correct_ans", questions[r].Two_CorrectAns);
              upd("note", questions[r].Two_Note);              
            }
          }
        }
      
        function NextQuestionAndReset(){
          ResetQuestion();
          
          if (question_now < 50) {
            question_now++;
            upd('question_now', question_now);
            UpdateData(1);
          }
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
                  Two_Note: sheet['D' + (last + 11)].v
                });
            }

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
            }

            question_now = 1;
            upd('question_now', question_now);
            UpdateData(1);

            enb(".c-reveal"); 
          };   

          reader.readAsArrayBuffer(file);
        });

        $(".q-submit").click(function(){
          question_now = parseInt($('.list-qs').val());
          upd('question_now', question_now);
          UpdateData(1);
          
          enb(".c-reveal");
        });

        $(".reload").click(function(){
          upd("reload", 1);
        });
      
      
      
        $(".c-reveal").click(function(){
          dib(".c-reveal");
          enb(".q-c-type");
        });
      
        $("#q-c-type-1").click(function(){
          option = 1;
          dib(".q-c-type");
          UpdateData(2);
          enb(".q-reveal");
        });

        //

        Init();

        //

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();

            if(data.question_now != undefined){
              $(".q-now").html("Câu hỏi hiện tại: " + data.question_now);
              $(".q-next").html("Câu hỏi tiếp theo: " + (data.question_now + 1));
            }
            else {
              $(".q-now").html("Câu hỏi hiện tại: ");
              $(".q-next").html("Câu hỏi tiếp theo: ");
            }
        });

    }(window.CONTROLLER = window.CONTROLLER || {}));
});