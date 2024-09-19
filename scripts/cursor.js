function myCursor() {
  console.clear();

  // Select the circle and dot elements
  const circleElement = document.querySelector('.circle');
  const dotElement = document.querySelector('.dot');

  // Create objects to track mouse position and custom cursor positions
  const mouse = { x: 0, y: 0 }; // Track current mouse position
  const previousMouse = { x: 0, y: 0 }; // Store the previous mouse position
  const circle = { x: 0, y: 0 }; // Track the circle position
  const dot = { x: 0, y: 0 }; // Track the dot position independently

  // Initialize variables to track scaling and rotation
  let currentScale = 0; // Track current scale value
  let currentAngle = 0; // Track current angle value

  // Update mouse position on the 'mousemove' event
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  // Smoothing factors for cursor movement speed (circle and dot)
  const circleSpeed = 0.15; // Circle moves at this speed
  const dotSpeed = 0.25; // Dot moves slower, creating a trailing effect

  // Start animation
  const tick = () => {
    // MOVE
    // Calculate circle movement based on mouse position and smoothing
    circle.x += (mouse.x - circle.x) * circleSpeed;
    circle.y += (mouse.y - circle.y) * circleSpeed;
    const translateTransformCircle = `translate(${circle.x}px, ${circle.y}px)`;

    // Dot movement lags behind the circle
    dot.x += (mouse.x - dot.x) * dotSpeed;
    dot.y += (mouse.y - dot.y) * dotSpeed;
    const translateTransformDot = `translate(${dot.x}px, ${dot.y}px)`;

    // SQUEEZE
    const deltaMouseX = mouse.x - previousMouse.x;
    const deltaMouseY = mouse.y - previousMouse.y;
    previousMouse.x = mouse.x;
    previousMouse.y = mouse.y;
    const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);
    const scaleValue = (mouseVelocity / 150) * 0.5;
    currentScale += (scaleValue - currentScale) * circleSpeed;
    const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

    // ROTATE
    const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
    if (mouseVelocity > 20) {
      currentAngle = angle;
    }
    const rotateTransform = `rotate(${currentAngle}deg)`;

    // Apply all transformations to the circle element
    circleElement.style.transform = `${translateTransformCircle} ${rotateTransform} ${scaleTransform}`;

    // Apply only the movement transformation to the dot element (no rotation or scaling)
    dotElement.style.transform = translateTransformDot;

    // Request the next frame to continue the animation
    window.requestAnimationFrame(tick);
  };

  // Start the animation loop
  tick();

}

export default myCursor;