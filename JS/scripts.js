
/*BOTONES ASIDE*/
function hideShowFutbol(){
    var opcionFutbol = document.getElementById("alquilerFutbol");
    var opcionVolley = document.getElementById("alquilerVolley");
    var opcionEventos = document.getElementById("alquilerEventos");
    if (opcionFutbol.style.display == "none"){
        opcionFutbol.style.display = "flex";
        opcionVolley.style.display = "none";
        opcionEventos.style.display = "none";
    }   
} 
function hideShowVolley(){
    var opcionFutbol = document.getElementById("alquilerFutbol");
    var opcionVolley = document.getElementById("alquilerVolley");
    var opcionEventos = document.getElementById("alquilerEventos");
    if (opcionVolley.style.display == "none"){
        opcionFutbol.style.display = "none";
        opcionVolley.style.display = "flex";
        opcionEventos.style.display = "none";
    } 
}
function hideShowEventos(){
    var opcionFutbol = document.getElementById("alquilerFutbol");
    var opcionVolley = document.getElementById("alquilerVolley");
    var opcionEventos = document.getElementById("alquilerEventos");
    if (opcionEventos.style.display == "none"){
        opcionFutbol.style.display = "none";
        opcionVolley.style.display = "none";
        opcionEventos.style.display = "flex";
    }
}
/*CAROUSEL AUTOMÁTICO*/
var indice = 0;
carousel();

function carousel(){
  var i;
  var x = document.getElementsByClassName("carousel-auto");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  indice++;
  if (indice > x.length) {
      indice = 1;
    }
    x[indice-1].style.display = "flex";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}
function navTel(){
    var x = document.getElementById("contenedor-nav-alt");
    var y = document.getElementById("navbar");
    console.log(x.style.display);
    x.style.display = "block";
    y.style.display = "none";
}
function cerrarNav(){
    var x = document.getElementById("contenedor-nav-alt");
    var y = document.getElementById("navbar");
    x.style.display = "none";
    y.style.display = "block";
}

function carrouselIzq(){
    var w = document.getElementsByClassName("car-man");
    console.log(w[0].style.display);
    console.log(w[1].style.display);
    console.log(w[2].style.display);
    if(w[0].style.display == "flex"){
        w[0].style.display = "none";
        w[2].style.display = "flex";
        w[1].style.display = "none";
    }
    else if(w[2].style.display == "flex"){
        console.log("1");
        w[2].style.display = "none";
        w[1].style.display = "flex";
        w[0].style.display = "none";
    }
    else if(w[1].style.display == "flex"){
        console.log("2");
        w[1].style.display = "none";
        w[0].style.display = "flex";
        w[2].style.display = "none";
    }
    else{
        console.log("Ninguna de las anteriores");
    }
}
function carrouselDer(){
    var w = document.getElementsByClassName("car-man");
    console.log(w[0].style.display);
    console.log(w[1].style.display);
    console.log(w[2].style.display);

    if(w[0].style.display == "flex"){
        console.log("a");
        w[0].style.display = "none";
        w[1].style.display = "flex";
        w[2].style.display = "none";
        console.log(w[0].style.display);
        console.log(w[1].style.display);
        console.log(w[2].style.display);
    }
    else if(w[1].style.display == "flex"){
        console.log("1");
        w[1].style.display = "none";
        w[2].style.display = "flex";
        w[0].style.display = "none";

    }
    else if(w[2].style.display == "flex"){
        console.log("2");
        w[2].style.display = "none";
        w[0].style.display = "flex";
        w[1].style.display = "none";
    }
    else{
        console.log("Ninguna de las anteriores");
    }
}

/*VALIDACIÓN DE FORMULARIO*/
