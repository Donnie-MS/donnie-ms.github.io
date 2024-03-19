const containerNotas = document.getElementById("notas");
const widthView = window.innerWidth;
const heightView = window.innerHeight;
const letraNotas = ["♩", "♪", "♫", "♬", "♭"];
const letraNotas2 = ["♭", "♬", "♪", "♫", "♩"];
const sombra = document.getElementById("sombra");

function positionX() {
    return Math.random() * ((widthView * 0.6) - (widthView * 0.2)) + (widthView * 0.2);
}

function positionY() {
    return Math.random() * ((heightView * 0.14) - (heightView * 0.10)) + (heightView * 0.10);
}

// editar positionY
let styles = document.createElement('style');
styles.textContent = `
    .notaMusical {
        position: absolute;
        animation: desvanecido 10s linear infinite;
    }
`;

document.head.appendChild(styles);

function createNota(index) {
    const nota = document.createElement('p');
    nota.textContent = letraNotas[index];
    nota.className = 'notaMusical';
    nota.style.left = `${positionX()}px`;
    nota.style.top = `${positionY()}px`;
    containerNotas.appendChild(nota);
}
function createNota2(index) {
    const nota = document.createElement('p');
    nota.textContent = letraNotas2[index];
    nota.className = 'notaMusical';
    nota.style.left = `${positionX()}px`;
    nota.style.top = `${positionY()}px`;
    containerNotas.appendChild(nota);
}

function createNotasWithDelay(index) {
    if (index < letraNotas.length) {
        setTimeout(() => {
            createNota(index);
            createNotasWithDelay(index + 1);
        }, 2000);
    }
}
function createNotasWithDelay2(index) {
    if (index < letraNotas2.length) {
        setTimeout(() => {
            createNota2(index);
            createNotasWithDelay2(index + 1);
        }, 2000); 
    }
}
setTimeout(() => {
    sombra.style.boxShadow = "0px 102px 100px 100px #6529b8, 0px 102px 100px 200px #341a7f, 0px 102px 100px 225px #341a7f,0px 102px 100px 2000px #070437";
}, 10000);
createNotasWithDelay(0);
createNotasWithDelay2(0);
