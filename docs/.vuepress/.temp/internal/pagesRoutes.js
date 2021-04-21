import { Vuepress } from '@vuepress/client/lib/components/Vuepress'
import pageRoutes0 from 'C:/Users/scorp/OneDrive/Documents/uuesti/learn-docs/docs/.vuepress/.temp/internal/pageRoutes/v-8daa1a0e.js'
import pageRoutes1 from 'C:/Users/scorp/OneDrive/Documents/uuesti/learn-docs/docs/.vuepress/.temp/internal/pageRoutes/v-1ed782c4.js'
import pageRoutes2 from 'C:/Users/scorp/OneDrive/Documents/uuesti/learn-docs/docs/.vuepress/.temp/internal/pageRoutes/v-02fbb21a.js'
import pageRoutes3 from 'C:/Users/scorp/OneDrive/Documents/uuesti/learn-docs/docs/.vuepress/.temp/internal/pageRoutes/v-3706649a.js'

export const pagesRoutes = [
  ...pageRoutes0,
  ...pageRoutes1,
  ...pageRoutes2,
  ...pageRoutes3,
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress,
  },
]
