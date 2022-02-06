import { createVueInstance } from '@/vue-config'
import { registerGlobalProperties } from '@/vue-config/properties-register'
import { registerPlugins } from '@/vue-config/plugins-register'
import { registerComponent } from '@/vue-config/components-register'

const resolve = app => {
  registerGlobalProperties(app)
  registerPlugins(app)
  registerComponent(app)
}

createVueInstance('#app', resolve)
