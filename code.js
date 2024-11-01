document.getElementById('square').addEventListener('click', () => createShapes('square'));
document.getElementById('circle').addEventListener('click', () => createShapes('circle'));
document.getElementById('triangle').addEventListener('click', () => createShapes('triangle'));

function createShapes(shapeType) {
  const quantity = document.getElementById('quantity').value;
  const container = document.getElementById('container');
  
  for (let i = 0; i < quantity; i++) {
    const shape = document.createElement('div');
    shape.classList.add('shape', shapeType);

    const size = Math.floor(Math.random() * (200 - 20 + 1)) + 20;

    if (shapeType === 'square' || shapeType === 'circle') {
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
    }

    if (shapeType === 'triangle') {
      shape.style.borderLeftWidth = `${size / 2}px`;
      shape.style.borderRightWidth = `${size / 2}px`;
      shape.style.borderBottomWidth = `${size}px`;
    }

    shape.style.top = `${Math.random() * (window.innerHeight - size)}px`;
    shape.style.left = `${Math.random() * (window.innerWidth - size)}px`;

    shape.addEventListener('click', () => {
      shape.style.opacity = shape.style.opacity === '0.6' ? '1' : '0.6'; 
      
      if (shapeType === 'triangle') {
        if (!shape.classList.contains('triangle-border')) {
          shape.classList.add('triangle-border');
        } else {
          shape.classList.remove('triangle-border');
        }
      } else {
        shape.style.border = shape.style.border === '2px solid black' ? 'none' : '2px solid black'; 
      }
    });

    shape.addEventListener('dblclick', () => {
      shape.remove();
    });

    container.appendChild(shape);
  }
}