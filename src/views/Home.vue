<template>
  <div class="container py-2">
    <div
      v-for="(film, i) in films"
      :key="`films__${i}`"
      class="flex flex-wrap justify-center"
    >
      <app-card-film
        :film-title="film.title"
        :film-description="film.description"
        :film-director="film.director"
        :film-producer="film.producer"
        :release-year="film.release_date"
      />
    </div>
  </div>
</template>

<script>
import AppCardFilm from '@/components/AppCardFilm'

export default {
  name: 'home',
  components: {
    AppCardFilm
  },
  data () {
    return {
      films: [],
      objects: 6
    }
  },
  mounted () {},
  created () {
    this.getDataFilms()
  },
  methods: {
    async getDataFilms () {
      try {
        const { data } = await this.axios.get('/films')
        this.films = data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
