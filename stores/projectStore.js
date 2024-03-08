import { defineStore } from "pinia";
import { useApiStore } from "./apiStore";
import { isCreateProject } from "~/utils/projectValidation.js";

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
      this.data = await api.get(
        `/projects?limit=12&page=${page}&search=${search}`
        );
        console.log(this.data);
      },
      async getById(id) {
        const api = useApiStore();
        return api.get(`/project/${id}`);
        
    },
    async create(data, skills) {
      const Api = useApiStore();

      console.log('data sebelum validasi')
      console.log(data)
      data = Validate(isCreateProject, data);
      console.log('data abis validasi')
      console.log(data)

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
      // // append foto dengan loop
      // for (const photo of photos) {
      //     formData.append("photos", photo)
      // }

      await Api.post('/project', formData);
    },
    async update (id, data, new_photos) {
      const Api = useApiStore();
      //validasi
      console.log('data sebelum validsi')
      console.log(data)
      data = Validate(isUpdateProject, data);
      console.log('data sesudah validsi')
      console.log(data)
      
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);

      //append foto lama by looping
      for (let i = 0; i < data.photos.length; i++) {
        const id = data.photos[i];
        formData.append(`photos[${i}]`, id);

        console.log(formData.get(`photos[${i}]`));
      }

      console.log(formData.get('title'));
      console.log(formData.get('content'));

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
