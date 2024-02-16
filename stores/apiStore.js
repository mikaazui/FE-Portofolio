import { defineStore } from "pinia";

export const useApiStore = defineStore("Api", {
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
        console.log("========= Error =========");
        console.log(error);
        throw error;
      }
    },
    //post
    async post(path, data) {
      console.log('masuk method post')
      const config = useRuntimeConfig();
      const apiUri = config.public.apiUri;
      const jsonData = JSON.stringify(data);
      try {
        const data = await $fetch(apiUri + path, {
          method: "POST",
          body: jsonData,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        return data;
      } catch (error) {
        throw error;
      }
    },
    //put
    //patch
    //delete
    async delete(path) {
      const config = useRuntimeConfig();
      const apiUri = config.public.apiUri;
      try {
        const data = await $fetch(apiUri + path, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        return data;
      } catch (error) {
        console.log("========= Error =========");
        console.log(error);
      }
    }
  }
});
