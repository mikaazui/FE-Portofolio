import { defineStore } from 'pinia';
import { useApiStore } from "./apiStore";

export const useSkillStore = defineStore("skills", {
  state: () => ({ 
    skills: null,
    categories: [],
    skillsByCategory: []
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
    async getSkillsByCategory () {
      const Api = useApiStore()
      this.skillsByCategory = await Api.get(`/skillCategory`) 
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
    async update (id, data) {
      const Api = useApiStore()
      //validasi
      data = Validate(isSkill, data)
      //fetch
      this.skills  = await Api.put(`/skill/${id}`, data)
      this.categories  = await Api.put(`/skill/${id}`, data)
    },
    async delete (id) {
      const Api = useApiStore()
      //delete fetch
      await Api.delete(`/skill/${id}`)
    }
  }
});
