import { boot } from 'quasar/wrappers'
import VuePlugin from '@tobymosque/quasar-ui-ext-test1'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
