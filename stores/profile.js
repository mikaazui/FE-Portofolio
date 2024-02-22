import { defineStore } from "pinia";

export const useProfileStore = defineStore('profile', {
  state: () => ({profile: null
}),
  actions: {

    async get(){
      const Api = useApiStore();

     this.profile = await Api.get('/profile')
    },

    async update(data, avatar){
      const Api = useApiStore();
      const formData = new FormData();
      data = Validate(isUpdateProfile, data)
      console.log(avatar)
      //validate
      // CARA PERTAMA
      for (let[key, value] of Object.entries(data)) {
        console.log()

        if(value == null) {
          value = ''

        }
        formData.append(key, value);
      }
      console.log(formData)
      if (avatar) {
        formData.append('avatar', avatar);
      }
      
      this.profile = await Api.put('/profile', formData);
    }

    
  },
});
