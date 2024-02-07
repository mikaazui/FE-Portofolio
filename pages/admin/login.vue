<template>
  <div class="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center justify-center" data-theme="retro">
    <div class="bg-white h-full w-full flex justify-center">
      <imagesProgrammer />
    </div>
    <div class="max-md:absolute p-16 h-full w-full flex flex-col items-center justify-center">
      <!-- content form -->
      <div class="bg-black/10 md:bg-white/50 rounded-md h-[400px] w-[380px] p-16">
        <div class="text-4xl text-center font-semibold">{{ fullname }}</div>

        <div class="flex flex-col items-center h-full w-full justify-center">
          <!-- email -->
          <div class="w-full">
            <label for="email">Email</label>
            <input v-model="formData.email" class="p-1.5 rounded-sm block w-full" type="email" name="email" id="email"
              placeholder="Type your Email" />
          </div>
          <!-- password -->
          <div class="w-full">
            <label for="email">Password</label>
            <input v-model="formData.password" class="p-1.5 rounded-sm block w-full" type="password" name="password"
              id="password" placeholder="Type your password" />
          </div>
          <!-- submit button -->
          <div class="w-full flex items-center my-7 justify-center">
            <button @click="doLogin" type="submit" class="btn btn-success rounded-sm w-full">Submit</button>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: 'profile'

});
const config = useRuntimeConfig()
const apiUri = config.public.apiUri

const { value: useProfile } = useState('profile')
const fullname = `${useProfile.firstName} ${useProfile.lastName}`

const formData = ref({
  email: '',
  password: ''
});


const doLogin = async () => {
  console.log(formData.value)
  const jsonData = JSON.stringify(formData.value)
  const response = await $fetch(apiUri + '/login', {
    method: 'POST',
    body: jsonData,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(response)
  //sementara redirect ke halaman home
  navigateTo('/')

}
</script>
