/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import VueDisqus from "vue-disqus";

export function registerPlugins (app) {
  app.use(vuetify);
  app.use(VueDisqus, { shortname: 'bejamin-rest'});
}
