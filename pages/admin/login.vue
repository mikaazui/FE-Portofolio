<template>
    <div>
        <div
            class="w-full flex flex-col justify-center min-h-screen bg-gradient-to-br from-gray-400 from-10% to-transparent to-100%">
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
                        <span class="text-right text-sm text-error" v-if="errorMessage.email">{{ errorMessage.email
                        }}</span>
                    </label>
                    <!-- password -->
                    <label class="form-control w-full max-w-xs">
                        <div class="label">
                            <span class="label-text">Password</span>
                        </div>
                        <input input v-model="formData.password" type="password" placeholder="Password"
                            class="input bg-transparent input-sm input-ghost input-bordered rounded-sm w-full max-w-xs" />
                        <span class="text-right text-sm text-error" v-if="errorMessage.password">{{ errorMessage.password
                        }}</span>
                    </label>
                    <button @click="handleLogin" class=" btn btn-ghost btn-outline w-[319px] mt-5 rounded-sm">Login
                    </button>
                    <span class="loading loading-spinner loading-sm mt-5" v-if="isLoading"></span>
                    <span class="pt-5 text-sm text-error" v-if="fetchError">{{ fetchError }}</span>
                </div>
                <DefaultlayoutThemeToggle class=" fixed left-2 bottom-2 opacity-50" />
            </div>

        </div>
        <div class="fixed bottom-2 right-2 text-xs text-white/40">&copy2024 Valent, All Rights Reserved.</div>

    </div>
</template>

<script setup>
import Joi from 'joi';
definePageMeta({
    layout: false,
    middleware: ['auth'],
    ssr: true
});

const errorMessage = ref({})
const fetchError = ref('')
const isLoading = ref(false)
const formData = ref({
    email: '',
    password: ''
});
//PINIA/AUTH STORE
const authStore = useAuthStore()
const handleLogin = async () => {
    if (isLoading.value) return;
    
    //reset error messages
    errorMessage.value = {};
    fetchError.value = ('');
    isLoading.value = true;

    try {
        console.log('masuk handle login')
        await authStore.login(formData.value)

    } catch (error) {

        if (error instanceof Joi.ValidationError) {
            errorMessage.value = joiError(error)
        } else {
            // fetchError.value = error.data.message
            console.log(error)
            fetchError.value = error.data.message

        }
        isLoading.value = false;
    }
};

</script>
