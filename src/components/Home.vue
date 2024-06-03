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
      />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to a tribute to</div>

        <h1 class="text-h2 font-weight-bold">Benjamin Johnson</h1>
      </div>

      <div class="py-4" />

      <v-row v-show="selectedView === 'bio'">
        <v-col cols="12" v-for="event in timeline" :key="event.id">
          <v-card
            class="py-4"
            color="primary"
            :image="event.image"
            :prepend-icon="event.icon"
            :subtitle="event.subtitle"
            :title="event.title"
            :height="selectedEvent === event.id ? 369 : 150"
            @click="selectedEvent = event.id"
            rounded="lg"
            variant="text"
            rel="noopener noreferrer"
          >
            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
          <div v-if="selectedEvent === event.id" style="padding-top: 1em">
            <template v-for="quote in event.quotes">
              <blockquote><p v-html="quote.content"></p></blockquote>
              <div class="float-right">- {{ quote.author }}</div>
            </template>
            <div v-if="!event.quotes" v-html="event.content"></div>
          </div>
        </v-col>
      </v-row>

      <v-row v-show="selectedView === 'photos'">
        <v-col
          v-for="n in 18"
          :key="n"
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="`https://bjamin.rest/img/grid/${n.toString().padStart(3, '0')}.jpg`"
            class="bg-grey-lighten-2"
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

      <v-row v-show="selectedView === 'music'">
        <v-col cols="12">
          <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3Cld45RoRud5Fzj3wE5qwl?utm_source=generator&theme=0" width="100%" height="452" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </v-col>
      </v-row>

      <v-row v-show="selectedView === 'videos'">
        <v-col lg="6" v-for="url in videos" :key="url">
          <iframe width="400" height="225" :src="url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </v-col>
      </v-row>

      <section aria-labelledby="guest-book" v-show="selectedView === 'guest'">
        <h2 id="comment">Guest Book</h2>
        <Disqus :lazy="false" />
      </section>

      <FooterNav @select="selectedView = $event"/>

    </v-responsive>
  </v-container>
</template>

<script type="text/javascript">
import FooterNav from "@/components/FooterNav.vue";

export default {
  data() {
    return {
      selectedView: 'bio',
      selectedEvent: '',
      videos: [
        'https://www.youtube.com/embed/OKIiDVw8OrE',
        'https://www.youtube.com/embed/c2s4HHtOCTM',
        'https://www.youtube.com/embed/ISw0oRJAb0o',
        'https://www.youtube.com/embed/gDOFwcwg6TU',
      ]
    };
  },
  computed: {
    timeline() {
      return [
        {
          id: 'new_mexico',
          title: 'New Mexico',
          href: '#',
          subtitle: 'Age 0-5',
          image: 'https://bjamin.rest/img/flags/new-mexico.png',
          icon: 'mdi-baby-carriage',
          content: `Ben was born in New Mexico in 1983 by Mary and Lynn Johnson. He was born to an older sister of 6 years, Amanda.
            And while New Mexico would only consist of a short period of his life,
            he would assimilate parts of the culture and would carry his <i>je ne sais quoi</i> brand to California.
            From the earliest years, he was a philosopher to his core. A true friend with a knack for mischief and an infectious laugh.
          `
        },
        {
          id: 'california',
          title: 'California',
          href: '#',
          subtitle: 'Age 6-27',
          image: 'https://bjamin.rest/img/flags/california.png',
          icon: 'mdi-account-school',
          quotes: [
            {
              author: 'Ryan Scarbery',
              content: `
                Ben attended Eaton Elementary school in Fresno CA. He introduced himself to me on the first day of
                kindergarten and we became friends for life. I can still hear his voice whisper "borrow" when it came time
                to leave from a day of playing. It was my luck that Ben came into my life so early. Ben beamed
                positivity and everyone saw it and wanted to be around it. He was there for so many of my firsts.
                From church camp to stoner park, he'd usually have a frisbee in tow and would be down
                to grab a cup of coffee and ask about life.`
            },
          ],
        },
        {
          id: 'hawaii',
          title: 'Hawaii',
          href: '#',
          subtitle: 'Age 27-39',
          image: 'https://bjamin.rest/img/flags/hawaii.png',
          icon: 'mdi-surfing',
          quotes: [
            {
              author: 'Cam Prendergast',
              content: `
                <p>
                    Ben was a representative of the best of what our generation could be, and he only wanted the best
                    for everyone around him.
                </p>
              `
            },
          ],
        },
      ]

    }
  },
  components: {
    FooterNav
  },
}
</script>
