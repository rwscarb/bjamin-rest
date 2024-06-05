<template>
  <v-row>
    <v-col
      v-for="image in images"
      :key="image.url.href"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="image.url.href"
        @click="navigateToImg(image.url.href)"
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
          :src="item.url.href"
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
    }
  },
  methods: {
    navigateToImg(href) {
      window.location.href = href;
    }
  },
  async mounted() {
    let res = await list({ path: 'public/img/grid/' });
    this.images = await Promise.all(res.items.slice(1).map(async item => await getUrl({ path: item.path })));
    res = await list({ path: 'public/img/carousel/' });
    this.carouselImages = await Promise.all(res.items.map(async item => await getUrl({ path: item.path })));
  }
}
</script>

<style scoped>

</style>
