<template>
  <authenticator>
  <v-row>
    <v-col cols="12">
      <v-file-input @change="handleFileChange" :disabled="disabled"/>
    </v-col>
  </v-row>
  <v-row align-content="space-evenly">
    <v-col style="text-align: center">
      <v-btn @click.prevent="uploadFile('grid')" :disabled="disabled">
        Upload to Grid
      </v-btn>
    </v-col>
    <v-col style="text-align: center">
      <v-btn @click.prevent="uploadFile('carousel')" :disabled="disabled">
        Upload to Carousel
      </v-btn>
    </v-col>
  </v-row>
  </authenticator>
</template>

<script>
import { uploadData } from 'aws-amplify/storage';
import { Authenticator } from "@aws-amplify/ui-vue";

export default {
  data() {
    return {
      file: null,
      disabled: false,
    }
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0]
    },
    async uploadFile(dest) {
      if (!this.file) return

      this.disabled = true;

      await uploadData({
        path: `uploads/images/${dest}/${this.file.name}`,
        data: this.file,
        options: {
          contentType: 'image/jpeg',
          contentDisposition: 'inline'
        }
      }).result;

      setTimeout(() => {
        this.$router.push({ name: 'photos' })
      }, 3000)
    }
  },
  components: { Authenticator },
}
</script>

<style>
button {
  border: 1px solid #ccc;
  padding: .25em;
}
</style>
