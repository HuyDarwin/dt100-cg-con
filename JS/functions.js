import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {
        //

        const db = getDatabase();
      
        // sound
      
        var at = '';
        var at2 = '';
        var at3 = '';
        var at4 = '';
        var at5 = '';

        con.PlaySound = function(filename, n, time = 0){
          if (n == 1){
            try{			
              at =  new Audio(filename);
              if (time != 0) {
                at.currentTime = time;
              }
              at.play();
              at.volume = 0.5;
            }
            catch(e){
              // do nothing
            }				
          }
          else if (n == 2){
            try{			
              at2 =  new Audio(filename);
              if (time != 0) {
                at2.currentTime = time;
              }
              at2.play();
              at2.volume = 0.5;
            }
            catch(e){
              // do nothing
            }				
          }
          else if (n == 3){
            try{			
              at3 =  new Audio(filename);
              if (time != 0) {
                at3.currentTime = time;
              }
              at3.play();
              at3.volume = 0.4;
            }
            catch(e){
              // do nothing
            }				
          }
          else if (n == 4){
            try{			
              at4 =  new Audio(filename);
              if (time != 0) {
                at4.currentTime = time;
              }
              at4.play();
              at4.volume = 0.4;
            }
            catch(e){
              // do nothing
            }				
          }
          else if (n == 5){
            try{			
              at5 =  new Audio(filename);
              if (time != 0) {
                at5.currentTime = time;
              }
              at5.play();
              at5.volume = 0.2;
            }
            catch(e){
              // do nothing
            }				
          }
        };
      
        con.PlayWhiteNoise = function() {
          try{			
            var at6 = new Audio("https://cdn.glitch.global/eb98023a-5c09-46b5-a350-c2ece068cb4e/White%20noise.mp3?v=1740662654234");
            at6.volume = 0.0025;
            at6.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
            at6.play();
          }
          catch(e){
            // do nothing
          }				
        }

        con.StopSound = function(a,b) {
          try {
            if(a == 1 && at != ''){
              at.pause();
              if(b != 1){
                at.currentTime = 0;
                at = '';
              }
            }
            if(a == 2 && at2 != ''){
              at2.pause();
              if(b != 1){
                at2.currentTime = 0;
                at2 = '';
              }
            }
            if(a == 3 && at3 != ''){
              at3.pause();
              if(b != 1){
                at3.currentTime = 0;
                at3 = '';
              }
            }
            if(a == 4 && at4 != ''){
              at4.pause();
              if(b != 1){
                at4.currentTime = 0;
                at4 = '';
              }
            }
            if(a == 5 && at5 != ''){
              at5.pause();
              if(b != 1){
                at5.currentTime = 0;
                at5 = '';
              }
            }
            if(a != 1 && a != 2 && a != 3 && a != 4 && a != 5){
              if(at != ''){
                at.pause();
                if(b != 1){
                  at.currentTime = 0;
                  at = '';
                }
              }
              if(at2 != ''){
                at2.pause();
                if(b != 1){
                  at2.currentTime = 0;
                  at2 = '';
                }
              }
              if(at3 != ''){
                at3.pause();
                if(b != 1){
                  at3.currentTime = 0;
                  at3 = '';
                }
              }
              if(at4 != ''){
                at4.pause();
                if(b != 1){
                  at4.currentTime = 0;
                  at4 = '';
                }
              }
              if(at5 != ''){
                at5.pause();
                if(b != 1){
                  at5.currentTime = 0;
                  at5 = '';
                }
              }
            }
          }
          catch(e){
            // swallow
          }
        };	

        con.ResumeSound = function(a) {
          try {
            if(a == 1 && at != ''){
              at.play();
            }
            if(a == 2 && at2 != ''){
              at2.play();
            }
            if(a == 3 && at3 != ''){
              at3.play();
            }
            if(a == 4 && at4 != ''){
              at4.play();
            }
            if(a == 5 && at5 != ''){
              at5.play();
            }
            if(a != 1 && a != 2 && a != 3 && a != 4 && a != 5){
              if(at != ''){
                at.play();
              }
              if(at2 != ''){
                at2.play();
              }
              if(at3 != ''){
                at3.play();
              }
              if(at4 != ''){
                at4.play();
              }
              if(at5 != ''){
                at5.play();
              }
            }
          }
          catch(e){
            // swallow
          }
        };	

        //

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();


        });

    }(window.CONTROLLER = window.CONTROLLER || {}));
});