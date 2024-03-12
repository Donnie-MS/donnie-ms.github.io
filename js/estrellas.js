const maxStar = 10;
const contenedor = document.getElementById("contenedor");
const contenedor2 = document.getElementById("contenedor2");
const contenedor3 = document.getElementById("contenedor3");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;    


function randomPositionX() {
    return (Math.floor(Math.random() * -(screenHeight - (screenHeight * 0.17)))) / 3;
};
function randomPositionY() {
    return Math.floor(Math.random() * screenWidth);
};

        for (let i = 0; i < maxStar; i++){
            let styles = document.createElement('style');
            styles.textContent = `
                .star${i} {
                    width: 12px;
                    height: 12px;
                    position: relative;
                    top: ${randomPositionY()}px;
                    right: ${randomPositionX()}px;      
                }
                .star${i}::before {
                    content: "";
                    position: absolute;
                    top: -10px; 
                    left: -10px; 
                    width: calc(100% + 20px); 
                    height: calc(100% + 20px); 
                    clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0 50%, 35% 35%);
                    background-color: #ccd2fad3; 
                    z-index: 19; 
                    filter: blur(18px);
                    animation: twinkle2 4s infinite linear, moveStar 20s infinite linear;        
                }
                
                .star${i}::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0 50%, 35% 35%);
                    background-color: rgb(229, 228, 228);
                    z-index: 20;
                    animation: twinkle2 4s infinite linear, moveStar 20s infinite linear;
                }
    
            `;
            document.head.appendChild(styles);
            const nuevoElemento = document.createElement('p');
            nuevoElemento.classList.add(`star${i}`)
            contenedor.appendChild(nuevoElemento);
        }
    setTimeout(function() {
    for (let i = 0; i < maxStar; i++) {
        let styles = document.createElement('style');
        styles.textContent = `
            .starb${i} {
                width: 12px;
                height: 12px;
                position: relative;
                top: ${randomPositionY()}px;
                right: ${randomPositionX()}px;

            }
            .starb${i}::before {
                content: "";
                position: absolute;
                top: -10px; 
                left: -10px; 
                width: calc(100% + 20px); 
                height: calc(100% + 20px); 
                clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0 50%, 35% 35%);
                background-color: white; 
                z-index: 19; 
                filter: blur(18px);
                animation: twinkle2 4s infinite linear, moveStar 25s infinite linear;
            }
            
            .starb${i}::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0 50%, 35% 35%);
                background-color: white;
                z-index: 20;
                animation: twinkle2 4s infinite linear, moveStar 25s infinite linear;

            }

        `;
        document.head.appendChild(styles);
        const nuevoElemento = document.createElement('p');
        nuevoElemento.classList.add(`starb${i}`)
        contenedor2.appendChild(nuevoElemento);
    }        
    }, 4000)

    setTimeout(function() {    
        for (let i = 0; i < maxStar; i++) {
        let styles = document.createElement('style');
        styles.textContent = `
        .starc${i} {
            width: 12px;
            height: 12px;
            position: relative;
            top: ${randomPositionY()}px;
            right: ${randomPositionX()}px;

        }
        .starc${i}::before {
            content: "";
            position: absolute;
            top: -10px; 
            left: -10px; 
            width: calc(100% + 20px); 
            height: calc(100% + 20px); 
            clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0 50%, 35% 35%);
            background-color: white; 
            z-index: 19; 
            filter: blur(18px);
            animation: twinkle2 4s infinite linear, moveStar 30s infinite linear;
        }
        
        .starc${i}::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0 50%, 35% 35%);
            background-color: white;
            z-index: 20;
            animation: twinkle2 4s infinite linear, moveStar 40s infinite linear;

        }

        `;
        document.head.appendChild(styles);
        const nuevoElemento = document.createElement('p');
        nuevoElemento.classList.add(`starc${i}`)
        contenedor3.appendChild(nuevoElemento);
    }
    }, 8000)


const styleElement = document.createElement('style');

let starHeight = 0;

if(window.innerWidth < 768) {
    starHeight = (screenHeight * 0.3) / 2;}
else{
    starHeight = screenHeight * 0.35;
}

styleElement.innerHTML = `
@keyframes twinkle2 {
    0% {
        opacity: 0.3;
        
    }
    25%{
        opacity: 1;
    }
    50% {
        opacity: 0.3;
    }
    75%{
        opacity: 1;
    }
    100% {
        opacity: 0.3;
    }
}
@keyframes moveStar{
    0%{
        transform: translate(${-(screenWidth + (screenWidth * 0.3))}px, ${screenHeight * 0.35}px) scale(1) rotate(0deg) ;
    }
    25%{
        transform: translate(${(-(screenWidth + (screenWidth * 0.3)))/ 2}px, ${(screenHeight * 0.35) / 2}px) scale(0.65) rotate(180deg);
    }
    50%{
        transform: translate(${(screenWidth + ((screenWidth * 0.3))/ 2)- (screenWidth + ((screenWidth * 0.3))/ 2)}px, ${((screenHeight * 0.35) / 2)- ((screenHeight * 0.35) / 2)}px) scale(1) rotate(360deg);
    }
    75%{
        transform: translate(${((screenWidth + (screenWidth * 0.3)))/ 2}px, ${-((screenHeight * 0.35) / 2)}px) scale(0.65) rotate(180deg);
    }
    100%{
        transform: translate(${screenWidth + (screenWidth * 0.3)}px, -${screenHeight * 0.35}px)scale(1) rotate(0deg);
    }
}
`;



document.head.appendChild(styleElement);