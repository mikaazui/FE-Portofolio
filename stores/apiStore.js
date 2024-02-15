import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', {
  actions: {
    //get
    async get(path) {
      try {
        const config = useRuntimeConfig();
        const apiUri = config.public.apiUri;
        const user = await $fetch(apiUri + "/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        this.user = user;
        
      } catch (error) {
        console.log('========= Error =========');
        console.log(error);
      }
    },
    } 
    //post
    //put
    //patch
    //delete
  }
)
