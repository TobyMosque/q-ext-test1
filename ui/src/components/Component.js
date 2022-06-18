import { h, computed } from 'vue'
import { QInput } from 'quasar'

export default {
  name: 'QExtTest1',
  props: {
    filled: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { attrs, slots }) {
    const filled = computed(() => props.filled)
    return () => h(QInput, {
      ...attrs,
      class: 'QExtTest1',
      filled: filled.value
    }, slots)
  }
}
