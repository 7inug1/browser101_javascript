let cursorCoordinates = document.querySelector('#cursorCoordinates');
let vertical = document.querySelector('.vertical');
let horizontal = document.querySelector('.horizontal');
let pointer = document.querySelector('#pointer');

document.addEventListener('mousemove', event => {
  const x = event.clientX;
  const y = event.clientY;
  cursorCoordinates.innerHTML = x + " X " + y;
  
  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  
  pointer.style.left = `${x}px`;
  pointer.style.top = `${y}px`;

  cursorCoordinates.style.left = `${x}px`;
  cursorCoordinates.style.top = `${y}px`;
})

