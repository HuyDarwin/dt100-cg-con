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
          
            if(data.c_reveal == 1) {
              con.PlaySound("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/los_eindje_nadenken.mp3?v=1739630120173",2);
              upd("c_reveal", 0);
            }     
        });
        
      
    }(window.CONTROLLER = window.CONTROLLER || {}));
});