export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    const token = useCookie('token')

    // check token > melalui cookies
    if (to.path != '/admin/login') {
        //bukan halaman login

        //check token
        if (!token.value) {
            //redirect ke halaman login
            return navigateTo('/admin/login')
        }
        if (!authStore.user) {
            //fetch user data
            authStore.getUser()
        }
        //kalo error balik ke halaman login
        if (!authStore.user) {
            return navigateTo('/admin/login')
        }
    }
    else {
        //ke halaman login
        // check token, jika return ke halaman index
        if (token.value) {
            return navigateTo('/admin')
        }
    }

    // check user data

})
