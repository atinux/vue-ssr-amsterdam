import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
			counter: 0
		},
    mutations: {
			INCREMENT(state) {
				state.counter++
			}
		}
  })
}