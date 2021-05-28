import React from 'react';
import styles from './MovieRow.module.css';

const MovieRow = ({ title, items }) => {
  return (
    <div className={styles.movieRow}>
      <h2>{title}</h2>
      <div className={styles.movieRowListArea}>
        <div className={styles.movieRowList}>
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
