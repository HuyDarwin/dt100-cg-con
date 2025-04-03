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
          
            $(".damn text").removeAttr('textLength');
            console.log($(".damn").width() + " " + $(".damn #textline1").get(0).getBBox().width + " " + $(".damn #textline2").get(0).getBBox().width + " " + Math.min($(".damn").width(), Math.max($(".damn #textline1").get(0).getBBox().width, $(".damn #textline2").get(0).getBBox().width)));
            $(".damn text").attr('textLength', Math.min($(".damn").width(), Math.max($(".damn #textline1").get(0).getBBox().width, $(".damn #textline2").get(0).getBBox().width)));
            
        });
      
    }(window.CONTROLLER = window.CONTROLLER || {}));
});