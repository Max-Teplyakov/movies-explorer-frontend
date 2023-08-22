import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { useMediaQuery } from "../../hooks/useMediaQuery";

function MoviesCardList({ isMovies, deleteMovies, moviesSave }) {
  const LG_ROW_CARD_COUNT = 4;
  const MD_ROW_CARD_COUNT = 2;
  const SM_ROW_CARD_COUNT = 1;

  const LG_INITIAL_CARD_COUNT = 16;
  const MD_INITIAL_CARD_COUNT = 8;
  const SM_INITIAL_CARD_COUNT = 5;

  const [cards, setCards] = useState(null);

  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const cardColumnCount = isDesktop
    ? LG_ROW_CARD_COUNT
    : isTablet
    ? MD_ROW_CARD_COUNT
    : SM_ROW_CARD_COUNT;

  const initialCardCount = isDesktop
    ? LG_INITIAL_CARD_COUNT
    : isTablet
    ? MD_INITIAL_CARD_COUNT
    : SM_INITIAL_CARD_COUNT;

  const [visibleCardCount, setVisibleCardCount] = useState(initialCardCount);

  const roundedVisibleCardCount =
    Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount;

  useEffect(() => {
    setCards(isMovies);
  }, []);

  const handleClick = () => {
    calculateCardCount();
  };

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + LG_ROW_CARD_COUNT);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + MD_ROW_CARD_COUNT);
    }

    setVisibleCardCount(visibleCardCount + SM_ROW_CARD_COUNT);
  };

  const location = useLocation();
  const moviesClass = `${
    location.pathname === "/saved-movies" ? "movies-card-list_save" : ""
  }`;

  return (
    <section className="movies-cards">
      <ul className={`movies-card-list ${moviesClass}`}>
        {cards?.slice(0, roundedVisibleCardCount).map((movieItem) => (
          <MoviesCard
            key={movieItem.id || movieItem._id}
            movieData={movieItem}
            deleteMovies={deleteMovies}
            moviesSave={moviesSave}
          />
        ))}
      </ul>
      <button type="button" className="button-next" onClick={handleClick}>
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
