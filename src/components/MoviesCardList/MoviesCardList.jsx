import MoviesCard from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const LG_ROW_CARD_COUNT = 4;
const MD_ROW_CARD_COUNT = 2;
const SM_ROW_CARD_COUNT = 2;

const LG_INITIAL_CARD_COUNT = 16;
const MD_INITIAL_CARD_COUNT = 8;
const SM_INITIAL_CARD_COUNT = 5;

function MoviesCardList({ isMovies, deleteMovies, moviesSave, isSaveMovies }) {
  const location = useLocation();

  useEffect(() => {
    return setVisibleCardCount(initialCardCount);
  }, [isSaveMovies]);

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

  const roundedVisibleCardCount = isDesktop
    ? Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount
    : isTablet
    ? Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount
    : Math.floor((visibleCardCount / cardColumnCount) * cardColumnCount);

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
  return (
    <section className="movies-cards">
      <ul className={"movies-card-list"}>
        {/* {location.pathname === "/mvoies"} */}
        {location.pathname === "/movies" &&
          isMovies &&
          isMovies
            .slice(0, roundedVisibleCardCount)
            .map((movieItem) => (
              <MoviesCard
                key={movieItem.id || movieItem._id}
                movieData={movieItem}
                deleteMovies={deleteMovies}
                moviesSave={moviesSave}
                isSaveMovies={isSaveMovies}
              />
            ))}
        {location.pathname === "/saved-movies" &&
          isMovies &&
          isMovies.map((movieItem) => (
            <MoviesCard
              key={movieItem.id || movieItem._id}
              movieData={movieItem}
              deleteMovies={deleteMovies}
              moviesSave={moviesSave}
              isSaveMovies={isSaveMovies}
            />
          ))}
      </ul>

      {isMovies && isMovies.length === 0 ? (
        <p className="movies-card-list__subtitle">Ничего не найденно</p>
      ) : (
        <></>
      )}
      {location.pathname === "/movies" &&
      isMovies &&
      isMovies.length > 11 &&
      isMovies.length > roundedVisibleCardCount ? (
        <button type="button" className="button-next" onClick={handleClick}>
          Ещё
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default MoviesCardList;
