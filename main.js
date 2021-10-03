var sanitiser = document.getElementById("sanit-cursor");
var school = document.getElementById("school");

let scoreHealth = 0;
let scoreHeart = document.getElementsByClassName("heart-box");


addEventListener('mousemove', (event) => {
  var xx = event.clientX;
  var yy = event.clientY;

  sanitiser.style.left = (xx - 110) + 'px';//80
  sanitiser.style.top = (yy - 30) + 'px';//30
  if (xx < window.innerWidth / 2) {
    sanitiser.style.transform = "rotateY(0deg)";
  }
  else {
    sanitiser.style.transform = "rotateY(180deg)";
  }
})
addEventListener('touchmove', (event) => {
  var xx1 = event.touches[0].clientX;
  var yy1 = event.touches[0].clientY;

  sanitiser.style.left = (xx1 - 80) + 'px';//80
  sanitiser.style.top = (yy1 - 40) + 'px';//30
})

var mainBox = document.getElementById("virus-box2");
let viruses = [];



class createViruses {
  constructor(id) {
    var virus = document.createElement("div");
    virus.className = "virus";
    var virusImg = document.createElement("img");
    virusImg.src = "virus.png";

    virus.appendChild(virusImg);
    mainBox.appendChild(virus);

    let virusIndex = viruses.push(virus) - 1;

    let pos = -150;
    let startAnimation;
    let VirusColide;
    let VirusinSchool;

    let virusDirection = Math.floor(Math.random() * 2);
    if (virusDirection == 1) {
      pos = window.innerWidth;
    } else {
    }

    startAnimation = setInterval(function () {
      if (pos == screen.width + 200) {
        virus.remove();
        clearInterval(startAnimation);
      } else {
        if (virusDirection == 1) {
          virus.classList.add("rtl-dir");
          pos--;
        }
        else {
          pos++;
        }
        let v = viruses[virusIndex];

        v.style.left = pos + 'px';

      }
    }, 5);

    VirusColide = setInterval(function () {
      let sanitiserCordinates = sanitiser.getBoundingClientRect()
      let virusCordinates = virus.getBoundingClientRect();


      var overlap = !(virusCordinates.right < sanitiserCordinates.left ||
        virusCordinates.left > sanitiserCordinates.right ||
        virusCordinates.bottom < sanitiserCordinates.top ||
        virusCordinates.top > sanitiserCordinates.bottom)

      if (overlap === true) {
        virus.remove();
        clearInterval(VirusColide);
        clearInterval(startAnimation);
      } else {
      }
    }, 5);

    VirusinSchool = setInterval(function () {
      let schoolCordinates = school.getBoundingClientRect()
      let virusCordinates = virus.getBoundingClientRect();


      var inSchool = !(virusCordinates.right < schoolCordinates.left ||
        virusCordinates.left > schoolCordinates.right ||
        virusCordinates.bottom < schoolCordinates.top ||
        virusCordinates.top > schoolCordinates.bottom)

      if (inSchool === true) {
        virus.remove();
        clearInterval(VirusinSchool);
        clearInterval(VirusColide);
        clearInterval(startAnimation);

        scoreHeart[scoreHealth].classList.add("active");

        scoreHealth = scoreHealth + 1;

        

        if (scoreHealth === 3){
          clearInterval(startGame);
          // Remove all viruses
          const removeElements = (elms) => elms.forEach(el => el.remove());
          removeElements( document.querySelectorAll(".virus") );
        }
      } else {
      }
    }, 5);

    virus.onclick = function () {

      if (virusIndex > -1) {
        viruses.splice(virusIndex, 1);
      }

      virus.remove();
      clearInterval(startAnimation);
    };

  }
}


virusObject = [];

let = virusId = 0;

function startthegame() {
  startGame = setInterval(function () {
    createViruses[virusId] = new createViruses();
  }, 1000);
}
startthegame();