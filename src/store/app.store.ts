import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: null as any
  }),

  actions: {
    setUser(user) {
      this.user = user
    }
  },

  getters: {
    isLoggedIn(state) {
      return !!state.user
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore as any, import.meta.hot))
}
