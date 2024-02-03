export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apiUri = config.apiUri;

  //ambil query, page
  const { page } = getQuery(event);

  try {
    const projects = await $fetch(`${apiUri}/projects?page=${page}&limit=9`);
    return projects;
  } catch (error) {
    throw error;
  }
});
