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
      
        var mob_left = 100;
        var total_money = 0;
      
        var mob_to_eli = 0;
        var mob_eli = 0;
        var eli_money = 0;
      
        var escape_25 = true;
        var escape_50 = true;
        var escape_75 = true;
      
        var escape_used = false;
        
        var show_money = true;
        var is_eli_showing = false;
      
        var chosen_ans = 0;
        var correct_ans = 0;

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
          
          show_money = true;
          mob_to_eli = 0;
          eli_money = 0;
          option = 0;
          chosen_ans = 0;
          correct_ans = 0;
          
          escape_used = false;
          upd("escape_used", false);
        }
      
        function Init(){
          remove(ref(db));
          $('button').attr("disabled","true");
          $('.reload').removeAttr("disabled");
          $('.q-submit').removeAttr("disabled");
          enb(".t-reveal");
          enb(".goodbye");

          upd("question_now", 0);
          upd("mob_left",100);
          upd("total_money",0);
          upd("mob_to_eli",0);
          upd("mob_eli",0);
          upd("eli_money",0);
          upd("escape_25",true);
          upd("escape_50",true);
          upd("escape_75",true);
          
          escape_used = false;
          upd("escape_used", false);
          
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
              upd("question", questions[r].One_Question);
              upd("answer_a", questions[r].One_AnswerA);
              upd("answer_b", questions[r].One_AnswerB);
              upd("answer_c", questions[r].One_AnswerC);
            }
            else if (option == 2) {
              upd("question", questions[r].Two_Question);
              upd("answer_a", questions[r].Two_AnswerA);
              upd("answer_b", questions[r].Two_AnswerB);
              upd("answer_c", questions[r].Two_AnswerC);              
            }
          }
          else if (index == 3) {
            if (option == 1) {
              upd("correct_ans", questions[r].One_CorrectAns);
              correct_ans = questions[r].One_CorrectAns;
              upd("note", questions[r].One_Note);
            }
            else if (option == 2) {
              upd("correct_ans", questions[r].Two_CorrectAns);
              correct_ans = questions[r].Two_CorrectAns;
              upd("note", questions[r].Two_Note);              
            }
          }
        }
      
        function NextQuestion(){
          if (question_now < 50) {
            question_now++;
            upd('question_now', question_now);
            UpdateData(1);
            enb(".c-reveal");
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
          dib("e-reveal");
          mob_eli = 0;
          upd("mob_eli", 0);
          
          upd("c_reveal", 1);
          dib(".c-reveal");
          enb(".q-c-type");
        });
      
        $("#q-c-type-1").click(function(){
          option = 1;
          dib(".q-c-type");
          UpdateData(2);
          enb(".q-reveal");
          $(".q-chosen").html("Đã chọn: Lựa chọn 1");
        });
      
        $("#q-c-type-2").click(function(){
          option = 2;
          dib(".q-c-type");
          UpdateData(2);
          enb(".q-reveal");
          $(".q-chosen").html("Đã chọn: Lựa chọn 2");
        });
      
        $(".q-reveal").click(function(){
          upd("q_reveal", 1);
          dib(".q-reveal");
          enb("#a-reveal-1");
        });
      
        $("#a-reveal-1").click(function(){
          upd("a_reveal_1", 1);
          dib("#a-reveal-1");
          enb("#a-reveal-2");
        });
      
        $("#a-reveal-2").click(function(){
          upd("a_reveal_2", 1);
          dib("#a-reveal-2");
          enb("#a-reveal-3");
        });
      
        $("#a-reveal-3").click(function(){
          upd("a_reveal_3", 1);
          dib("#a-reveal-3");
          enb(".mob-answer");
        });
      
        $(".mob-answer").click(function(){
          upd("mob_answer", 1);
          dib(".mob-answer");
          enb(".q-m-e-reveal");
        });
      
        $(".q-m-e-reveal").click(function(){
          upd("q_m_e_reveal", 1);
          dib(".q-m-e-reveal");
          enb(".a-choose");
          if (escape_25) {
            enb("#q-escape-25");
          }
          else if (escape_50) {
            enb("#q-escape-50");
          }
          else if (escape_75) {
            enb("#q-escape-75");
          }
        });
          
        $("#q-escape-25").click(function(){
          upd("escape_sfx",1);
          upd("escape_25",false);
          show_money = false;
          escape_25 = false;
          dib(".q-escape");
          $("#q-escape-25").css("color","purple");
          
          escape_used = true;
          upd("escape_used", true);
        });
          
        $("#q-escape-50").click(function(){
          upd("escape_sfx",1);
          upd("escape_50",false);
          show_money = false;
          escape_50 = false;
          dib(".q-escape");
          $("#q-escape-50").css("color","purple");
          
          escape_used = true;
          upd("escape_used", true);
        });
          
        $("#q-escape-75").click(function(){
          upd("escape_sfx",1);
          upd("escape_75",false);
          show_money = false;
          escape_75 = false;
          dib(".q-escape");
          $("#q-escape-75").css("color","purple");
          
          escape_used = true;
          upd("escape_used", true);
        });
      
        $("#a-choose-1").click(function(){
          UpdateData(3);
          dib(".a-choose, .q-escape");
          enb(".a-announce");
          
          chosen_ans = 1;
          upd("a_choose_1", 1);
          upd("lock_ans_sfx", 1);
        });
      
        $("#a-choose-2").click(function(){
          UpdateData(3);
          dib(".a-choose, .q-escape");
          enb(".a-announce");
          
          chosen_ans = 2;
          upd("a_choose_2", 1);
          upd("lock_ans_sfx", 1);
        });
      
        $("#a-choose-3").click(function(){
          UpdateData(3);
          dib(".a-choose, .q-escape");
          enb(".a-announce");
          
          chosen_ans = 3;
          upd("a_choose_3", 1);
          upd("lock_ans_sfx", 1);
        });
      
        $(".a-announce").click(function(){
          dib(".a-announce");
          enb(".q-hide");
          
          if (chosen_ans == correct_ans) {
            upd("right_ans_sfx", 1);
          }
          else {
            upd("wrong_ans_sfx", 1);
            if (chosen_ans == 1) {
              upd("a_wrong_1", 1);
            }
            else if(chosen_ans == 2) {
              upd("a_wrong_2", 1);
            }
            else if(chosen_ans == 3) {
              upd("a_wrong_3", 1);
            }
            
            if(escape_used == false){
              $(".goodbye").css("top","400px");
            }
          }
          
          
          if (correct_ans == 1) {
            upd("a_right_1", 1);
          }
          else if(correct_ans == 2) {
            upd("a_right_2", 1);
          }
          else if(correct_ans == 3) {
            upd("a_right_3", 1);
          }
        });
      
        $(".q-hide").click(function(){
          upd("q_hide", 1);
          dib(".q-hide");
          enb(".eliminate");
          if (show_money){
            enb(".e-reveal");
          }
        });
      
        $(".goodbye").click(function(){
          upd("goodbye", 1);
          $(".goodbye").css("top","4000px");
        });
      
        $(".e-reveal").click(function(){
          dib(".e-reveal");
          enb(".e-hide");
          is_eli_showing = true;
          
          upd("e_reveal",1);
        });
      
        $(".e-hide").click(function(){
          dib(".e-hide");
          is_eli_showing = false;
        });
      
        $(".t-reveal").click(function(){
          dib(".t-reveal");
          enb(".t-hide");
          if(is_eli_showing) {
            dib(".e-reveal");
            is_eli_showing = false;
          }
          
          upd("t_reveal",1);
        });
      
        $(".t-hide").click(function(){
          dib(".t-hide");
          enb(".t-reveal");
        });
      
        $(".eliminate").click(function(){
          mob_eli++;
          if (mob_eli >= mob_to_eli){
            mob_eli = mob_to_eli;
            dib(".eliminate");
            enb(".hide-eliminate");
          }          
        });
      
        $(".hide-eliminate").click(function(){
          dib(".hide-eliminate");
          upd("hide_eliminate",1);
          
          setTimeout(function(){
            ResetQuestion();
            NextQuestion();
            $(".q-chosen").html("Đã chọn: ");            
          }, 100);
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
          
            $(".question").html(data.question);
            $("#ans-text-a").html(data.answer_a);
            $("#ans-text-b").html(data.answer_b);
            $("#ans-text-c").html(data.answer_c);
            $(".ans-letter").css("color","purple");
            if(data.correct_ans == 1) {
              $("#ans-letter-a").css("color","green");
            }
            else if(data.correct_ans == 2) {
              $("#ans-letter-b").css("color","green");
            }
            else if(data.correct_ans == 3) {
              $("#ans-letter-c").css("color","green");
            }
          
            $(".mob-remain-p").html("Số người còn lại: " + data.mob_left);
            $(".mob-w-e-p").html("Số người sẽ bị loại: " + data.mob_to_eli);
            $(".money-add-p").html("Tiền thưởng nhận được: " + accounting.formatMoney(data.eli_money));
            $(".money-total-p").html("Tiền thưởng tổng cộng: " + accounting.formatMoney(data.total_money));
            $(".e-num").html(data.mob_eli);
        });

    }(window.CONTROLLER = window.CONTROLLER || {}));
});