// filme em destaque (onde aparece a imagem diferente)
import React from 'react';
import styles from './FeaturedMovie.module.css';

const FeaturedMovie = ({ item }) => {
  return (
    <section
      className={styles.featured}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className={styles.featuredVertical}>
        <div className={styles.featuredHorizontal}>
          <div className={styles.featuredName}>{item.original_name}</div>
          <div className={styles.featuredInfo}>
            <div className={styles.featuredPoints}>
              {item.vote_average} pontos
            </div>
            <div className={styles.featuredYear}>2099</div>
            <div className={styles.featuredSeasons}>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </div>
          <div className={styles.featuredDescription}>{item.overview}</div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
