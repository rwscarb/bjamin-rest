<template>
  <v-row>
    <v-col>
      <h2 id="comment">Guest Book</h2>
      <v-textarea
        label="Comment"
        v-model="comment"
        outlined
        rows="3"
      ></v-textarea>
      <v-btn @click="submitComment">Submit</v-btn>
    </v-col>
  </v-row>
  <v-row v-for="item in comments">
    <v-col>
      <v-card>
        <v-card-subtitle class="float-right" style="margin-top: .5em">
          {{ item.user || 'Anonymous' }}
         <span :title="item.createdAt">{{ item.createdAt.split('T')[0] }}</span>
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
    comment: '',
    comments: [],
  }),
  methods: {
    async submitComment() {
      const res = await client.graphql({
        query: createComment,
        variables: {
          input: {
            message: this.comment,
          },
        },
      });
      this.comments.unshift(res.data.createComment);
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
