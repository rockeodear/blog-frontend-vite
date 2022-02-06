import { getCurrentInstance } from 'vue'

const basicMixins = {
  data() {
    return {
      _this: getCurrentInstance().proxy,
    }
  },
}

export default basicMixins
