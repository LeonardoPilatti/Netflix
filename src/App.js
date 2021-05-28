import React from 'react';
import Tmdb from './Tmdb';

function App() {
  const [movieList, setMovieList] = React.useState([]);

  React.useEffect(() => {
    const loadAll = async () => {
      /// Pegando a lista Total:
      let list = await Tmdb.getHomeList();
      // console.log(list);
      setMovieList(list);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <div>{item.title}</div>
        ))}
      </section>
    </div>
  );
}

export default App;
