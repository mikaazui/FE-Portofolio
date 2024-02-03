export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  //ambil data dari backend
  const config = useRuntimeConfig();
  const apiUri = config.apiUri;

  //return data ke halaman / page
  try {
    return await $fetch(`${apiUri}/blog/${id}`);
  } catch (error) {
    throw error;
  }
});
