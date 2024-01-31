export default defineEventHandler(async (event) => {
  //ini handle ssr
  return await $fetch("http://localhost:5000/portofolio")
})
