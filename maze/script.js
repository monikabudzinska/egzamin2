const gamePlane = document.querySelector('.gamePlane')
function makewall(x, y, w, h){
    const wall = document.createElement('div')
    wall.style.cssText = `
    background : green;
    width : ${w}%;
    height : ${h}%;
    left : ${x}%;
    top : ${y}%;
    position:absolute;
    `
    gamePlane.append(wall)

}
makewall(20,20,20,20)
