<template>
  <v-container>
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-img
        class="mb-4"
        height="350"
        src="@/assets/logo.png"
        @click="$router.push({name: 'links'})"
      />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to a tribute to</div>
        <h1 class="text-h2 font-weight-bold">Benjamin Johnson</h1>
      </div>

      <div class="py-4" />

      <RouterView/>

      <FooterNav @select="$router.push({name: $event})"/>

    </v-responsive>
  </v-container>
</template>

<script type="text/javascript">
import FooterNav from "@/components/FooterNav.vue";
import Photos from "@/components/Photos.vue";
import Bio from "@/components/About.vue";

export default {
  data() {
    return {
      selectedView: 'bio',
      selectedEvent: '',
    };
  },
  computed: {
  },
  methods: {
  },
  components: {
    Bio,
    Photos,
    FooterNav
  },
}
</script>
