function addClickListener(element, message) {
    element.addEventListener('click', function() {
      alert(message);
    });
  }

  function addDoubleClickListener(element, message) {
    element.addEventListener('dblclick', function() {
      alert(message);
    });
  }

  function addMouseOverListener(element, color) {
    element.addEventListener('mouseover', function() {
      this.style.backgroundColor = color;
    });
  }

  function addMouseOutListener(element, color) {
    element.addEventListener('mouseout', function() {
      this.style.backgroundColor = color;
    });
  }

  function addKeyPressListener() {
    document.addEventListener('keypress', function(event) {
      alert('Key pressed: ' + event.key);
    });
  }

  function addResizeListener() {
    window.addEventListener('resize', function() {
      console.log('Window resized!');
    });
  }

  function addDragAndDropListeners(element, message) {
    element.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text/plain', message);
    });

    document.body.addEventListener('dragover', function(event) {
      event.preventDefault();
    });

    document.body.addEventListener('drop', function(event) {
      event.preventDefault();
      alert(message + ' Dropped!');
    });
  }
  function loop() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(function(box) {
      const currentText = box.innerText.trim();
      box.innerText = currentText + '*';
    });
  }
  function togle() {
    box = document.getElementById('box1')
    box.classList.toggle('active');
  }
  function addActiveClass() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(function(box) {
      box.classList.toggle('active');
    });
  }

  addClickListener(document.getElementById('box1'), 'Clicked!');
  addDoubleClickListener(document.getElementById('box2'), 'Double Clicked!');
  addMouseOverListener(document.getElementById('box3'), 'lightgreen');
  addMouseOutListener(document.getElementById('box4'), 'lightblue');
  addKeyPressListener();
  addResizeListener();
  addDragAndDropListeners(document.getElementById('box7'), 'Drag me!');
