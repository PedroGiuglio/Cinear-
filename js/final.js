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

const cartelera = [{ id: 1, titulo: "Joker", categoria:"Drama", idioma: "Subtitulada", duracion:"122 minutos", actores:"<span>Joaquin Phoenix </span>, Robert De Niro, Zazie Beetz", director:"Todd Phillips", img: "Joker.jpg", trailer:"https://youtu.be/xb380BSLPDc"},
{ id: 2, titulo: "El Padrino", categoria:"Drama", idioma: "Doblada", duracion:"177 minutos", actores:"<span>Marlon Brando</span> , Al Pacino, Robert Duvall", director:"Francis Ford Coppola", img: "ElPadrino.jpg", trailer:"https://www.youtube.com/watch?v=tNqJ5yL2wVE"},
{ id: 3, titulo: "The Revenant", categoria:"Drama", idioma: "Subtitulada", duracion:"156 minutos", actores:"<span>Leonardo DiCaprio</span> , Tom Hardy, Domhnall Gleeson", director:"Alejandro González Iñárritu", img: "TheRevenant.jpg", trailer:"https://www.youtube.com/watch?v=LoebZZ8K5N0"},
{ id: 4, titulo: "Back to the Future", categoria:"Ciencia Ficcion", idioma: "Doblada", duracion:"117 minutos", actores:"<span>Michael J. Fox</span> , Christopher Lloyd, Crispin Glover",  director:"Robert Zemeckis", img: "Back.jpg", trailer:"https://www.youtube.com/watch?v=qvsgGtivCgs"}];

for (const cartel of cartelera) {
    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<img class="imgPelicula" src="img/${cartel.img}" alt="">
                            <button type="button" ref="${cartel.trailer}" class="btn btn-info BTN-1">Tráiler</button>
                            <p class="tituloPeli">${cartel.titulo}</p>
                            <button type="button" class="btn btn-success btn-xl">Comprar entrada</button>`;
    document.getElementById("prueba").appendChild(contenedor);
}

for (const cartel of cartelera) {
    let conten = document.createElement("div");

    conten.innerHTML = `<p class="tituloPeli">${cartel.titulo}</p>
                        <p class="catePeli">Género: ${cartel.categoria}</p>
                        <p class="idiomaPeli">${cartel.idioma}</p>
                        <p class="duracionPeli">${cartel.duracion}</p>
                        <p class="actorPeli">Actores: ${cartel.actores}</p>
                        <p class="directorPeli">Director: ${cartel.director}</p>`
    document.getElementById("modal").appendChild(conten);
}



// CARTELERA N° 2 - 4D //

const cartelera2 = [{ id: 5, titulo: "Avengers Endgame", categoria:"SuperHeroes", idioma: "Subtitulada", duracion:"180 minutos", actores:"<span>Robert Downey, Jr </span>, Chris Evans, Scarlett Johanson", director:"Joe Russo, Anthony Russo", img: "avengers.jpg", trailer:"https://www.youtube.com/watch?v=znk2OICHbjY"},
{ id: 6, titulo: "Star Wars New Hope", categoria:"Ciencia Ficción", idioma: "Doblada", duracion:"121 minutos", actores:"<span>Mark Hamill </span>, Carrie Fisher, Harrison Ford", director:"George Lucas", img: "star.jpg", trailer:"https://www.youtube.com/watch?v=MpkrMqmmy5k"},
{ id: 7, titulo: "Jurassic Park", idioma: "Subtitulada", categoria:"Ciencia Ficción", duracion:"121 minutos", actores:"<span>Jeff Goldblum </span>, Laura Dern, Sam Neill", director:"Steven Spielberg", img: "jurassic.jpg", trailer:"https://www.youtube.com/watch?v=lc0UehYemQA"},
{ id: 8, titulo: "Harry Potter IV", idioma: "Doblada",  categoria:"Literatura Fantástica", duracion:"139 minutos", actores:"<span>Daniel Radcliffe </span>, Emma Watson, Rupert Grint", director:"Alfonso Cuarón", img: "harry1.jpg", trailer:"https://www.youtube.com/watch?v=1ZdlAg3j8nI" }];

for (const cartel2 of cartelera2) {
    let contenedor2 = document.createElement("div");

    contenedor2.innerHTML = `<img class="imgPelicula2" src="img/${cartel2.img}" alt=""> 
                            <button type="button" ref="${cartel2.trailer}" class="btn btn-info BTN-2">Tráiler</button>
                            <p class="tituloPeli"> ${cartel2.titulo} </p>
                            <button type="button" class="btn btn-success btn-xl btn-comprar">Comprar entrada</button>`;
    document.getElementById("prueba2").appendChild(contenedor2)
}

for (const cartel2 of cartelera2) {
    let conten = document.createElement("div");

    conten.innerHTML = `<p class="tituloPeli">${cartel2.titulo}</p>
                        <p class="catePeli">Género: ${cartel2.categoria}</p>
                        <p class="idiomaPeli">${cartel2.idioma}</p>
                        <p class="duracionPeli">${cartel2.duracion}</p>
                        <p class="actorPeli">Actores: ${cartel2.actores}</p>
                        <p class="directorPeli">Director: ${cartel2.director}</p>`
    document.getElementById("modal2").appendChild(conten);
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
localStorage.setItem("Boton1",button1);

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


// FORM - LOGIN //

function go(){
        if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
                document.form.submit(); 
                location.replace("index.html")
            } 
            else{
        alert("Usuario y/o contraseña incorrectos")
    }
}

