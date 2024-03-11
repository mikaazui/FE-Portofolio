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
      await Api.delete("/logout");
      navigateTo("/admin/login");
    },
    async getUser() {
      const Api = useApiStore();

      //fetch data using api method
      // return data dipake ke state, supaya bisa dibaca oleh page yang membutuhkan
      this.user = await Api.get("/user");
    },
    async updateUser(data) {
      data = Validate(updateUserValidation, data)
      // return data dipake ke state, supaya bisa dibaca oleh page yang membutuhkan
      console.log('data dari pinia ================')
      console.log(data)
      //fetch data using api method
      const Api = useApiStore();
      this.user = await Api.put("/user", data);
    },
    async isUserExist() {
      const Api = useApiStore();
      const {isExist} = await Api.get("/is-user-exist"); {isExist : true} 
      return isExist
    },
    async createUser(data) {
      const Api = useApiStore();
      data = Validate(createFirstUserValidation, data)
      //fetch
      this.user = await Api.post("/first-user", data);
    },
  },
});
