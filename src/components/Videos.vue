<template>
  <v-row>
    <v-col lg="6" v-for="url in videos" :key="url">
      <iframe width="400" height="225" :src="url" title="YouTube video player"frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
      </iframe>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Videos",
  computed: {
    videos() {
      return [
        'https://www.youtube.com/embed/OKIiDVw8OrE',
        'https://www.youtube.com/embed/c2s4HHtOCTM',
        'https://www.youtube.com/embed/ISw0oRJAb0o',
        'https://www.youtube.com/embed/gDOFwcwg6TU',
      ];
    }
  }
}
</script>


<style scoped>

</style>
