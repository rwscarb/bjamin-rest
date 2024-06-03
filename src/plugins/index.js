/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import VueDisqus from "vue-disqus";
import router from "@/plugins/router";

export function registerPlugins (app) {
  app.use(vuetify);
  app.use(router);
  app.use(VueDisqus, { shortname: 'bejamin-rest'});
}
