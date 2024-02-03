export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apiUri = config.apiUri;

  //ambil query, page
  const { page } = getQuery(event);

  try {
    const blogs = await $fetch(`${apiUri}/blogs?page=${page}&limit=9`);
    return blogs;
  } catch (error) {
    throw error;
  }
});
