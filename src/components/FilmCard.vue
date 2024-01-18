<template>
  <div class="film-card">
    <img :src="imageSrc" class="film-card__image" />
    <div class="film-card__info">
      <p>
        Title: <b>{{ title }}</b>
      </p>
      <p>
        Overview: <b>{{ overview }}</b>
      </p>
      <p>
        Genres: <b>{{ genres }}</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmCard",
  props: {
    imageSrc: String,
    title: String,
    overview: String,
    genres: String,
  },
};
</script>

<style scoped lang="scss">
.film-card {
  border: 2px solid;
  border-radius: 5px;
  padding: 12px;
  display: flex;
  gap: 12px;

  &__image {
    height: 300px;
    width: 200px;
  }

  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      margin: 0;
    }
  }
}
</style>
