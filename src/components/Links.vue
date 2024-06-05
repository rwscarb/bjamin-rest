<template>
  <v-row>
    <v-col cols="12">
      <h3>Links</h3>
    </v-col>
  </v-row>
  <v-row>
    <v-col v-for="item in interests">
      <v-card
        :title="item.title"
        :href="item.href"
        :image="item.image"
        height="175"
        width="175"
      />
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col>
      <v-card
        style="text-align: center"
        text="Source Code"
        href="https://github.com/rwscarb/bjamin-rest"
      ></v-card>
    </v-col>
  </v-row>
  <v-row v-if="user">
    <v-col>
      <v-card
        style="text-align: center"
        text="Sign Out"
        @click="signUserOut"
      ></v-card>
    </v-col>
    <v-col>
      <v-card
        style="text-align: center"
        text="Upload"
        href="/upload"
      ></v-card>
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col>
      <v-card
        style="text-align: center"
        text="Login"
        href="/login"
      ></v-card>
    </v-col>
  </v-row>
</template>

<script>
import { getCurrentUser, signOut } from 'aws-amplify/auth'
import { getUrl } from "aws-amplify/storage";
import { Authenticator } from "@aws-amplify/ui-vue";

export default {
  name: "Links",
  data() {
    return {
      user: null,
      interests: [],
    };
  },
  methods: {
    async signUserOut() {
      await signOut();
      this.user = null;
    }
  },
  async activated() {
    this.user = await getCurrentUser();
  },
  async mounted() {
    try {
      this.user = await getCurrentUser();
    } catch {
    }

    const interests = [
      {
        title: "Camping",
        href: "https://www.fresno.gov/parks/campfresno/",
        image: "public/img/links/camping.jpg"
      },
      {
        title: "Biking",
        style: "color: black",
        href: "https://www.fs.usda.gov/recarea/sierra/recreation/hiking/recarea/?recid=45894&actid=51",
        image: "public/img/links/biking.jpg",
      },
      {
        title: "Skateboarding",
        style: "color: black",
        href: "https://www.youtube.com/watch?v=oesiPltzs0I",
        image: "public/img/links/skateboarding.jpg",
      },
      {
        title: "Slacklining",
        href: "https://en.wikipedia.org/wiki/Slacklining",
        image: "public/img/links/slack.jpg",
      },
      {
        title: "Led Zepplin",
        href: "https://www.youtube.com/watch?v=nhVfuacsLDw",
        image: "public/img/links/led-zepplin.jpg",
      },
      {
        title: "Bouldering",
        style: "color: black",
        href: "https://en.wikipedia.org/wiki/Bouldering",
        image: "public/img/links/bouldering.jpeg",
      },
      {
        title: "Monty Python",
        href: "https://www.youtube.com/watch?v=RbTaP0_Galg",
        image: "public/img/links/monty-python.jpg",
      },
      {
        subtitle: "Instagram",
        href: "https://www.instagram.com/benjamin.jammin/",
        prependIcon: "mdi-instagram",
        image: "public/img/links/instagram.jpg",
      },
    ];

    this.interests = await Promise.all(interests.map(async (interest) => {
      interest.image = (await getUrl({ path: interest.image })).url.href;
      return interest;
    }));

  },
  components: { Authenticator },
}
</script>

<style scoped>
</style>
