import { defineStore } from 'pinia'
import { useApiStore } from "./apiStore";
import { isCreateBlog } from '~/utils/blogValidation';

export const useBlogStore = defineStore('blog', {
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
    blogs: (state) => state.data ? state.data.data : [],
    limit: (state) => state.data ? state.data.limit : 10,
    maxPage: (state) => state.data ? state.data.maxPage : 1,
    page: (state) => state.data ? state.data.page : 1,
    total: (state) => state.data ? state.data.total : 0

    
  },
  actions: {

    async get(page = 1, search = '') {
      const api = useApiStore();
      this.data = await api.get(`/blogs?limit=12&page=${page}&search=${search}`);
        console.log(this.data);
    },
    async create (data) {
      const Api = useApiStore();
      //validasi
      data = Validate(isCreateBlog, data);
      //fetch
      await Api.post("/blog", data);
    },
    async delete(id) {
      const Api = useApiStore();
      //delete fetch
      await Api.delete(`/blog/${id}`);
    }

  }
})
