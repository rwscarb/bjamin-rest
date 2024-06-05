<template>
  <v-row>
    <v-col cols="12" v-for="event in timelineEvents" :key="event.id">

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
</template>

<script>
import { getUrl } from "aws-amplify/storage";

export default {
  name: "About",
  data() {
    return {
      selectedEvent: '',
      timelineEvents: [],
    }
  },
  async mounted() {
    const events = [
      {
        id: 'new_mexico',
        title: 'New Mexico',
        href: '#',
        subtitle: 'Age 0-5',
        image: 'public/img/flags/new-mexico.png',
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
        image: 'public/img/flags/california.png',
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
        image: 'public/img/links/oahu.jpg',
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
    ];
    await Promise.all(events.map(async event => {
      event.image = (await getUrl({path: event.image})).url.href;
    }));

    console.log(events)
    this.timelineEvents = events;
  }
}
</script>


<style scoped>

</style>
