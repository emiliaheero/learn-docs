import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"C:/Users/scorp/OneDrive/Documents/uuesti/learn-docs/docs/.vuepress/.temp/pages/index.html.vue")),
  "/prototyypimine/": defineAsyncComponent(() => import(/* webpackChunkName: "v-1ed782c4" */"C:/Users/scorp/OneDrive/Documents/uuesti/learn-docs/docs/.vuepress/.temp/pages/prototyypimine/index.html.vue")),
  "/tunnusgraafika/": defineAsyncComponent(() => import(/* webpackChunkName: "v-02fbb21a" */"C:/Users/scorp/OneDrive/Documents/uuesti/learn-docs/docs/.vuepress/.temp/pages/tunnusgraafika/index.html.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"C:/Users/scorp/OneDrive/Documents/uuesti/learn-docs/docs/.vuepress/.temp/pages/404.html.vue")),
}
