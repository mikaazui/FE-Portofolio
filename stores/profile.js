import { defineStore } from "pinia";

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: null,
  }),
  actions: {

    async get(){
      const Api = useApiStore();

     this.profile = await Api.get('/profile')
    }

    
  },
});
