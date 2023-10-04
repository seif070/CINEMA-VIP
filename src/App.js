import React, { useState } from 'react';

import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {
  const [films, setFilms] = useState([
    {
      titre: 'Blow',
      description: 'Poussé par lappât du gain, un avocat pénal se lance dans le trafic de drogue à la frontière américano-mexicaine. Fiancé à la belle Laura dont il est éperdument amoureux, il rêve de mener grand train avec elle. Il prend alors conseil auprès de Reiner, un ami déjà impliqué dans le trafic de cocaïne, qui lui ouvre les portes du milieu. Lavocat fait la connaissance de Westray, un intermédiaire en relation directe avec les membres du cartel.',
      
      posterURL: 'https://m.media-amazon.com/images/I/51ABCZ3C8TL._AC_UF1000,1000_QL80_.jpg',
      note: 9.5,
    },

    {
      titre: 'La Plateforme',
      description: 'Dans le futur, des prisonniers sont détenus dans des cellules verticales. Ceux qui logent dans les cellules supérieures sont nourris, tandis que ceux des cellules inférieures meurent de faim. Goreng, un détenu fraîchement débarqué, va se battre pour changer le système.',
      
      posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJHg57lYxrDQj8mqKk52Ky0XjL8FlkwlV6uBeOaXvUEBEwISqD',
      note: 7,
    },

    {
      titre: 'El Camino',
      description: 'Après avoir été libéré par Walter White du repaire du gang de Jack où il était séquestré, Jesse Pinkman doit se réconcilier avec son passé pour pouvoir prétendre à un avenir plus radieux, alors quil se trouve traqué par les forces de lordre.',
      
      posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuEzZgS_3oHR0HtGuwtiKa-9-Qwc381LXHAxnaV0JHtURP07iv',
      note: 7.3,
    },

    {
      titre: 'Gladiator',
      description: 'Le général romain Maximus est le plus fidèle soutien de lempereur Marc Aurèl il a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de lamour que lui voue lempereur, le fis de Marc Aurèle, Commode, sarroge brutalemnt le pouvoir puis ordonne larrestation du général et son exécution. Maximus échappe à ses assassins, mais ne peut empêcher le massacre de sa famille. Capturé par un marchand desclaves il devient gladiateur et prépare sa vengeance.',
        posterURL: 'https://m.media-amazon.com/images/I/61MSIFHAxML._AC_UF894,1000_QL80_.jpg',
             note: 9.4,
    },

    {
   titre: 'Man on Fire ',
         description: 'John W. Creasy, un ex-agent de la CIA devenu alcoolique, se fait engager comme garde du corps par Samuel Ramos, membre dune famille bourgeoise de Mexico empêcher un éventuel rapt de sa fille Pita. Les enlèvements sont en effet monnaie courante dans toute lAmérique latine Le garde du corps au bord du suicide exerce froidement son métier dans un premier temps rejetant la fillette de neuf ans qui cherche en lui un ami.',
    posterURL: 'https://musicart.xboxlive.com/7/d50c1200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      note: 8.8,
    },
    {
      titre: 'Immortale',
      description: 'John W. Creasy, un ex-agent de la CIA devenu alcoolique, se fait engager comme garde du corps par Samuel Ramos, membre dune famille bourgeoise de Mexico empêcher un éventuel rapt de sa fille Pita. Les enlèvements sont en effet monnaie courante dans toute lAmérique latine Le garde du corps au bord du suicide exerce froidement son métier dans un premier temps rejetant la fillette de neuf ans qui cherche en lui un ami.',
      posterURL: 'https://fr.web.img4.acsta.net/pictures/21/12/01/11/55/3274106.jpg',
        note: 7.9,
  

    },

  ]);

  const addFilm = (film) => {
    setFilms([...films, film]);
  };

  const filterFilms = (filters) => {

  };

  return (
    <div className="App">
      <h1>CiNEMA VIP</h1>
      <Filter onFilter={filterFilms} />

      <MovieList films={films} />
    </div>


  );
}

export default App;
