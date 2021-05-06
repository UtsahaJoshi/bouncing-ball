var position = {x: 160, y: 0}
var bounce = false;

var ball = document.getElementById('ball');
ball.style.left = position.x + 'px';

setInterval(moveBall, 10);
  
function moveBall() {
    ball.style.top = position.y + 'px'
    if (!bounce) {
        position.y = position.y + 5;
    } else {
        position.y = position.y - 5;
    }

    if (position.y>=420) {
        bounce = true;
    } else if (position.y <=0){
        bounce = false;
    }
}

