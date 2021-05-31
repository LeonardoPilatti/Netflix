import React from 'react';
import styles from './MovieRow.module.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = React.useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150;
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }
    setScrollX(x);
  };

  return (
    <div className={styles.movieRow}>
      <h2>{title}</h2>
      <div className={styles.movieRowLeft} onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className={styles.movieRowRight} onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className={styles.movieRowListArea}>
        <div
          className={styles.movieRowList}
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {/* se os items.results for maior que zero, ou seja, se existir filmes, ele irá fazer o map dos resultados */}
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className={styles.movieRowItem}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
