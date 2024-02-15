import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({}),
  actions: {
    async login(formData) {
      // get api uri
      const config = useRuntimeConfig();
      const apiUri = config.apiUri;
      console.log(formData);
      //convert to json
      const jsonData = JSON.stringify(formData);
      
      const response = await $fetch(apiUri + "/login", {
        method: "POST",
        body: jsonData,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      console.log(response);
      //sementara redirect ke halaman home
      navigateTo("/admin");
      //handle login
      console.log("handle login");
    },
    logout() {
      //handle logout
      console.log("handle logout");
    },
  },
});
