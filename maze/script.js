const gamePlane = document.querySelector('.gamePlane')

function makewall(x, y, w, h, type ='wall'){
   
    let color = 'green'
    if(type =='start') {color = 'blue'}
    if(type =='meta') {color = 'orange'}
    
    const wall = document.createElement('div')
    wall.style.cssText = `
    background : ${color};
    width : ${w}%;
    height : ${h}%;
    left : ${x}%;
    top : ${y}%;
    position:absolute;
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
        game.buttons.meta.addEventListener('mousemove', game.metaTrigger)
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
    metaTrigger(){
        game.over(true)
    },
    over(result){
        if(result){
            console.log("YOU WIN")
        }
        else{
            console.log("YOU LOSE")
        }
        game.buttons.meta.removeEventListener('mousemove', game.metaTrigger)
        gamePlane.removeEventListener('mousemove', game.gamePlaneListener)
        for(const wall of game.buttons.walls){
            wall.removeEventListener('mousemove', game.wallListener)
        }
        game.init()
    }

}


game.init()
