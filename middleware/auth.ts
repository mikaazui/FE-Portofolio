export default defineNuxtRouteMiddleware((to, from) => {
// check token > melalui cookies
const token = useCookie('token')
console.log('token ============')
console.log(token.value)
if (to.path != '/admin/login') {
    //bukan halaman login
    //check token
    if (!token.value) {
        //redirect ke halaman login
        return navigateTo('/admin/login')
    }
}

// check user data

})
