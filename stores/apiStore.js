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
        console.log('error di get')
        // this.handleError(error);
      }
    },
    //post
    async post(path, data) {
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
        console.log('kena error')
        this.handleError(error);
      }
    },
    //put
    async put(path, data) {
      const config = useRuntimeConfig();
      const apiUri = config.public.apiUri;
      const jsonData = JSON.stringify(data);
      try {
        const data = await $fetch(apiUri + path, {
          method: "PUT",
          body: jsonData,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        return data;
      } catch (error) {
        this.handleError(error);
      }
    },
    //patch
    async patch(path, data) {
      const config = useRuntimeConfig();
      const apiUri = config.public.apiUri;
      const jsonData = JSON.stringify(data);
      try {
        const data = await $fetch(apiUri + path, {
          method: "PATCH",
          body: jsonData,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        return data;
      } catch (error) {
        this.handleError(error);
      }
    },
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
        this.handleError(error);
      }
    },
    handleError(error) {
      console.log('masuk error handle error')
      //buat method untuk catch error ini supaya bisa dipakai semua method
      if (error.status == 401) {
        //hapus token
        const token = useCookie("token");
        // token.value = "";

        //lempar ke halaman login
        return navigateTo("/admin/login");
      }
      //400 Bad request
      if (error.status == 400) {
        throw error;
      }
      //selain 401
      throw createError({
        statusCode: error.status || 500, //default code 500
        statusMessage: error.data.message || "Internal Server Error!", //default message
      });
    },
  },
});
