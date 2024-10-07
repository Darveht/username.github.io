// JavaScript para la interactividad y manejo de datos
const animes = {
    'emision': [
           
        {
  "title": "Murai no Koi",
  "year": 2024,
  "description": "Comedia romántica sobre un estudiante que intenta conquistar a su maestra otaku",
  "imageUrl": "https://static.zerochan.net/Murai.no.Koi.full.4218366.jpg",
  "tags": ["comedia romántica", "escolar"]
},
{
  "title": "2.5 Jigen no Ririsa",
  "year": 2024,
  "description": "Okumura, un otaku que solo tiene interés en personajes de manga en 2D. Su vida cambia cuando Lilysa, una chica apasionada por el cosplay, se une a su club de manga y lo convence de ser su fotógrafo.",
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMDkyMjFjYzctYWIwNC00ZWNmLTgxNDYtODRkYjAyNmY5YjRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  "tags": ["romance", "fantasía", "vida cotidiana"]
},
{
  "title": "Make Heroine ha Oosugiru",
  "year": 2024,
  "description": " Una comedia romántica que sigue a varias chicas que no logran conquistar a sus intereses amorosos. La serie se centra en sus historias y cómo lidian con sus fracasos amorosos",
  "imageUrl": "https://cdn.myanimelist.net/s/common/uploaded_files/1710669492-aa0f9962bb1449160fdd91cc161e749a.jpeg",
  "tags": ["comedia", "romance", "vida escolar"]
},
       { title: 'El túnel de los deseos', year: 2022, description: 'Un túnel mágico concede deseos, pero a cambio, roba tiempo de vida. Dos adolescentes lo descubren y enfrentan sus deseos y consecuencias.', imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjRjNmIzZWItMmNmZC00NDc5LWFlMTYtZGZhNDcxNDZmMjljXkEyXkFqcGc@._V1_.jpg' },
         
         {
  "title": "Mobile Suit Gundam Seed Freedom",
  "year": 2024,
  "description": "En un futuro donde la humanidad ha colonizado el espacio, las tensiones entre las colonias y la Tierra se intensifican. Un joven piloto se encuentra en medio del conflicto, pilotando un poderoso Mobile Suit para proteger a sus seres queridos y luchar por la libertad.",
  "imageUrl": "https://external-preview.redd.it/mobile-suit-gundam-seed-freedom-new-visual-v0-lEVReD-qNd-K40Xf2sCpDEtk-tIHdHKWIa4qiIRDXhQ.jpg?auto=webp&s=0633530b9916c3b3b9915431b6a0f2339ed5651d",
  "tags": ["película nueva"]
},
         
         { 
  "title": "Echoes of Eternity", 
  "year": 2024, 
  "description": "En una sociedad futurista, un joven con la capacidad de ver ecos del pasado se convierte en la clave para desentrañar un misterio antiguo que amenaza con desestabilizar el equilibrio del mundo. A medida que viaja a través de los recuerdos de personas olvidadas, descubre secretos que cambiarán su vida para siempre.", 
  "imageUrl": "https://www.royalroadcdn.com/public/covers-large/80798-echoes-of-eternity.jpg?time=1706697588"
},
        { title: 'The rise Of Kioshi', year: 2024, description: 'Avatar, The Last Airbender: The Rise of Kyoshi, también aludida únicamente como The Rise of Kyoshi, es la primera novela de fantasía estadounidense de la saga de Crónicas del Avatar perteneciente a la literatura juvenil publicada el 16 de julio de 2019 por Amulet Books de la editorial Abrams.', imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDY2YmVjYWYtZTYwNS00ZWY1LTgwNzQtMGM2OTEwMjg3OGRmXkEyXkFqcGdeQXVyNTI4MzI4NTQ@._V1_FMjpg_UX1000_.jpg' },
          
 
        {
  "title": "Blue Giant",
  "year": 2024,
  "description": "La historia sigue a Dai Miyamoto, un joven apasionado por el jazz que sueña con convertirse en el mejor saxofonista del mundo. A través de su viaje, enfrenta desafíos y encuentra inspiración en la música y las personas que conoce.",
  "imageUrl": "https://preview.redd.it/blue-giant-new-key-visual-v0-vko20diq5fta1.jpg?auto=webp&s=e7cea7014014a6990305ceacb9253d5a9f149643"
},

        { title: 'Pseudo Harem', year: 2024,description: 'La historia sigue a Eiji Kitahama, un estudiante de segundo año de secundaria que sueña con ser popular y tener un harem de chicas que lo adoren. Su compañera de club de teatro, Rin Nanakura, usa sus habilidades de actuación para interpretar a varias chicas que forman parte de este harem ficticio, todo mientras oculta sus verdaderos sentimientos por Eiji', imageUrl: 'https://m.media-amazon.com/images/M/MV5BZWQzMDBlOGItNGVjOC00YjUzLWI5MWMtMThlM2MwZmU2ZTRmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg '},
         
        { title: 'Shikanoko Nokonoko Koshitantan', year: 2024,description: 'Torako Koshi rescata a una extraña niña-ciervo que cuelga de unos cables eléctricos de camino a la escuela. Luego, la niña pronto se transfiere a su escuela, se presenta como Noko Shikanoko y comienza a arrastrar a Torako a sus extrañas travesuras.', imageUrl: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/6533e54a54f7a69c806920607bc8238e.jpg' },
        { title: 'Fairy Tail: 100-nen Quest', year: 2024, description: 'Fairy Tail, que trata sobre Natsu Dragneel y su equipo del gremio que intentan completar una misión de un siglo de duración que nadie ha logrado terminar', imageUrl: 'https://a.storyblok.com/f/178900/1984x2805/ea41558285/fairy-tail-100-years-quest-main-visual.jpg/m/filters:quality(95)format(webp)' },
        { title: 'Isekai Yururi Kikou', year: 2024, description: 'Un viaje por otro mundo', imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzUyNDFjNGUtZjBhNS00MTQ4LTkxNTEtMGYyMjFkNjNjZmE2XkEyXkFqcGdeQXVyNjA5MDIyMzU@._V1_.jpg' }
    ],
    'recomendados': [
        { title: 'One Piece', year: 1999, description: 'Piratas buscan el legendario tesoro One Piece para convertirse en el Rey de los Piratas.', imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTI1MmI4NzItYTg2Yy00NmVkLWIwY2EtZTdhZTNkOTQ5OTZjXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_FMjpg_UX1000_.jpg' },
          {
    "title": "Code Geass",
    "year": 2006,
    "description": "Un príncipe exiliado obtiene el poder del Geass y lidera una rebelión contra el Imperio de Britannia.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/7/74/Code_Geass_R1_box_set_cover.jpg"
  },
  {
    "title": "Violet Evergarden",
    "year": 2018,
    "description": "Una ex-soldado trabaja como escritora de cartas mientras busca entender las emociones humanas.",
    "imageUrl": "https://media.themoviedb.org/t/p/w500/ImvHbM4GsJJykarnOzhtpG6ax6.jpg"
  },
  {
    "title": "Your Lie in April",
    "year": 2014,
    "description": "Un pianista prodigio que pierde la capacidad de escuchar el piano encuentra inspiración en una violinista.",
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BZGMyYmFmNzgtMWQ4NS00MWE2LTg4YmEtZGY1MTBiODE0YmE5XkEyXkFqcGc@._V1_.jpg"
  },
           {
    "title": "Haikyuu!!",
    "year": 2014,
    "description": "Un equipo de voleibol de secundaria lucha por convertirse en el mejor de Japón.",
    "imageUrl": "https://m.media-amazon.com/images/I/71DRngOUBAS._AC_UF894,1000_QL80_.jpg"
  },
  {
    "title": "Made in Abyss",
    "year": 2017,
    "description": "Una niña y un robot exploran un abismo lleno de criaturas misteriosas y peligrosas.",
    "imageUrl": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/dc21faacccb89df40fff14f7e0e1ff00.jpe"
  },
  {
    "title": "JoJo's Bizarre Adventure",
    "year": 2012,
    "description": "Varias generaciones de la familia Joestar luchan contra enemigos sobrenaturales usando poderes especiales.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/a/aa/JoJo_Part_1_Phantom_Blood.jpg"
  },
          { 
    "title": "Naruto", 
    "year": 2002, 
    "description": "Un joven ninja busca reconocimiento y sueña con convertirse en Hokage.", 
    "imageUrl": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/01ec367b44f0a568430a957e042639af.jpg" 
  },
  { 
    "title": "Attack on Titan", 
    "year": 2013, 
    "description": "La humanidad lucha por sobrevivir contra gigantes devoradores de hombres.", 
    "imageUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg" 
  },
  { 
    "title": "Fullmetal Alchemist: Brotherhood", 
    "year": 2009, 
    "description": "Dos hermanos alquimistas buscan la Piedra Filosofal para restaurar sus cuerpos.", 
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg" 
  },
          { 
    "title": "Death Note", 
    "year": 2006, 
    "description": "Un estudiante encuentra un cuaderno que le permite matar a cualquiera cuyo nombre escriba en él.", 
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" 
  },
  { 
    "title": "My Hero Academia", 
    "year": 2016, 
    "description": "En un mundo donde casi todos tienen superpoderes, un joven sin poderes sueña con ser un héroe.", 
    "imageUrl": "https://m.media-amazon.com/images/I/71NtEsaon5L._AC_UF894,1000_QL80_.jpg" 
  },
  
      
  { 
    "title": "鬼滅の刃", 
    "year": 2020, 
    "description": "炭治郎とその友人たちは、強力な剣士と力を合わせて、走行中の列車で移動する鬼と戦います。",
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BNzEzYjhkYTctMWNmZS00MTc5LWI4OWUtZjFkNzNkYTNkMTJlXkEyXkFqcGc@._V1_.jpg" 
  },
        
         { 
    "title": "Sword Art Online", 
    "year": 2012, 
    "description": "Jugadores quedan atrapados en un videojuego de realidad virtual y deben luchar para sobrevivir.", 
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BYjY4MDU2YjMtNzY1MC00ODg1LWIwMzYtMWE5YTA3YTI4ZjMxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" 
  },
      { 
    "title": "Steins;Gate", 
    "year": 2011, 
    "description": "Un grupo de amigos descubre cómo enviar mensajes al pasado, alterando el curso de la historia.", 
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg" 
  },
  { 
    "title": "One Punch Man", 
    "year": 2015, 
    "description": "Un superhéroe que puede derrotar a cualquier enemigo con un solo golpe busca un verdadero desafío.", 
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg" 
  },
  { 
    "title": "Bleach", 
    "year": 2004, 
    "description": "Un adolescente obtiene poderes de segador de almas y debe proteger a los vivos y a los muertos.", 
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg" 
  },
  { 
    "title": "Fairy Tail", 
    "year": 2009, 
    "description": "Un grupo de magos se embarca en aventuras y lucha contra enemigos poderosos.", 
    "imageUrl": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/18638d44e180fd1b51870106b88e46e4.jpg" 
  },
  { 
    "title": "Cowboy Bebop", 
    "year": 1998, 
    "description": "Un grupo de cazarrecompensas viaja por el espacio en busca de criminales.", 
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/a/a9/Cowboy_Bebop_key_visual.jpg" 
  },
  { 
    "title": "Neon Genesis Evangelion", 
    "year": 1995, 
    "description": "Adolescentes pilotan mechas para proteger a la humanidad de seres misteriosos.", 
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BYzljMDQxNmMtMGQyYS00ZDFkLWEyNzktNmQ0OTYzZWJkZTg2XkEyXkFqcGc@._V1_.jpg" 
  },
  { 
    "title": "Tokyo Ghoul", 
    "year": 2014, 
    "description": "Un joven se convierte en mitad ghoul y debe adaptarse a su nueva vida.", 
    "imageUrl": "https://m.media-amazon.com/images/I/615UoMEsDEL._AC_UF894,1000_QL80_.jpg" 
  },
  { 
    "title": "Hunter x Hunter", 
    "year": 2011, 
    "description": "Un joven busca a su padre y se convierte en un cazador profesional.", 
    "imageUrl": "https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" 
  },
        { title: 'TSUKIMICHI -Fantasía iluminada por la luna', year: 2021, description: 'Misumi Makoto, un estudiante de secundaria, es transportado a otro mundo por el dios Tsukuyomi para convertirse en un héroe. Sin embargo, una diosa decide que no lo quiere como héroe y lo envía a los confines del mundo con solo la habilidad de entender los lenguajes de los seres no humanos. Con la ayuda de algunos poderes otorgados por Tsukuyomi, Makoto debe encontrar su propio camino y lugar en este nuevo mundo', imageUrl: 'https://cdn.shopify.com/s/files/1/0259/6166/0519/files/Screenshot_20210429-221952_Facebook_480x480.jpg?v=1619759932' },
        { title: 'Fruits Basket', year: 2021, description: 'Tohru Honda pensó que su vida se encaminaba hacia la desgracia cuando una tragedia familiar la dejó viviendo en una tienda de campaña. Cuando el misterioso clan Soma descubre su pequeña casa, de repente se encuentra viviendo con Yuki, Kyo y Shigure Soma. Pero rápidamente descubre que su familia tiene un extraño secreto: cuando son abrazados por el sexo opuesto, ¡se convierten en los animales del Zodíaco!', imageUrl: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/0a34f193aa46a27cd75f5ee553834c41.jpg' },
        { title: 'That Time I Got Reincarnated as a Slime', year: 2018, description: 'La historia sigue a Satoru Mikami, un hombre de 37 años que lleva una vida monótona y sin muchas emociones. Un día, es asesinado por un ladrón y, en lugar de morir, se reencarna en un mundo de fantasía como un slime, una criatura gelatinosa. En este nuevo mundo, adopta el nombre de Rimuru Tempest y descubre que tiene habilidades únicas, como la capacidad de devorar cualquier cosa y adquirir sus poderes. A medida que explora su nuevo entorno, Rimuru se propone crear un lugar donde todas las razas puedan vivir en paz y armonía', imageUrl: 'https://m.media-amazon.com/images/M/MV5BM2IwMDM4MDgtZWU2Zi00YjA2LWJhOTItNGUzMWM1N2E4ZTk3XkEyXkFqcGc@._V1_.jpg' },
        { title: 'Mob Psycho 100', year: 2016, description: 'Kageyama Shigeo, un estudiante con poderes sobrenaturales, lleva una vida emocionalmente perturbada cuando se da cuenta de lo peligroso que son sus poderes.', imageUrl: 'https://m.media-amazon.com/images/M/MV5BYWIwZjhkMzgtOWExYi00ZGIwLTg1ZTktNjQyZWIxYWFmZTc0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg' },
        { title: 'My Hero Academia', year: 2016, description: 'En un mundo de superpoderes, un chico sin habilidades lucha por convertirse en héroe.', imageUrl: 'https://images.justwatch.com/poster/261483319/s718/boku-no-hero-academy.jpg' }
    ],
    'populares': [
         
        { title: 'Solo Leveling', year: 2024, description: 'Sigue la historia de Sung Jin-Woo, el cazador más débil de todos en un mundo donde los humanos y los monstruos están conectados por una extraña puerta. Jin-Woo obtiene habilidades especiales y comienza a subir de nivel rápidamente.', imageUrl: 'https://m.media-amazon.com/images/M/MV5BYWMwYmYwNjMtMmE0MC00ODdhLTgzYzQtYzA3MDQ5OWRmZWNhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg' },
         {
        "title": "Chainsaw Man",
        "year": 2024,
        "description": "Denji, un joven cazador de demonios, se fusiona con su perro demonio Pochita y se convierte en Chainsaw Man. La serie sigue sus sangrientas batallas y su lucha por una vida mejor.",
        "imageUrl": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/3b70d9f3c112faa30940bcc26f1cff98.jpg"
    },
        {
        "title": "One Piece",
        "year": 2024,
        "description": "Luffy y su tripulación continúan sus aventuras en busca del One Piece. La serie sigue siendo un pilar en el mundo del anime.",
        "imageUrl": "https://images.justwatch.com/poster/248497985/s332/one-piece"
    },
        {
        "title": "Demon Slayer: Kimetsu no Yaiba - Arco de la Villa de los Herreros",
        "year": 2024,
        "description": "Tanjiro y sus amigos viajan a la Villa de los Herreros para reparar su espada y enfrentarse a nuevos demonios.",
        "imageUrl": "https://pbs.twimg.com/media/FvLSpk3WAAEeDwU?format=jpg&name=4096x4096"
    },
        { title: 'Hunter x Hunter', year: 2011, description: 'Un joven emprende una búsqueda épica para encontrar a su padre y convertirse en cazador.', imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg' }
      
    ],
    'vistos': [
        { title: 'Dragon Ball Z', year: 1989, description: 'Guerreros luchan para proteger la Tierra de poderosos enemigos extraterrestres.', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMGU2NjZhMmUtNTYzYS00OTMyLTkzZDAtMTkzNDIwNWFkM2I0XkEyXkFqcGdeQXVyMTY3NTgwODk5._V1_FMjpg_UX1000_.jpg' },
        { title: 'Fullmetal Alchemist: Brotherhood', year: 2009, description: 'Dos hermanos usan alquimia para buscar la piedra filosofal y restaurar sus cuerpos.', imageUrl: 'https://m.media-amazon.com/images/M/MV5BNDczZWMyMjEtZDI0ZS00YThjLWE2MjEtNTIxNmVmZDhkNDg5XkEyXkFqcGc@._V1_.jpg' },
        { title: 'Death Note', year: 2006, description: 'Un estudiante encuentra un cuaderno que mata a quien escriba su nombre en él.', imageUrl: 'https://es.web.img3.acsta.net/pictures/14/05/28/20/47/033239.jpg' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    populateCarousel('carousel-emision', animes.emision);
    populateCarousel('carousel-recomendados', animes.recomendados);
    populateCarousel('carousel-populares', animes.populares);
    populateCarousel('carousel-vistos', animes.vistos);
});

function populateCarousel(carouselId, animeList) {
    const carousel = document.getElementById(carouselId);
    animeList.forEach(anime => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        item.innerHTML = `
            <img src="${anime.imageUrl}" alt="${anime.title}">
            <div class="item-details">
                ${anime.title}
            </div>
        `;
        item.onclick = () => showModal(anime.title, anime.description, anime.year);
        carousel.appendChild(item);
    });
}

function showModal(title, description, year) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-year').innerText = `Año: ${year}`;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function vote(type) {
    const notification = document.getElementById('notifications');
    notification.innerText = type === 'like' ? '¡Gracias por tu voto positivo!' : '¡Gracias por tu voto!';
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

function addToList(title) {
    alert(`Añadido "${title}" a tu lista.`);
}

function searchAnime() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const allAnimes = Object.values(animes).flat();
    const result = allAnimes.filter(anime => anime.title.toLowerCase().includes(input));
    
    if (result.length > 0) {
        const anime = result[0];
        showModal(anime.title, anime.description, anime.year);
    } else {
        alert('Anime no encontrado.');
    }
}

function moveCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollBy({
        top: 0,
        left: direction * 200, // Ajusta el número para cambiar la cantidad de desplazamiento
        behavior: 'smooth'
    });
}



// script.js
document.addEventListener('DOMContentLoaded', () => {
    const followButtons = document.querySelectorAll('.follow-btn');

    followButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === 'Seguir') {
                button.textContent = 'Siguiendo';
                button.style.backgroundColor = '#b81d24';
            } else {
                button.textContent = 'Seguir';
                button.style.backgroundColor = '#e50914';
            }
        });
    });
});






// carousel.js

// Variable para rastrear la posición actual del carrusel
let currentScrollPosition = 0;
const scrollAmount = 220; // Ajusta el valor según el tamaño del contenedor del episodio

// Función para mover al episodio anterior en el carrusel
function prevEpisode() {
    const carousel = document.querySelector('.episodios-carousel');
    currentScrollPosition -= scrollAmount;
    carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
}

// Función para mover al siguiente episodio en el carrusel
function nextEpisode() {
    const carousel = document.querySelector('.episodios-carousel');
    currentScrollPosition += scrollAmount;
    carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Función para reproducir el episodio en el iframe
function playEpisode(element) {
    const url = element.getAttribute('data-url');
    const viewer = document.getElementById('episode-viewer');
    viewer.src = url; // Actualiza el iframe con el URL del episodio
}