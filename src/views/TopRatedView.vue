<template>
  <div class="top-rated">
    <p v-if="topRatedMoviesDataIsLoading">Movie data loading...</p>
    <div v-else>
      <FilmCard
        v-for="(item, index) in topRatedMoviesData"
        class="top-rated__card"
        :key="index"
        :title="item.title"
        :overview="item.overview"
        :image-src="item.image"
        :genres="item.genres"
      />
    </div>
  </div>
</template>

<script>
import FilmCard from "@/components/FilmCard.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "TopRatedView",
  components: {
    FilmCard,
  },
  created() {
    this.getMovieGenreList();
    this.getTopRatedMoviesData();
  },
  computed: {
    ...mapState({
      topRatedMoviesData: (state) => state.topRatedMoviesData,
      topRatedMoviesDataIsLoading: (state) => state.topRatedMoviesDataIsLoading,
    }),
  },
  methods: {
    ...mapActions(["getTopRatedMoviesData", "getMovieGenreList"]),
  },
};
</script>

<style lang="scss" scoped>
.top-rated {
  &__card {
    margin-bottom: 24px;
  }
}
</style>
