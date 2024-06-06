<template>
  <v-row>
    <v-col>
      <h2 id="comment">Guest Book</h2>
      <v-form>
        <v-text-field
          label="Name"
          v-model="name"
          outlined
        ></v-text-field>
        <v-textarea
          label="Comment"
          v-model="comment"
          outlined
          rows="3"
        ></v-textarea>
        <v-btn @click="submitComment" :disabled="name === '' || comment === ''">Submit</v-btn>
      </v-form>
    </v-col>
  </v-row>
  <v-row v-for="item in comments">
    <v-col>
      <v-card>
        <v-card-subtitle class="float-right text-right" style="margin-top: .5em">
          <div>by {{ item.user || 'Unknown' }}</div>
          <div :title="getDateTime(item.createdAt).toLocaleTimeString()">
            {{ getDateTime(item.createdAt).toLocaleDateString() }}
          </div>
        </v-card-subtitle>
        <v-card-title>{{ item.message }}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { generateClient } from 'aws-amplify/api';
import { listComments } from "@/graphql/queries";
import { createComment } from "@/graphql/mutations";

const client = generateClient({
  authMode: 'identityPool',
});

export default {
  name: "Guest",
  data: () => ({
    name: '',
    comment: '',
    comments: [],
  }),
  methods: {
    getDateTime(date) {
      return new Date(date)
    },
    async submitComment() {
      const res = await client.graphql({
        query: createComment,
        variables: {
          input: {
            message: this.comment,
            user: this.name,
          },
        },
      });
      this.comments.unshift(res.data.createComment);
      this.name = '';
      this.comment = '';
    }
  },
  async mounted() {
    const res = await client.graphql({
      query: listComments,
      variables: {
        limit: 100,
      },
    });
    if (res.data.listComments) {
      this.comments = res.data.listComments.items;
    }
  }
}

</script>


<style scoped>

</style>
