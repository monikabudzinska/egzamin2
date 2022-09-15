const gamePlane = document.querySelector('.gamePlane')

function makewall(x, y, w, h, type ='wall'){
   
    let color = 'green'
    if(type =='start') {color = 'blue'}
    if(type =='meta') {color = 'red'}
    
    
    const wall = document.createElement('div')
    wall.style.cssText = `
    background : ${color};
    width : ${w}%;
    height : ${h}%;
    left : ${x}%;
    top : ${y}%;
    position:absolute;
    border-radius:10px;
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    `
    wall.className = 'wall'
    if(type != 'wall'){
        wall.className += ' '+type;
    }
    gamePlane.append(wall)
}
//makewall(50,30,20,20)
//makewall(50,30,20,20)
const map = [
    [0,0,20,20,'start'],
    [10,20,20,10],
    [20,30,20,10],
    [30,40,20,10],
    [40,50,20,10],
    [50,60,20,10],
    [60,70,30,10],
    [80,80,20,20,'meta']
  ]
  
for(const wall of map){
    makewall(...wall)
}
const game = {
    buttons :  {
        start : document.querySelector('.start'),
        meta : document.querySelector('.meta'),
        walls: document.querySelectorAll('.wall'),
    },
    init(){
        game.buttons.start.onclick = function(){game.start()}
    },
    start(){
        game.buttons.start.onclick = ""
        game.buttons.meta.addEventListener('mousemove', game.over)
        gamePlane.addEventListener('mousemove', game.gamePlaneListener)
        for(const wall of game.buttons.walls){
            wall.addEventListener('mousemove', game.wallListener)
        }
        console.log("GAME STARTED")
    },
    wallListener(e){
        e.stopPropagation()
    },

    gamePlaneListener(e){
        game.over(false)
    },
    over(result){
        if(result){
            modal.show('WYGRANA')
        }
        else{
            modal.show('PRZEGRANA')
        }
        game.buttons.meta.removeEventListener('mousemove', game.over)
        gamePlane.removeEventListener('mousemove', game.gamePlaneListener)
        for(const wall of game.buttons.walls){
            wall.removeEventListener('mousemove', game.wallListener)
        }
        game.init()
    }
}

const modal = {
    dom : document.createElement('div'),
    init(){
        modal.dom.style.cssText = `
        background: purple;
        text-align: center;
        border: 5px dashed pink;
        position: fixed;
        width: 80vw;
        height: 50vh;
        left: 10vw;
        top: 25vh;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-radius:10px;
        display:none;
        -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
        -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
        font-family: 'Bungee Spice', cursive;
        font-family: 'Caveat', cursive;      
        `
        document.body.append(modal.dom)
        modal.h1 = document.createElement("h1")
        modal.h1.innerHTML = "XX"
        modal.dom.append(modal.h1)

        const button = document.createElement("button")
        button.innerHTML = "OK"
        button.style.cssText = 
        `padding:1rem 4rem;
        border-radius:1rem;
        cursor:pointer;
        -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
        -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
        box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
        background: yellow;
        `
        button.onclick = function (){ modal.hide() }
        modal.dom.append(button)

    },
    show(text){
        modal.dom.style.display = "flex";
        modal.h1.innerHTML = text
       
    },
    hide(){modal.dom.style.display = "none";
    }
}

modal.init()
modal.show('KLIKNIJ NA NIEBISEKI KAFELEK, ABY ROZPOCZAC GRE')
game.init()
