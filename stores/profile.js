import { defineStore } from "pinia";

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: null,
  }),
  actions: {

    async get(){
      const Api = useApiStore();

     this.profile = await Api.get('/profile')
    },
    async update(data){
      // const api = useApiStore();
      console.log('data before validation')
      console.log(data)
      //validate
      data - Validate(isUpdateProfile, data)
      console.log('data after validation')
      console.log(data)
    }

    
  },
});
