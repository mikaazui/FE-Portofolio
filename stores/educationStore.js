import { defineStore } from "pinia";
import { useApiStore } from "./apiStore";

export const useEducationStore = defineStore("education", {
    state: () => ({ education: null }),
    actions: {
        async get () {
            const api = useApiStore();
            this.education = await api.get("/educations");
            console.log(this.education)
        },
        async delete (id) {
            const api = useApiStore();
            console.log(`ready to delete ${id}`)
            this.education = await api.delete(`/education/${id}`)
        },
        async update () {

        }
        
    }

})