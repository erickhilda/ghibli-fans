<template>
  <div
    class="border m-2 rounded-lg bg-white w-full sm:w-1/2 md:w-1/3 lg:w-1/3 shadow-lg rounded-lg overflow-hidden"
  >
    <div class="flex flex-wrap px-6 py-2 border">
      <p class="text-xl leading-tight font-bold">
        {{ filmTitle }} - {{ releaseYear }}
      </p>
    </div>
    <div class="flex px-6 py-4">
      <div class="text-left sm:flex-grow">
        <div class="mb-4">
          <p class="text-gray-700 text-base">
            {{ filmDescription }}
          </p>
          <p class="text-gray-700 text-base">Director : {{ filmDirector }}</p>
          <p class="text-gray-700 text-base">Producer : {{ filmProducer }}</p>
        </div>
        <div>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >#ghibli</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >#anime</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
            >#Japan</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filmDescription: {
      type: String,
      default: ''
    },
    filmTitle: {
      type: String,
      default: ''
    },
    releaseYear: {
      type: String,
      default: ''
    },
    filmProducer: {
      type: String,
      default: ''
    },
    filmDirector: {
      type: String,
      default: ''
    }
  }
}
</script>
