<template>
  <v-row>
    <v-col
      v-for="src in images"
      :key="src"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="src"
        @click="navigateToImg(src)"
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
      <v-carousel hide-delimiters progress="secondary" v-model="selectedCarouselImage">
        <v-carousel-item
          v-for="src in carouselImages"
          :src="src"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>

</template>

<script>
import { list, getUrl } from 'aws-amplify/storage';

export default {
  name: "Photos",
  data() {
    return {
      images: [],
      carouselImages: [],
      selectedCarouselImage: 0,
    }
  },
  methods: {
    navigateToImg(href) {
      window.location.href = href;
    }
  },
  async mounted() {
    const gridResults = await list({ path: 'public/img/grid/' });
    const gridImages = await Promise.all(gridResults.items.slice(1).map(async item => getUrl({ path: item.path })));
    this.images = gridImages.map(x => x.url.href);

    const carouselResults = await list({ path: 'public/img/carousel/' });
    const carouselImages = await Promise.all(carouselResults.items.map(async item => getUrl({ path: item.path })));
    this.carouselImages = carouselImages.map(x => x.url.href);
    this.selectedCarouselImage = Math.floor(Math.random() * this.carouselImages.length);
  }
}
</script>

<style scoped>

</style>
