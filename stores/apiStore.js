import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', {
  actions: {
    //get
    async get(path) {
      const config = useRuntimeConfig();
      const apiUri = config.public.apiUri;
      try {
        const data = await $fetch(apiUri + path, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        return data;
        
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
