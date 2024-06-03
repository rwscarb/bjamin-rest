<template>
  <v-row>
    <v-col cols="12">
      <iframe style="border-radius:15px" :src="spotifyUrl"
              width="100%" height="452" frameBorder="0" allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
      </iframe>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    spotifyUrl: () => 'https://open.spotify.com/embed/playlist/3Cld45RoRud5Fzj3wE5qwl?utm_source=generator&theme=0',
  }
}

</script>


<style scoped>

</style>
