(function() {

	var dropMeatball = document.querySelector('#meatball-recipe img');
	console.log("DROP " + dropMeatball);
	var dragElements = document.querySelectorAll('#drag-elements div');
	var elementDragged = null;
	

	for (var i = 0; i < dragElements.length; i++) {

  // Event Listener for when the drag interaction starts.
  dragElements[i].addEventListener('dragstart', function(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', this.innerHTML);
    elementDragged = this;
  });

  // Event Listener for when the drag interaction finishes.
  dragElements[i].addEventListener('dragend', function(e) {
    elementDragged = null;
  });

};

// Event Listener for when the dragged element is over the drop zone.
dropMeatball.addEventListener('dragover', function(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';

  return false;
});

// Event Listener for when the dragged element enters the drop zone.
dropMeatball.addEventListener('dragenter', function(e) {
  this.className = "over";
});

// Event Listener for when the dragged element leaves the drop zone.
dropMeatball.addEventListener('dragleave', function(e) {
  this.className = "";
});

// Event Listener for when the dragged element dropped in the drop zone.
dropMeatball.addEventListener('drop', function(e) {
  if (e.preventDefault) e.preventDefault(); 
  if (e.stopPropagation) e.stopPropagation();

  this.className = "";
  this.innerHTML = "Dropped " + e.dataTransfer.getData('text');

  // Remove the element from the list.
  document.querySelector('#drag-elements').removeChild(elementDragged);

  return false;
});




})();