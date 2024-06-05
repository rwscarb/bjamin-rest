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
  components: {
    Bio,
    Photos,
    FooterNav
  },
}
</script>

<style lang="less">
[data-amplify-authenticator] {
  .amplify-field__show-password .amplify-icon {
    width: 1em;
    height: 1em;
  }
  .amplify-alert {
    margin-top: 1em;
    .amplify-icon {
      display: none;
    }
  }
  input {
    border: 1px solid #ccc;
    padding: .25em;
    margin: .25em 0;
  }
  .amplify-tabs__list {
    margin-top: 1em;
    display: flex;
    justify-content: space-evenly;
  }
  .amplify-authenticator__column {
    padding: .5em;
  }
  .amplify-button--primary {
    margin-top: .25em;
    border-style: solid;
    padding: .25em;
  }
  .amplify-select__icon {
    display: none;
  }
  footer {
    text-align: center;
  }
}
</style>
