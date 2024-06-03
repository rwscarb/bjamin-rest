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
        @click="imageHandler($event.target.src)"
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
  props: ['numImages', 'imageHandler', 'carouselImages']
}

</script>


<style scoped>

</style>
