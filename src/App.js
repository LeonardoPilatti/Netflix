import React from 'react';
import MovieRow from './components/MovieRow';
import Tmdb from './Tmdb';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';

function App() {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);

  React.useEffect(() => {
    const loadAll = async () => {
      /// Pegando a lista Total:
      let list = await Tmdb.getHomeList();
      // console.log(list);
      setMovieList(list);

      // pegando filme em destaque (featuredData):
      let originals = list.filter((movie) => movie.slug === 'originals');
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      let chosen = originals[0].items.results[randomChosen];

      // console.log(chosen);

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      // console.log(chosenInfo);
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
