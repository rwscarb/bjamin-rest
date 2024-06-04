<template>
  <v-bottom-navigation grow>
    <v-btn value="bio" @click="$emit('select', 'bio')">
      <v-icon>mdi-information</v-icon>
      <span>About</span>
    </v-btn>

    <v-btn value="photos" @click="$emit('select', 'photos')">
      <v-icon>mdi-instagram</v-icon>
      <span>Photos</span>
    </v-btn>

    <v-btn value="videos" @click="$emit('select', 'videos')">
      <v-icon>mdi-youtube</v-icon>
      <span>Videos</span>
    </v-btn>

    <v-btn value="music" @click="$emit('select', 'music')">
      <v-icon>mdi-spotify</v-icon>
      <span>Music</span>
    </v-btn>

    <v-btn value="guest book" @click="$emit('select', 'guest')">
      <v-icon>mdi-comment-bookmark</v-icon>
      <span>Guest Book</span>
    </v-btn>

    <v-btn value="links" @click="$emit('select', 'links')">
      <v-icon>mdi-link</v-icon>
      <span>Links</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
</script>


<style scoped>

</style>
