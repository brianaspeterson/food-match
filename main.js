 var dropZones = document.querySelectorAll('#dropZones');
    var dragElements = document.getElementsByClassName('card-size');
    var elementDragged = null;

    for (var i = 0; i < dragElements.length; i++) {
        console.log("VAL:" + i);
        // Event Listener for when the drag interaction starts.
        dragElements[i].addEventListener('dragstart', dragStart);

        // Event Listener for when the drag interaction finishes.
        // dragElements[i].addEventListener('dragend', function(e) {
        //     elementDragged = null;
        // });
    
    // Event Listener for when the dragged element is over the drop zone.
    dropZones[i].addEventListener('dragover', dragOver);

    // Event Listener for when the dragged element enters the drop zone.
    dropZones[i].addEventListener('dragenter', dragEnter);

    // Event Listener for when the dragged element leaves the drop zone.
    // dropZones.addEventListener('dragleave', function(e) {
    //     this.className = "";
    // });

    // Event Listener for when the dragged element dropped in the drop zone.
    dropZones[i].addEventListener('drop', dragDrop);
  }



function dragStart(ev) {
        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
        ev.dataTransfer.setDragImage(ev.target, 0, 0);

        return true;
    }

    function add(){

      //have a listerner that transmits to id points-counter
    }



    function dragEnter(ev) {
        event.preventDefault();
        return true;
    }

    function dragOver(ev) {

        return false;
    }

    function dragDrop(ev) {

        var src = ev.dataTransfer.getData("Text");
        var referenceNode = ev.currentTarget.firstChild;
        var element = document.getElementById(src);
        var imgId = ev.target.id || ev.target.firstElementChild.id;
        if (src.indexOf(imgId) > -1) { //come back to changing alt tags
            element.className = "onTop";
            ev.target.className = "img-max-highlight";
            ev.currentTarget.insertBefore(element, referenceNode);
            ev.stopPropagation();
            this.add();
            return false;
        } else {
            ev.target.className = "img-wrong-highlight"
            return true;
        }

    }