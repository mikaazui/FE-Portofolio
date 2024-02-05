
export default defineEventHandler(async (event) => {
  //ini handle ssr
  const config = useRuntimeConfig()
  const apiUri = config.apiUri

  try {
    const response =  await $fetch(apiUri + "/profile")
    return response;
  } catch (error) {
    throw error;
  }
})
