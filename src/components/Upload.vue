<template>
  <authenticator>
  <v-row>
    <v-col>
      <v-file-input @change="handleFileChange" />
      <v-btn @click.prevent="uploadFile" class="float-right">Upload</v-btn>
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
      file: null
    }
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0]
    },
    async uploadFile() {
      if (!this.file) return

      await uploadData({
        path: `uploads/images/${this.file.name}`,
        data: this.file,
        options: {
          contentType: 'image/jpeg',
          contentDisposition: 'inline'
        }
      }).result;

      this.$router.push({ name: 'photos' })
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
