"use strict";
//declara un objeto para facilitar la lectura del códgo con sus propiedades
let tecla =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
};

//Seleccióna al canvas
let cuadrito = document.getElementById("lineDrawing");
let context = cuadrito.getContext("2d");
//Declara las variables y setea posición inicial para la linea
let x = 150;
let y = 150;

let drawCheck = false;
cuadrito.addEventListener("mousedown", dibujarMouse);
function dibujarMouse(mouseInit)
{
    drawCheck = true;
    x = mouseInit.offsetX;
    y = mouseInit.offsetY;
    cuadrito.addEventListener("mousemove", mouse);
    function mouse(mouseTrack) 
    {
        if (drawCheck === true)
        {
            let colorcito = "red";
            let mousePositionX = mouseTrack.offsetX;
            let mousePositionY = mouseTrack.offsetY;
            dibujarLinea(colorcito, x, y, mousePositionX, mousePositionY, context);
            x = mousePositionX;
            y = mousePositionY;
            cuadrito.addEventListener("mouseup", endDrawing);
            function endDrawing() 
            {
                drawCheck = false;
            };
        };
    };
};

//Activa la funcion para dibujar when se apreta una tecla.
document.addEventListener("keydown", dibujarTeclado);

//Función de trazo usada en el switch de la funcion dibujar. El switch solo se activa con tecla = flechas
function dibujarLinea(color, xi, yi, xf, yf, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
};

function dibujarTeclado(event)
{
    let colorcito = "blue"
    let movimiento = 1;

    //event.keyCode = número de la tecla && tecla.X = al número declarado en las valriables arriba
    switch(event.keyCode)
    {
        case tecla.DOWN: 
            dibujarLinea(colorcito, x, y, x, y + movimiento, context);
            y += movimiento;
        break;
        case tecla.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, context);
            y -= movimiento;
        break;
        case tecla.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, context);
            x -= movimiento;
        break;
        case tecla.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, context);
            x += movimiento;
        break;
    };
};