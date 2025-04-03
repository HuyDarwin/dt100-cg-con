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
          
            $(".damn #textline1").html(data.textline1);
            $(".damn #textline2").html(data.textline2);
          
            $(".damn #textline1").removeAttr('textLength');
            $(".damn #textline2").removeAttr('textLength');
            var width1 = Math.min($(".damn #textline1").get(0).getBBox().width / $(".damn").width() * 100, 100);
            if (Math.max($(".damn #textline1").get(0).getBBox().width, $(".damn #textline2").get(0).getBBox().width) != 0) {
              width1 = Math.min(width1, $(".damn #textline1").get(0).getBBox().width * 100 / Math.max($(".damn #textline1").get(0).getBBox().width, $(".damn #textline2").get(0).getBBox().width));
            }
            var width2 = Math.min($(".damn #textline2").get(0).getBBox().width / $(".damn").width() * 100, 100);
            if (Math.max($(".damn #textline1").get(0).getBBox().width, $(".damn #textline2").get(0).getBBox().width) != 0) {
              width2 = Math.min(width2, $(".damn #textline2").get(0).getBBox().width * 100 / Math.max($(".damn #textline1").get(0).getBBox().width, $(".damn #textline2").get(0).getBBox().width));
            }
            $(".damn #textline1").attr("textLength", width1 + "%");
            $(".damn #textline2").attr("textLength", width2 + "%");
          
            if(data.textline2 == ""){
              $(".damn #textline1").attr("y", "42.5"); // (70 + 30 / 2) / 2
            }
            else{
              $(".damn #textline1").attr("y", "25"); // 42.5 - (30 / 2 + 2.5)
              $(".damn #textline2").attr("y", "60"); // 42.5 + (30 / 2 + 2.5)
            }
           
        });
      
    }(window.CONTROLLER = window.CONTROLLER || {}));
});