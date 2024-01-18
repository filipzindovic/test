import Vue from "vue";
import Vuex from "vuex";
import { makeRequest } from "@/utils/request";
import { createWordedGenreList } from "@/utils/genre";
import endpoints from "@/constants/endpoints";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topRatedMoviesData: [],
    topRatedMoviesDataIsLoading: false,
    movieGenreList: [],
    movieGenreListIsLoading: false,
  },
  getters: {
    mappedTopRatedMovies(state) {
      return state.topRatedMoviesData.map((movie) => ({
        image: `${process.env.VUE_APP_API_ENDPOINT_IMAGE}${movie?.poster_path}`,
        title: movie?.original_title,
        overview: movie?.overview,
        genres: createWordedGenreList(movie?.genre_ids, state.movieGenreList),
      }));
    },
  },
  mutations: {
    setTopRatedMoviesData(state, value) {
      state.topRatedMoviesData = value;
    },
    setTopRatedMoviesDataIsLoading(state, value) {
      state.topRatedMoviesDataIsLoading = value;
    },
    setMovieGenreList(state, value) {
      state.movieGenreList = value;
    },
    setMovieGenreListIsLoading(state, value) {
      state.movieGenreListIsLoading = value;
    },
  },
  actions: {
    async getTopRatedMoviesData({ commit }) {
      commit("setTopRatedMoviesDataIsLoading", true);

      const response = await makeRequest({
        url: endpoints.TOP_RATED,
      });

      commit("setTopRatedMoviesData", response.data.results);
      commit("setTopRatedMoviesDataIsLoading", false);
    },
    async getMovieGenreList({ commit }) {
      commit("setMovieGenreListIsLoading", true);

      const response = await makeRequest({
        url: endpoints.GENRE_LIST,
      });

      commit("setMovieGenreList", response?.data?.genres);
      commit("setMovieGenreListIsLoading", false);
    },
  },
});
