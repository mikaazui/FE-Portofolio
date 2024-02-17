import { defineStore } from "pinia";
import { useApiStore } from "./apiStore";
import { loginValidate } from "~/utils/authValidation";

export const useAuthStore = defineStore("auth", {
  state: () => ({ user: null }),
  actions: {
    async login(data) {
      try {
        const Api = useApiStore();

        data = Validate(loginValidate, data);

        //fetch data using api method
        // return data dipake ke state, supaya bisa dibaca oleh page yang membutuhkan
        this.user = await Api.post("/login", data);
        //redirect ke halaman admin
        navigateTo("/admin");
      } catch (error) {
        console.log("error dari auth store");
        throw error;
      }
    },
    async logout() {
      const Api = useApiStore();
      //delete data using api method
      // return data dipake ke state, supaya bisa dibaca oleh page yang membutuhkan
      this.user = await Api.delete("/logout");
      navigateTo("/admin/login");
    },
    async getUser() {
      const Api = useApiStore();

      //fetch data using api method
      // return data dipake ke state, supaya bisa dibaca oleh page yang membutuhkan
      this.user = await Api.get("/user");
    },
  },
});
