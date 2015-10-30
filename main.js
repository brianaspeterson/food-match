 (function(document) {

     var dropZones = document.getElementsByClassName('recipe-link');

     var dragElements = document.getElementsByClassName('card-size');
     var startButton = document.getElementById('start-game');
     var timerPage = document.querySelector('#time');
     var points = 0;
     var counter = 0;

     var elementDragged = null;

     for (var i = 0; i < dragElements.length; i++) {
         dragStart(dragElements[i], i);
         dragEnter(dropZones[i], i);
         dragOver(dropZones[i], i);
         dragDrop(dropZones[i], i);
     }

     startButton.addEventListener('click', function() {
         var timer = 120,
             minutes, seconds;
         var intervalFunc = setInterval(function() {
             minutes = parseInt(timer / 60, 10);
             seconds = parseInt(timer % 60, 10);

             minutes = minutes < 10 ? "0" + minutes : minutes;
             seconds = seconds < 10 ? "0" + seconds : seconds;

             timerPage.textContent = minutes + ":" + seconds;

             if (--timer < 0) {
                 clearInterval(intervalFunc);
                 timer = 0;
                 alert("GAME OVER!");
                 document.location.reload(true);
             }


         }, 1000);

     })


     function dragStart(dragElements, i) {

         dragElements.addEventListener('dragstart', function(ev) {
             ev.dataTransfer.effectAllowed = 'move';
             ev.dataTransfer.setData('Text', ev.target.getAttribute('id'));
             ev.dataTransfer.setDragImage(ev.target, 0, 0);
             return true;

         });
     }

     function dragEnter(dropZones, i) {
         dropZones.addEventListener('dragenter', function(ev) {
             event.preventDefault();
             return true;
         });
     }

     function dragOver(dropZones, i) {
         dropZones.addEventListener('dragover', function(ev) {
             event.preventDefault();
             return true;
         });
     }

     function dragDrop(dropZones, i) {
         dropZones.addEventListener('drop', function(ev) {

             var src = ev.dataTransfer.getData("Text");
             var referenceNode = ev.currentTarget.firstChild || ev.currentTarget;
             var element = document.getElementById(src);
             var imgId = ev.target.id || ev.target.firstElementChild.id;
             if (src.indexOf(imgId) > -1) { 
                 counter++;
                 points += 10;
                 span = document.getElementById("points-counter");
                 span.innerHTML = points;
                 element.className = "onTop";
                 if (imgId === (noodles || tacos || sicilian)) {
                     ev.target.className = "img-max-highlight-bottom";
                 } else if (imgId === "pastrami" ) {
                     ev.target.className = "img-max-highlight-pastrami";
                 } else {
                     ev.target.className = "img-max-highlight";
                 }
                 ev.currentTarget.insertBefore(element, referenceNode);
                 element.draggable = false;
                 ev.stopPropagation();
                 if (counter === 6) {
                     alert("GAME OVER");
                     document.location.reload(true);
                 }
                 return false;
             } else {
                 if (element.className === "onTop") {
                     ev.target.className = "img-max-highlight";
                 } else if (ev.target.className !== "col-xs-6 col-sm-4 col-md-4" && imgId === "maduros") {
                     ev.target.className = "img-wrong-highlight-maduros";

                 } else if (ev.target.className !== "col-xs-6 col-sm-4 col-md-4") {
                    ev.target.className = "img-wrong-highlight"
                 }
                 else{
                     ev.target.firstElementChild.firstElementChild.className = "img-wrong-highlight";
                 }
                 points -= 5;
                 span = document.getElementById("points-counter");
                 span.innerHTML = points;
                 return true;
             }

         });
     }


 }(document));