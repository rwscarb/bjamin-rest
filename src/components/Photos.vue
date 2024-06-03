<template>
  <v-row>
    <v-col
      v-for="n in numImages"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="`https://bjamin.rest/img/grid/${n.toString().padStart(3, '0')}.jpg`"
        @click="navigateToImg($event.target.src)"
        class="bg-grey-lighten-2"
        style="cursor: pointer"
        aspect-ratio="1"
        cover
      >
        <template v-slot:placeholder>
          <v-row
            align="center"
            class="fill-height ma-0"
            justify="center"
          >
            <v-progress-circular
              color="grey-lighten-5"
              indeterminate
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-carousel hide-delimiters progress="secondary">
        <v-carousel-item
          v-for="item in carouselImages"
          :src="item"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "Photos",
  computed: {
    numImages: () => 18,
    carouselImages: () => [
      "https://bjamin.rest/img/carousel/0009.jpg",
      "https://bjamin.rest/img/carousel/0008.jpg",
      "https://bjamin.rest/img/carousel/0002.jpg",
      "https://bjamin.rest/img/carousel/0001.jpg",
      "https://bjamin.rest/img/carousel/0006.jpg",
      "https://bjamin.rest/img/carousel/0007.jpg",
    ]
  },
  methods: {
    navigateToImg(href) {
      window.location.href = href;
    }
  }
}
</script>

<style scoped>

</style>
