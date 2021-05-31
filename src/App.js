import React from 'react';
import MovieRow from './components/MovieRow';
import Tmdb from './Tmdb';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import { Header } from './components/Header';

function App() {
  const [movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);
  const [blackHeader, setBlackHeader] = React.useState(false);

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

  React.useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
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
