import p5 from 'p5';

new p5((p) => {
    // Use the existing canvas with ID 'myCanvas'
    p.setup = () => {
      // Your setup code here
      
    };
  
    p.draw = () => {
      // Your draw code here
      p.background(220);
      p.fill(255, 0, 0);
      p.ellipse(50, 50, 50, 50);
    };
  }, 'myCanvas');