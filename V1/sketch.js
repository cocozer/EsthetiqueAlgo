function getRandomInt(max) {
  return floor(random() * max);
}

function getAverage(left, top) {
  const average = (left + top) / 2;
  if (average % 1 == 0) {
    return average;
  }
  if (getRandomInt(50) < 25) {
    return average-0.5;
  } else {
    return average+0.5;
  }
  
}
function setup() {
  createCanvas(5000, 5000);
  
  let count = 0;
  let densites = [0]; // tableau des densités
  let it = 0; // incrément du tableau des densités
  
  quelleDensite = getRandomInt(6); // On tire la densité de départ aléatoirement
  densites.push(quelleDensite);
  it++;
  for(a=0; a<16; a++) {
    for(b=0; b<16; b++) { // Pour chaque carré de 16x16 (256 pixels), on définit la densité de ce carré
      
      if(it>16) { // Si on est à la 2e ligne, on prend en compte son voisin du haut
        quelleDensite = getAverage(quelleDensite, densites[it-16]);
      }
      if (getRandomInt(100) < 50) { // Une chance sur deux de changer la densité (sinon elle reste la même) 
        if (quelleDensite >= 6) { // Si le bruit est déjà trop faible
            quelleDensite--;
          } else if (quelleDensite <= 0) { // Si le bruit est déjà trop élevé
            quelleDensite++;
          } else if (getRandomInt(50) < 25) {
            quelleDensite--;
          } else {
            quelleDensite++;
          }
        }
      densites.push(quelleDensite);
      it++;
      console.log(densites[it]);
      
      for(t=0; t<14; t++) {
        for(i = 0; i<38; i++) {
          if(quelleDensite == 0) {
            density1();
          } else if (quelleDensite == 1) {
            density2();
          } else if (quelleDensite == 2) {
            density3();
          } else if (quelleDensite == 3) {
            density4();
          } else if (quelleDensite == 4) {
            density5();
          } else if (quelleDensite == 5) {
            density6();
          } else if (quelleDensite == 6) {
            density10();
          }
          strokeWeight(0);
          rect(0, 1, 1);
          translate(1, 0);
          count++;
        }
        translate(-38, 1)
      }
      translate(17, -14);
    }
    translate(-272, 14);
  }
  console.log('Il y a '+count+' pixels');
}

function density1() {
    let nombre = getRandomInt(300);
    if (nombre < 50) {
      fill(0, 0, 0);
    } else if (nombre < 100) {
      fill(0, 0, 0);
    } else if (nombre < 150) {
      fill(0, 0, 0);
    } else if (nombre < 200){
      fill(0, 0, 0);
    } else if (nombre < 250){
      fill(255, 255, 255);
    } else {
      fill(255, 255, 255);
    }
}

function density2() {
    let nombre = getRandomInt(150);
    if (nombre < 50) {
      fill(0, 0, 0);
    } else if (nombre < 100) {
      fill(0, 0, 0);
    } else {
      fill(255, 255, 255);
    }
}

function density3() {
  let nombre = getRandomInt(100);
  if (nombre < 50) {
      fill(0, 0, 0);
  } else  {
      fill(255, 255, 255);
  }
}
    
    

function density4() {
    let nombre = getRandomInt(150);
    if (nombre < 50) {
      fill(0, 0, 0);
    } else if (nombre < 100) {
      fill(255, 255, 255);
    } else {
      fill(255, 255, 255);
    }
}
  
function density5() {
    let nombre = getRandomInt(200);
    if (nombre < 50) {
      fill(0, 0, 0);
    } else if (nombre < 100) {
      fill(255, 255, 255);
    } else if (nombre < 150) {
      fill(255, 255, 255);
    } else {
      fill(255, 255, 255);
    }
}

function density6() {
    let nombre = getRandomInt(250);
    if (nombre < 50) {
      fill(0, 0, 0);
    } else if (nombre < 100) {
      fill(255, 255, 255);
    } else if (nombre < 150) {
      fill(255, 255, 255);
    } else if (nombre < 200) {
      fill(255, 255, 255);
    } else {
      fill (255, 255, 255);
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