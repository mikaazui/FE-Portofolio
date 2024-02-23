import { defineStore } from "pinia";
import { useApiStore } from "./apiStore";

export const useExperienceStore = defineStore("experience", {
    state: () => ({ experience: null }),
    actions: {
        async get () {
            const api = useApiStore();
            this.experience = await api.get("/experiences");
            console.log(this.experience)
        },
        async delete (id) {
            const api = useApiStore();
            console.log(`ready to delete ${id}`)
            this.experience = await api.delete(`/experience/${id}`)
        },
        async update () {

        }
        
    }

})