const createWordedGenreList = (genreList, allGenres) => {
  const filteredGenreList = filterGenreListById(genreList, allGenres);

  return filteredGenreList
    ?.map((filteredGenre) => filteredGenre?.name)
    ?.join(", ");
};

const filterGenreListById = (genreList, allGenres) => {
  return allGenres?.filter((genre) => genreList?.includes(genre?.id));
};

export { createWordedGenreList, filterGenreListById };
