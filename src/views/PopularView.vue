<template>
  <div class="popularFilms">
    <div v-for="(x, index) in data" :key="index" class="cardBorder">
      <p>
        Title: <span>{{ x.title }}</span>
      </p>
      <p>
        Overview: <span>{{ x.overview }}</span>
      </p>
      <p>
        Popularity: <span>{{ x.popularity }}</span>
      </p>
      <p>
        Average Vote: <span>{{ x.vote_average }}</span>
      </p>
      <p>
        Has Video: <span>{{ x.video }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { makeRequest } from "@/utils/request";

export default {
  name: "PopularView",
  data() {
    return {
      data: [],
    };
  },
  async created() {
    const response = await makeRequest({
      url: "movie/popular",
    });

    this.data = response.data.results;

    this.data.forEach((x, i) => {
      this.data[i].vote_average =
        this.data[i].vote_average.toFixed(1).toString() + " Stars";

      this.data[i].popularity =
        this.data[i].popularity.toFixed(2).toString() + " Votes";
    });

    this.data.forEach((x, i) => {
      if (this.data[i].video == true) {
        this.data[i].video = "Yes";
      } else if (this.data[i].video == false) {
        this.data[i].video = "No";
      }
    });
  },
};
</script>

<style>
.popularFilms {
  display: block;
  width: 100%;
}

.popularFilms .cardBorder {
  border: 2px solid;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-bottom: 12px;
  padding: 12px;
}

.popularFilms .cardBorder span {
  font-weight: bold;
}
</style>
