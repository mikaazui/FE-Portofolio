export default defineNuxtRouteMiddleware( async(to, from) => {
// handle fetch profile data
// fetch profile
const useProfile = useState ('profile');

if (!useProfile.value) {
    console.log('fetch data dari profile middleware')
    const fetchProfile = await $fetch("/api/profile");
    useProfile.value = fetchProfile;
}

console.log('fetch data dari profile middleware')
})
