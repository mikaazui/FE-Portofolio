import { defineStore } from "pinia";
import { useApiStore } from "./apiStore";
import { isCreateProject,isUpdateProject } from "~/utils/projectValidation.js";

export const useProjectStore = defineStore("project", {
  state: () => ({ data: null }),
  getters: {
    projects: (state) => (state.data ? state.data.data : []),
    limit: (state) => (state.data ? state.data.limit : 10),
    maxPage: (state) => (state.data ? state.data.maxPage : 1),
    page: (state) => (state.data ? state.data.page : 1),
    total: (state) => (state.data ? state.data.total : 0),
  },
  actions: {
    async get(page = 1, search = "") {
      const api = useApiStore();
      const minimalDelay  = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });

      const response = await Promise.all([
        api.get(`/projects?limit=12&page=${page}&search=${search}`),
        minimalDelay
      ])
      this.data = response[0];
        console.log(this.data);
      },
      async getById(id) {
        const api = useApiStore();
        return api.get(`/project/${id}`);
        
    },
    async create(data, skills, photos) {
      const Api = useApiStore();

      data = Validate(isCreateProject, data);

      // buat FORM DATA
      const formData = new FormData();

      // key -> value
      const array_keys = Object.keys(data);
      for (const key of array_keys) {
          // append by key & value
          formData.append(key, data[key]);
      }

      for (let i = 0; i < skills.length; i++) {
          const id = skills[i];

          formData.append(`skills[${i}]`, id)
      }
      // append foto dengan loop
      for (const photo of photos) {
          formData.append("photos", photo)
      }

      await Api.post('/project', formData);
    },
    async update (id, data, skills, new_photos) {
      const Api = useApiStore();

      data = Validate(isUpdateProject, data);
      
      //foto lama
      const old_photos = data.photos;
      delete data.photos;
      
      // buat FORM DATA
      const formData = new FormData();
      
      // key -> value
      const array_keys = Object.keys(data);
      for (const key of array_keys) {
          // append by key & value
          formData.append(key, data[key]);
        }
        
        for (let i = 0; i < skills.length; i++) {
          const id = skills[i];

          formData.append(`skills[${i}]`, id)
      }

      //append foto lama
      for (let i = 0; i < old_photos.length; i++) {
        const id = old_photos[i];
        formData.append(`photos[${i}]`, id);
      }
      //append foto baru
      for (const photo of new_photos) {
          formData.append('photos', photo);
      }
      
      
      await Api.put(`/project/${id}`, formData);
    },
    async delete(id) {
      const Api = useApiStore();
      //delete fetch
      await Api.delete(`/project/${id}`);
    },
  },
});
