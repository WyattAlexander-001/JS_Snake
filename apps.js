let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(0,0,30,30)
}

function remove(){
    ctx.clearRect(0,0,300,300)
}