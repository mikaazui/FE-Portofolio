<template>
    <div>
        <div
            class="w-full flex flex-col justify-center min-h-screen bg-gradient-to-tl from-gray-400 from-10% to-transparent to-100%">
            <div class="text-white/70 flex flex-col items-center">
                <div class="p-5 flex flex-col items-center w-[360px] md:w-[380px] border-2 border-white/30 rounded-lg">
                    <div class="flex-none pb-24 pt-20">
                        <img src="/logo.svg" class="w-20" alt="" srcset="">
                    </div>
                    <!-- email -->
                    <label class="form-control w-full max-w-xs">
                        <div class="label">
                            <span class="label-text">Email Address</span>
                        </div>
                        <input input v-model="formData.email" type="text" placeholder="Email"
                            class="input bg-transparent input-sm input-ghost input-bordered rounded-sm w-full max-w-xs" />
                    </label>
                    <!-- password -->
                    <label class="form-control w-full max-w-xs">
                        <div class="label">
                            <span class="label-text">Password</span>
                        </div>
                        <input input v-model="formData.password" type="password" placeholder="Password"
                            class="input bg-transparent input-sm input-ghost input-bordered rounded-sm w-full max-w-xs" />
                    </label>
                    <button @click="doLogin" class=" btn btn-ghost btn-outline w-[319px] mt-5 rounded-sm">Login</button>
                </div>
                <DefaultlayoutThemeToggle class=" fixed left-2 bottom-2 opacity-50"/>    
            </div>

        </div>
        <div class="fixed bottom-2 right-2 text-xs text-white/40">&copy2024 Valent, All Rights Reserved.</div>

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
        },
        credentials: 'include'
    });
    console.log(response)
    //sementara redirect ke halaman home
    navigateTo('/admin')
};
</script>
