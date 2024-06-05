<template>
  <authenticator>
    <v-row>
      <v-col>
        <v-card
          style="text-align: center"
          text="Sign Out"
          :href="signUserOut"
        ></v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          style="text-align: center"
          text="Upload"
          href="/upload"
        ></v-card>
      </v-col>
    </v-row>
  </authenticator>
</template>

<script>
import { Authenticator } from "@aws-amplify/ui-vue";
import { signOut } from 'aws-amplify/auth';

export default {
  methods: {
    async signUserOut() {
      try {
        await signOut();
        this.$router.push({name: 'login'})
      } catch (e) {
        console.log(e)
      }
    },
  },
  components: { Authenticator },
};
</script>
