<template>
  <div>
    <AdminSkillRemoveModalCon
      :show="remove"
      :data="deleteData"
      @close="remove = false"
      @yes="handleDelete"
    >
      <div v-if="deleteData" class="pb-3 text-xl font-semibold">
        Are you sure to delete {{ deleteData.title }}?
      </div>
      <div>This operation cannot be undoed after executed</div>
    </AdminSkillRemoveModalCon>
    <div class="flex items-center justify-between pb-3 text-xl font-semibold">
      <div class="flex items-center gap-3">
        <lucideFile :size="20" class="" />Blog
      </div>
      <NuxtLink 
        to="/admin/blogs/new"
        class="btn btn-md btn-primary max-lg:w-12 flex items-center justify-center"
      >
        <lucidePlus :size="20" />
        <div class="max-lg:hidden">Add Blog</div>
      </NuxtLink>
    </div>
    

    <div
      class="flex max-sm:flex-col max-sm:items-end sm:justify-between gap-2 my-3"
    >
      <input
        @keyup.enter="
          page = 1;
          getData();
        "
        v-model="filter"
        type="text"
        placeholder="Type here"
        class="input inpur-sm input-bordered w-full max-w-xs"
      />
      <div class="join">
        <button class="join-item btn" @click="prevPage">«</button>
        <button class="join-item btn">
          {{ page }} / {{ BlogStore.maxPage }}
        </button>
        <button class="join-item btn" @click="nextPage">»</button>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-2 sm:grid-cols-4">
      <div
        v-for="blog in BlogStore.blogs"
        :key="blog.id"
        class="card bg-base-100 shadow-xl"
      >
        <figure>
          <div
            class="dropdown dropdown-bottom dropdown-end absolute right-0 top-0 lg:hidden"
          >
            <div
              tabindex="0"
              role="button"
              class="btn btn-sm dark:bg-white/40 btn-ghost btn-circle m-1"
            >
              <LucideMoreVertical :size="16" />
            </div>

            <div class="">
              <ul
                tabindex="0"
                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button
                    @click="
                      updateData = edu;
                      edit = true;
                    "
                    class="rounded-lg p-1.5"
                  >
                    <LucidePen :size="16" />
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    @click="
                      remove = true;
                      deleteData = blog;
                    "
                     :data="deleteData"
                    class="bg-error rounded-lg p-1.5"
                  >
                    <LucideTrash2 :size="16" />
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <img
            class="w-full aspect-video object-cover"
            v-if="blog.photos.length"
            :src="apiUri + blog.photos[0].path"
          />
          <div v-else class="bg-neutral/20 aspect-video w-full"></div>
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ blog.title }}</h2>
          <p class="line-clamp-2">{{ blog.content }}</p>
          <div class="flex-col flex gap-3 justify-end">
            <button
              @click="
                updateData = edu;
                edit = true;
              "
              class="btn btn-sm rounded-lg p-1.5"
            >
              <LucidePen :size="16" />
              Edit
            </button>
            <button
              @click="
                remove = true;
                deleteData = blog;
              "
               :data="deleteData"
              class="btn btn-sm btn-error flex items-center rounded-lg p-1.5"
            >
              <LucideTrash2 :size="16" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- TODO TAMBAHIN SVG NOT FOUND -->
    <div v-if="BlogStore.blogs.length == 0">
      <!-- TODO ADD IMAGE NOT FOUND -->
      <div class="text-center text-xl opacity-35 font-semibold">No Data</div>
    </div>

    <div class="flex justify-end my-3">
      <div class="join">
        <button class="join-item btn" @click="page != 1 ? page-- : page">
          «
        </button>
        <button class="join-item btn">
          {{ page }} / {{ BlogStore.maxPage }}
        </button>
        <button
          class="join-item btn"
          @click="page != BlogStore.maxPage ? page++ : page"
        >
          »
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});

const config = useRuntimeConfig();
const apiUri = config.public.apiUri;
const BlogStore = useBlogStore();
const page = ref(1);
const success = ref(false);
const deleteData = ref(null);
const edit = ref(false);
const updateData = ref("");
const remove = ref(false);
onBeforeMount(async () => {
  await getData();

  // console.log(BlogStore.data)
  // console.log(BlogStore.blogs)
  // console.log(BlogStore.total)
  // console.log(BlogStore.maxPage)
});

const prevPage = async () => {
  if (page.value != 1) {
    page.value = page.value - 1;
    await getData();
  }
};

const nextPage = async () => {
  if (page.value != BlogStore.maxPage) {
    page.value = page.value - 1;
    await getData();
  }
};
//fetch data blog
const getData = async () => {
  await BlogStore.get(page.value, filter.value);
};

const filter = ref("");
const handleDelete = async (id) => {
  if (!deleteData.value) return;
  try {
    console.log(id);
    //delete data
    await BlogStore.delete(deleteData.value.id)
    console.log(deleteData.value.id);

    //refresh data
    await getData();
  } catch (error) {
    console.log(error);
  }
  // BlogStore.remove(removeId.value)
};
</script>
