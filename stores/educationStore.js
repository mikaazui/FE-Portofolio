import { defineStore } from "pinia";
import { useApiStore } from "./apiStore";

export const useEducationStore = defineStore("education", {
  state: () => ({ education: null }),
  actions: {
    async get() {
      const api = useApiStore();
      const minimalDelay  = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      const response = await Promise.all([
        api.get("/educations"),
        minimalDelay
      ])
      
      this.education = response[0];

      console.log(this.education);
    },
    async delete(id) {
      const api = useApiStore();
      console.log(`ready to delete ${id}`);
      this.education = await api.delete(`/education/${id}`);
    },
    async create(data) {
      try {
        const api = useApiStore();
        console.log(`data before validation`);
        console.log(data);
        //validasi
        data = Validate(isEducation, data);
        console.log(`data after validation`);
        console.log(data);
  
        await api.post("/education", data);
        
      } catch (error) {
        console.log(error)
      }
    },
    async update(id, data) {
      try {
        const api = useApiStore();
        console.log(`data before validation`);
        console.log(data);
        //validasi
        data = Validate(isEducation, data);
        this.education = await api.put(`/education/${id}`);
        console.log(`data after validation`);
        console.log(data);
        
      } catch (error) {
        console.log(error)
      }
  }
}
});
