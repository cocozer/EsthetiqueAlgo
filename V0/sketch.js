function getRandomInt(max) {
  return floor(random() * max);
}

function setup() {
  createCanvas(300, 300);
  for(a=0; a<16; a++) {
    for(b=0; b<16; b++) {
      quelleDensite = getRandomInt(4);
      for(t=0; t<16; t++) {
        for(i = 0; i<16; i++) {
          if(quelleDensite == 0) {
            density1();
          } else if (quelleDensite == 1) {
            density2();
          } else if (quelleDensite == 2) {
            density3();
          } else if (quelleDensite == 3) {
            density10();
          }
          strokeWeight(0);
          rect(0, 1, 1);
          translate(1, 0);
        }
        translate(-16, 1)
      }
      translate(17, -16);
    }
    translate(-272, 16);
  }
}
function density1() {
  let nombre = getRandomInt(100);
  if (nombre < 50) {
      fill(0, 0, 0);
  } else  {
      fill(255, 255, 255);
  }
}
    
    

function density2() {
    let nombre = getRandomInt(2);
    if (nombre == 0) {
      fill(0, 0, 0);
    } else if (nombre == 1) {
      fill(255, 255, 255);
    } else if (nombre == 2) {
      fill(0, 0, 0);
    }
}
  
function density3() {
    let nombre = getRandomInt(3);
    if (nombre == 0) {
      fill(0, 0, 0);
    } else if (nombre == 1) {
      fill(255, 255, 255);
    } else if (nombre == 2) {
      fill(0, 0, 0);
    } else if (nombre == 3) {
      fill(0, 0, 0);
    }
}
  
function density10() {
    let nombre = getRandomInt(10);
    if (nombre == 1) {
      fill(0, 0, 0);
    } else {
      fill(255, 255, 255);
    }
}