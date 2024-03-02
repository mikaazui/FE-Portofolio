import { defineStore } from 'pinia';
import { useApiStore } from "./apiStore";

export const useSkillStore = defineStore("skills", {
  state: () => ({ 
    skills: null,
    categories: []
   }),
  actions: {
    async get () {
      const Api = useApiStore()
      this.skills = await Api.get('/skills')
    },
    async getCategories () {
      const Api = useApiStore()
      this.categories = await Api.get('/skill_categories')
    },
    async create (data) {
      const Api = useApiStore()
      //validasi
      console.log(data)
      
      data = Validate(isSkill, data)
      console.log('abis validasi')
      console.log(data)
      //fetch
      await Api.post('/skill', data)
      
    },
    async delete (id) {
      const Api = useApiStore()
      //delete fetch
      await Api.delete(`/skill/${id}`)
    }
  }
});
