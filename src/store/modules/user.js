import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      userInfo: {},
      name: 'rocke',
    }
  },
  getters: {},
  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage,
        paths: ['userInfo'],
      },
    ],
  },
})
