import {createWebHistory, createRouter} from "vue-router";

import About from "@/components/About.vue";
import Photos from "@/components/Photos.vue";
import Videos from "@/components/Videos.vue";
import Music from "@/components/Music.vue";
import Guest from "@/components/Guest.vue";
import Links from "@/components/Links.vue";

const routes = [
  { path: '/about', component: About, name: 'bio' },
  { path: '/photos', component: Photos, name: 'photos' },
  { path: '/videos', component: Videos, name: 'videos' },
  { path: '/music', component: Music, name: 'music' },
  { path: '/guest-book', component: Guest, name: 'guest' },
  { path: '/links', component: Links, name: 'links' },
  { path: '/:pathMatch(.*)*', redirect: '/about' },
]

export default createRouter({
  history: createWebHistory(),
  routes,
});
