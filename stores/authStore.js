import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({user: null}),
  actions: {
    async login(formData) {
      // get api uri
      const config = useRuntimeConfig();
      const apiUri = config.public.apiUri;
      console.log(formData);
      //convert to json
      const jsonData = JSON.stringify(formData);

      const user = await $fetch(apiUri + "/login", {
        method: "POST",
        body: jsonData,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      console.log(user);
      this.user = user;
      //sementara redirect ke halaman home
      navigateTo("/admin");
    },
    async logout() {
      //handle logout
      const config = useRuntimeConfig();
      const apiUri = config.public.apiUri;
      const response = await $fetch(apiUri + "/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      console.log(response);
      navigateTo("/admin/login");
    },
    async getUser() {
      const Api = useApiStore();
      const user = await Api.get('/user')
      this.user = user;
      
      // try {
      //   const config = useRuntimeConfig();
      //   const apiUri = config.public.apiUri;
      //   const user = await $fetch(apiUri + "/user", {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     credentials: "include",
      //   });
      //   this.user = user;
        
      // } catch (error) {
      //   console.log('========= Error =========')
      //   console.log(error)
      // }
    },
  },
});
