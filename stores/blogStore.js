import { defineStore } from "pinia";
import { useApiStore } from "./apiStore";
import { isCreateBlog } from "~/utils/blogValidation";

export const useBlogStore = defineStore("blog", {
  state: () => ({ data: null }),
  getters: {
    // blogs(state) {
    //   if (state) {
    //     return state.data.data
    //   }
    //   //default value
    //   return []
    // },
    // limit (state) {
    //   if (state) {
    //     return state.data.limit
    //   }
    //   return 10
    // },
    // maxPage (state) {
    //   if (state) {
    //     return state.data.maxPage
    //   }
    //   return 1
    // },
    // page (state) {
    //   if (state) {
    //     return state.data.page
    //   }
    //   return 1
    // },
    // total (state) {
    //   if (state) {
    //     return state.data.total
    //   }
    //   return 0
    // },
    blogs: (state) => (state.data ? state.data.data : []),
    limit: (state) => (state.data ? state.data.limit : 10),
    maxPage: (state) => (state.data ? state.data.maxPage : 1),
    page: (state) => (state.data ? state.data.page : 1),
    total: (state) => (state.data ? state.data.total : 0),
  },
  actions: {
    async get(page = 1, search = "") {
      const api = useApiStore();
      this.data = await api.get(
        `/blogs?limit=12&page=${page}&search=${search}`
        );
        console.log(this.data);
      },
      async getById(id) {
        const api = useApiStore();
        return api.get(`/blog/${id}`);
        
    },
    async create(data, photos) {
      const Api = useApiStore();
      data = Validate(isCreateBlog, data);
      console.log("masuk api");
      
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);

      //append foto dengan loop
      for (const photo of photos) {
        formData.append("photos", photo);
      }
      console.log(data);

      //fetch
      await Api.post("/blog", formData);
      console.log("blog uploaded");
    },
    async delete(id) {
      const Api = useApiStore();
      //delete fetch
      await Api.delete(`/blog/${id}`);
    },
    async update (id, data, new_photos) {
      const Api = useApiStore();
      //validasi
      console.log('data sebelum validsi')
      console.log(data)
      data = Validate(isUpdateBlog, data);
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

      await Api.put(`/blog/${id}`, formData);
    },
  },
});
