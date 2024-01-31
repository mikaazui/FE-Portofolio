export default defineEventHandler(async (event) => {
  //ini handle ssr
const response =  await $fetch("http://localhost:5000/portofolio")
return response;
})
