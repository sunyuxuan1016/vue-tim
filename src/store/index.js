import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import chatuser from './modules/chatuser'
import CreateLoagger from 'vuex/dist/logger'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    users,
    chatuser
  },
  strict:debug,
  plugins:debug? [CreateLoagger()]:[]
})

