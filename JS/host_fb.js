import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {
        //

        const db = getDatabase();

        // Variables

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

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();

            if(data.reload == 1) {
              location.reload();
              upd("reload", 0);
            }
          
            if(data.q_type == 1) {
              $(".type").html("Loại câu hỏi: Khó dễ");
            }
            else if(data.q_type == 2) {
              $(".type").html("Loại câu hỏi: Khó dễ có hình ảnh");
            }
            else if(data.q_type == 3) {
              $(".type").html("Loại câu hỏi: 2 chủ đề");
            }
            else if(data.q_type == 4) {
              $(".type").html("Loại câu hỏi: 2 chủ đề có hình ảnh");
            }
            else if(data.q_type == 5) {
              $(".type").html("Loại câu hỏi: 2 hình ảnh");
            }
            else if(data.q_type == 6) {
              $(".type").html("Loại câu hỏi: 2 hình ảnh đính kèm chủ đề");
            }
            else {
              $(".type").html("Loại câu hỏi: ");
            }
          
            if(data.correct_ans == 1) {
              $(".right-ans").html("Đáp án đúng: A");
            }  
            else if(data.correct_ans == 2) {
              $(".right-ans").html("Đáp án đúng: B");
            }   
            else if(data.correct_ans == 3) {
              $(".right-ans").html("Đáp án đúng: C");
            }       
            else {
              $(".right-ans").html("Đáp án đúng: ");
            } 
          
            $(".note").html(data.note);
          
            $(".mob-remain-p").html(data.mob_left);
            $(".mob-w-e-p").html(data.mob_to_eli);
            $(".money-add-p").html(accounting.formatMoney(data.eli_money));
            $(".money-total-p").html(accounting.formatMoney(data.total_money));
            $(".mob-e-p").html(data.mob_eli);         
          
        });
      
    }(window.CONTROLLER = window.CONTROLLER || {}));
});