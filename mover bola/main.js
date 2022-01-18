
    let x = 0,
    y = 0;

function mover (x,y) {
   document.getElementById("circulo").style.transform = `translate(${x}px,${y}px)`;
   //document.getElementById("valor").innerHTML = `x:${x},y:${y}`;
}

document.addEventListener("keydown", function (e) {

    switch (e.keyCode) {
        case 37: //IZQUIERDA
            mover(x,y);
            if (x>=0) x--;
            break;
        case 38: //arriba
            mover(x,y);
            if (y>=0) y--;
            break;
        case 39: //derecha
            mover(x,y);
            if (x<=748) x++;
            break;
        case 40: //abajo
            mover(x,y);
            if (y<=530) y++;
            break;

    }
})



