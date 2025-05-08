//estrutura do js
function setup() {createCanvas(400, 400);}

//Variáveis
let OlhoX
let OlhoY

function draw()
{background("red");

//////////////////////////////////////////////////////////////////
 
//Olho Direito
circle(200, 200, 300);
fill("white")

//Olho Esquerdo
circle(150, 150, 60);
fill("white")
 
//Rosto
circle(250, 150, 60);

//Boca
fill("red")
line(110, 265, 290, 265);
 
//Nariz
fill("rgb(195,143,143)")
triangle(202, 184, 157, 224, 242, 223);

//Chapéu
 fill("#FFC107")
triangle(300, 80, 200, 10, 80, 100);
 
//Pescoço
fill("brown")
square(175, 350, 55);
strokeWeight(2.5)

//Script Pupila
OlhoX = map(mouseX, 0, 400, 130, 145)
OlhoY = map(mouseY, 0, 400, 130, 145)
circle(OlhoX, OlhoY, 10)
circle(OlhoX+100, OlhoY, 10)

 
}
