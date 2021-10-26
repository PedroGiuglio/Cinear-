class Peliculas {
    constructor(titulo, categoria, idioma, horarios, disponible, stock) {
        this.titulo = Peliculas.titulo
        this.categoria = Peliculas.categoria
        this.idioma = Peliculas.idioma
        this.horarios = Peliculas.horarios
        this.disponible = Peliculas.disponible
        this.stock = stock
    }
}

const movies = document.getElementsByClassName("movies");
console.log(document.getElementsByTagName("div"))

for (const movie of movies) {
    console.log(movie.innerHTML)
}


// CARTELERA N° 1 //

const cartelera = [{ id: 1, titulo: "Joker", categoria:"drama", idioma: "Subtitulada", img: "Joker.jpg", trailer:"https://youtu.be/xb380BSLPDc",},
{ id: 2, titulo: "El Padrino", categoria:"drama", idioma: "Doblada", img: "ElPadrino.jpg", trailer:"https://www.youtube.com/watch?v=tNqJ5yL2wVE"},
{ id: 3, titulo: "The Revenant", categoria:"drama", idioma: "Subtitulada", img: "TheRevenant.jpg", trailer:"https://www.youtube.com/watch?v=LoebZZ8K5N0"},
{ id: 4, titulo: "Back to the Future", categoria:"ciencia ficcion", idioma: "Doblada", img: "Back.jpg", trailer:"https://www.youtube.com/watch?v=qvsgGtivCgs"}];

for (const cartel of cartelera) {
    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<img class="imgPelicula" src="img/${cartel.img}" alt="">
                            <button type="button" ref="${cartel.trailer}" class="btn btn-info">+ INFO</button>
                            <p class="tituloPeli">${cartel.titulo}</p>
                            <button type="button" class="btn btn-success btn-xl">COMPRAR</button>`;
    document.getElementById("prueba").appendChild(contenedor);

}

// INFORMACION //

const info = [{ titulo: "Joker", sinapsis: "La pasión de Arthur Fleck, un hombre ignorado por la sociedad, es hacer reír a la gente. Sin embargo, una serie de trágicos sucesos harán que su visión del mundo se distorsione considerablemente convirtiéndolo en un brillante criminal.",
genero: "drama", idioma: "subtitulada", duración: "1:58 min",
actores: "Joaquin Phoenix, Bruce Wayne, Alfred Simmons", director: "Scott Ridley"},

{ titulo: "El Padrino", sinapsis: "Vito Corleone es el jefe de una de las familias que lideran la Cosa Nostra neoyorkina durante los años 40. Dos de sus hijos participan en las actividades ilícitas, mientras que Michael, el menor de los hijos, está distanciado del negocio familiar.",
genero: "drama", idioma: "subtitulada", duración: "545 minutos",
actores: "Marlon Brando, Al Pacino, Robert Duvall, James Caan", director: "Francis Coppola"},

{ titulo: "The Revenant", sinapsis: "En una expedición al desconocido oeste norteamericano, todavía habitado por tribus indias, Hugh Glass (Leonardo DiCaprio), un trampero, explorador y cazador de pieles es brutalmente atacado por un gigante oso grizzly. El hombre resulta gravemente herido, y sus propios compañeros le dan por muerto.",
genero: "drama", idioma: "subtitulada", duración: "1:58 min",
actores: "Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson", director: "Alejandro González Iñárritu"},

{ titulo: "Back to the future", sinapsis: "Relata las aventuras de Marty McFly, un adolescente rebelde e impulsivo que vive con sus padres y viaja accidentalmente al pasado desde 1985, su época, a 1955, la época en que sus padres se conocieron.",
genero: "drama", idioma: "subtitulada", duración: "117 minutos",
actores: "Michael J. Fox, Christopher Lloyd, Crispin Glover", director: "Robert Zemeckis"}];

for (const infor of info) {
    let reseña = document.createElement("ul");

    reseña.innerHTML = `<h5 class="card-title">${infor.titulo}</h5>
    <p class="card-text">${infor.sinapsis}</p>`;
    document.getElementById("popUp").appendChild(reseña);
}


// CARTELERA N° 2 //

const cartelera2 = [{ id: 5, titulo: "Avengers Endgame", idioma: "Subtitulada", img: "avengers.jpg" },
{ id: 6, titulo: "Star Wars New Hope", idioma: "Doblada", img: "star.jpg" },
{ id: 7, titulo: "Jurassic Park", idioma: "Subtitulada", img: "jurassic.jpg" },
{ id: 8, titulo: "Free Guy", idioma: "Doblada", img: "Free.jpg" }];

for (const cartel2 of cartelera2) {
    let contenedor2 = document.createElement("div");

    contenedor2.innerHTML = `<img class="imgPelicula" src="img/${cartel2.img}" alt=""> 
                            <p class="tituloPeli">" ${cartel2.titulo} "</p>
                            <b class="idiomaPeli">${cartel2.idioma}</b>
                            <button type="button" class="btn btn-primary btn-xl btn-comprar">Comprar entrada</button>`;
    document.getElementById("prueba2").appendChild(contenedor2)
}


// BUTTONS BACKGROUND //

function btnChanger() {
    let bg = document.getElementById("caja").style.background = "blue";
    let font = document.getElementById("prueba").style.color = "white";
    console.log(colorLocalStorage);
}

function btnChanger2() {
    let bg = document.getElementById("caja").style.background = "white";
    let font = document.getElementById("prueba").style.color = "black";
    console.log(colorLocalStorage2);
}

function btnChanger3() {
    let bg = document.getElementById("caja").style.background = "black";
    let font = document.getElementById("prueba").style.color = "white";
    console.log(colorLocalStorage3);
}


const button1 = "Modo BLUE activado"
localStorage.setItem("Boton1",button1)

const colorLocalStorage = localStorage.getItem("Boton1");

const button2 = "Modo LIGHT Activado"
localStorage.setItem("Boton2",button2);

const colorLocalStorage2 = localStorage.getItem("Boton2");

const button3 = "Modo DARK Activado"
localStorage.setItem("Boton3",button3)

const colorLocalStorage3 = localStorage.getItem("Boton3");



// CASILLA - NEWSTELLER //

let miFormulario = document.getElementById("forms");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    console.log(e)
    e.preventDefault();
    alert("¡Formulario Enviado!");
}




