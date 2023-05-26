//En array av färger och en variabel som håller vilken färg det ska vara
var colors = ["red", "green", "blue", "yellow", "white"];
var current_index = 0;

function change_bg()
{
    // Hämtar body elemnt och ändrar backgrunds färgen beroende på index
    var body = document.body;
    body.style.backgroundColor = colors[current_index];

    // Ökar indexen med +1 men återställer den till 0 om den når ett värde högre än vad som finns i arrayen
    current_index = (current_index + 1) % colors.length;
}

//Funktion för att visa good vibes
function good_vibes()
{
    document.getElementById("vibes").style.display = "block";
}


//Funktion för att visa tiden
function time()
{
    document.getElementById("time").innerHTML = Date();
    document.getElementById("time").style.display = "block"
}

function change_picture() 
{
    //Hämta bild element
    var image = document.getElementById("img");

    //Ta fram namnet på den nuvarande bild filen
    var currentImage = image.src.substring(image.src.lastIndexOf("/") + 1);

    //If sats för att byta mellan de olika bilderna
    if (currentImage === "img.png") 
    {
        image.src = "jump_up_kick_back.gif";
    } 
    else 
    {
        image.src = "img.png";
    }
}

//Funktion för att gömma bilden
function hide_picture()
{
    document.getElementById("img").style.display = "none"
}

//Funktion för att visa bilden
function show_picture()
{
    document.getElementById("img").style.display = "block"
}

//Funktion för att alla små detaljer med headern ska stämma
function header()
{
    document.getElementById("header").style.backgroundColor = "gray"
    document.getElementById("header").style.color = "whitesmoke"
    document.getElementById("header").style.alignItems = "center"

    document.getElementById("img").style.display = "block"
    document.getElementById("img").style.border = "0.5vw solid red"
    document.getElementById("img").style.borderRadius = "1vw"

    document.getElementById("vibes").style.display = "block";

    document.getElementById("time").innerHTML = Date();
    document.getElementById("time").style.display = "block"

}

//Funktion som tar bort headern
function remove_header()
{
    document.getElementById("header").style.display = "none"
}

//Funktion som visar headern igen plus ett litet meddelande
function show_header()
{
    document.getElementById("header").style.display = "flex"
    document.getElementById("farewell").style.display = "flex"
}