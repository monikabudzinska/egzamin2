
function makewall(x, y, u, h){
    const wall = document.createElement('div')
    wall.style.cssText = `
    background : green;
    width : $(w)%;
    heigh : $(h)%;
    left : 10%;
    top : 20%;
    position:absolute;
    `
    gamePlane.append(wall)

}
makewall(0,0,20,20)
