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
        async update () {

        },
        async delete (id) {
            const api = useApiStore();
            // this.education = await api.delete(`/education/${id}`)
            console.log(`ready to delete ${id}`)
        }

    }

})