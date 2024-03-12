const cancion = document.getElementById("audio1");
const botonHide = document.getElementById("botonPu")
const durationDisplay = document.getElementById('currentDuration');
const letra = document.getElementById("lyric")
const bodyFinal = document.getElementById("bodyFinal")
let count = 0;
const lyrics = [
    { time: 5, text: "SEÑOR TRISTE", text2: "MR. BLUE" },
    { time: 7, text: "TE DIJE QUE TE AMO", text2: "I TOLD YOU THAT I LOVE U" },
    { time: 10, text: "POR FAVOR, CRÉEME", text2: "PLEASE, BELIEVE ME"},
    { time: 15, text: "SEÑOR TRISTE", text2: "MR. BLUE"},
    { time: 18, text: "TENGO QUE IRME AHORA, CARIÑO", text2:"I HAVE TO GO NOW, DARLING"},
    { time: 21, text: "NO TE ENOJES", text2:"DON'T BE ANGRY"},
    { time: 26, text: "SE QUE ESTÁS CANSADO", text2:"I KNOW THAT YOU'RE TIRED"},
    { time: 29, text: "SÉ QUE ESTAS ADOLORIDO, ENFERMO Y TRISTE POR ALGUNA RAZÓN", text2:"KNOW THAT YOU'RE SORE AND SICK AND SAD FOR SOME REASON"},
    { time: 36, text: "ASÍ QUE TE DEJARÉ CON UNA SONRISA", text2:"SO I'LL LEAVE YOU WITH A SMILE"},
    { time: 39, text: "CON UN BESO EN LA MEJILLA", text2:"KISS YOU ON THE CHEEK"},
    { time: 42, text: "Y LO LLAMARÁS TRAICIÓN", text2:"AND YOU WILL CALL IT TREASON"},
    { time: 48, text: "ASÍ ES COMO FUNCIONA ALGUNOS DÍAS", text2:"WELL, THAT'S THE WAY IT GOES SOME DAYS"},
    { time: 51, text: "UNA FIEBRE VIENE A TI SIN NINGÚN AVISO", text2:"A FEVER COMES AT YOU WITHOUT A WARNING"},
    { time: 58, text: "Y PUEDO VERLO EN TU CARA", text2:"AND I CAN SEE IT IN YOUR FACE"},
    { time: 62, text: "HAS ESTADO ESPERANDO PARA ROMPER DESDE QUE TE DESPERTASTE ESTA MAÑANA", text2:"YOU'VE BEEN WAITING TO BREAKS INCE YOU WOKE UP THIS MORNING"},
    { time: 69, text: "SEÑOR TRISTE", text2: "MR. BLUE"},
    { time: 71, text: "NO MANTENGAS LA CABEZA TAN BAJA", text2:"DON'T HOLD YOUR HEAD SO LOW"},
    { time: 74, text: "QUE NO PUEDES VER EL CIELO", text2:"THAT YOU CAN'T SEE THE SKY"},
    { time: 79, text: "SEÑOR TRISTE", text2: "MR. BLUE"},
    { time: 82, text: "NO HA PASADO MUCHO TIEMPO DESDE QUE ESTABAS VOLANDO ALTO", text2:"IT AIN'T SO LONG SINCE YOU WERE FLYING HIGH"},
    { time: 90, text: "SEÑOR TRISTE", text2: "MR. BLUE"},
    { time: 94, text: "", text2: ""},
    { time: 101, text: "SEÑOR TRISTE", text2: "MR. BLUE"},
    { time: 106, text: "", text2: ""},
    { time: 112, text: "SEÑOR TRISTE", text2: "MR. BLUE"},
    { time: 115, text: "", text2: ""},
    { time: 135, text: "SEÑOR TRISTE", text2: "MR. BLUE"},
    { time: 138, text: "TE DIJE QUE TE AMO", text2: "I TOLD YOU THAT I LOVE U" },
    { time: 141, text: "POR FAVOR, CRÉEME", text2: "PLEASE, BELIEVE ME"},
    { time: 143, text: "", text2: ""}
  ];

function playSong() {
    botonHide.disabled = true;
    letra.style.display = "block";
    cancion.play();
    botonHide.style.visibility = "hidden";
    cancion.addEventListener('timeupdate', () => {
        const currentTime = formatTime(cancion.currentTime);
      });
      function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);                     
        count+= 0.25; 
        for (const lyric of lyrics) {
            if (count == lyric.time) {
              if(lyric.time == 29 || lyric.time == 48 || lyric.time == 51 || lyric.time == 62|| lyric.time == 82){  
                letra.innerHTML = `<p class="letra1 bigText">${lyric.text}</p>
                <br>
                <p class="letra2 bigText">${lyric.text2}</p>`
                break;
              }
              else if(lyric.time == 90|| lyric.time == 101 || lyric.time == 112) {
                letra.innerHTML = `<p class="letra1 mrBlue">${lyric.text}</p>
                <br>
                <p class="letra2 mrBlue">${lyric.text2}</p>`
                break;
              }
                letra.innerHTML = `<p class="letra1">${lyric.text}</p>
                <br>
                <p class="letra2">${lyric.text2}</p>`
                break;
            }
        }
        if(seconds == 34 && minutes == 2){
          bodyFinal.classList.add("finally");
          setTimeout(function() {
            bodyFinal.classList.remove("finally")
            bodyFinal.classList.add("finally2");
            bodyFinal.innerHTML = `<img src="imgs/LINE Official Stickers - Pompompurin (Watercolor Style) Example with GIF Animation (1).gif"> `;
        }, 6000);
        setTimeout(function() {
          bodyFinal.classList.remove("finally2")
          bodyFinal.innerHTML = "";
      }, 13000);
        }

        const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        return formattedTime;
      }
      
}