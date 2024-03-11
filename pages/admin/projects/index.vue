<template>
  <div>
    <AdminSkillRemoveModalCon :show="remove" :data="deleteData" @close="remove = false" @yes="handleDelete">
      <div v-if="deleteData" class="pb-3 text-xl font-semibold">
        Are you sure to delete {{ deleteData.title }}?
      </div>
      <div>This operation cannot be undoed after executed</div>
    </AdminSkillRemoveModalCon>
    <div class="flex items-center justify-between pb-3 text-xl font-semibold">
      <div class="flex items-center gap-3">
        <lucideFile :size="20" class="" />project
      </div>
      <NuxtLink to="/admin/projects/new" class="btn btn-md btn-primary max-lg:w-12 flex items-center justify-center">
        <lucidePlus :size="20" />
        <div class="max-lg:hidden">Add project</div>
      </NuxtLink>
    </div>

    <div class="flex max-sm:flex-col max-sm:items-end sm:justify-between gap-2 my-3">
      <input @keyup.enter="
      page = 1;
    getData();
    " v-model="filter" type="text" placeholder="Type here" class="input inpur-sm input-bordered w-full max-w-xs" />
      <div class="join">
        <button class="join-item btn" @click="prevPage">«</button>
        <button class="join-item btn">
          {{ page }} / {{ ProjectStore.maxPage }}
        </button>
        <button class="join-item btn" @click="nextPage">»</button>
      </div>
    </div>
<!-- TODO UPDATE BAGIAN PROJECT -->
    <div v-if="ProjectStore.data">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div v-for="project in ProjectStore.projects" :key="project.id"
          class="card bg-base-100 shadow-xl hover:scale-105 transition ease-in-out duration-150">
          <figure>
            <div class="dropdown dropdown-bottom dropdown-end absolute right-0 top-0 md:hidden">
              <div tabindex="0" role="button" class="btn btn-sm dark:bg-white/40 btn-ghost btn-circle m-1">
                <LucideMoreVertical :size="16" />
              </div>

              <div class="">
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <NuxtLink :to="`/admin/projects/update?id=${project.id}`" :data="project" class="rounded-lg p-1.5">
                      <LucidePen :size="16" />
                      Edit
                    </NuxtLink>
                  </li>
                  <li>
                    <button @click="remove = true; deleteData = project;" :data="deleteData"
                      class="bg-error rounded-lg p-1.5">
                      <LucideTrash2 :size="16" />
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <img class="w-full aspect-video object-cover group group-hover:scale-150 transition-300"
              v-if="project.photos.length" :src="apiUri + project.photos[0].path" />
            <div v-else class="bg-neutral/20 aspect-video w-full"></div>
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ project.title }}</h2>
            <p class="line-clamp-2">{{ project.content }}</p>
            <div class="flex-col flex gap-3 justify-end max-md:hidden">
              <NuxtLink :to="`/admin/projects/update?id=${project.id}`" :data="project"
                class="btn btn-sm rounded-lg p-1.5">
                <LucidePen :size="16" />
                Edit
              </NuxtLink>
              <button @click="remove = true; deleteData = project;" :data="deleteData"
                class="btn btn-sm btn-error flex items-center rounded-lg p-1.5">
                <LucideTrash2 :size="16" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- skeleton -->
    <div v-else>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div v-for="n in 12" :key="n"
          class="card bg-base-100 shadow-xl hover:scale-105 transition ease-in-out duration-150">
          <figure>
            <div class="dropdown dropdown-bottom dropdown-end absolute right-0 top-0 md:hidden">
              <div tabindex="0" role="button" class="btn btn-sm dark:bg-white/40 btn-ghost btn-circle m-1">
                <LucideMoreVertical :size="16" />
              </div>

              <div class="">
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <NuxtLink>
                      <LucidePen :size="16" />
                      Edit
                    </NuxtLink>
                  </li>
                  <li>
                    <button
                      class="bg-error rounded-lg p-1.5">
                      <LucideTrash2 :size="16" />
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div class="aspect-video w-full ">
              <div class="skeleton aspect-video  w-full h-full"></div>
            </div>
          </figure>
          <div class="card-body">
            <div class="skeleton h-5 w-full"></div>
            <div class="flex flex-col gap-2">
              <div class="skeleton h-5 w-40"></div>
              <div class="skeleton h-5 w-full"></div>
            </div>

            <div class="flex-col mt-2 flex gap-3 justify-end max-md:hidden">
             <div class="skeleton rounded-lg h-8 w-full"></div>
             <div class="skeleton rounded-lg h-8 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TODO TAMBAHIN SVG NOT FOUND -->
    <div v-if="ProjectStore.projects.length == null">
      <!-- TODO ADD IMAGE NOT FOUND -->
      <div class="text-center text-xl opacity-35 font-semibold">No Data</div>
    </div>

    <div class="flex justify-end my-3">
      <div class="join">
        <button class="join-item btn" @click="page != 1 ? page-- : page">
          «
        </button>
        <button class="join-item btn">
          {{ page }} / {{ ProjectStore.maxPage }}
        </button>
        <button class="join-item btn" @click="page != ProjectStore.maxPage ? page++ : page">
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
const ProjectStore = useProjectStore();
const page = ref(1);
const success = ref(false);
const deleteData = ref(null);
const edit = ref(false);
const updateData = ref("");
const remove = ref(false);

onBeforeMount(async () => {
  await getData();
});

const prevPage = async () => {
  if (page.value != 1) {
    page.value = page.value - 1;
    await getData();
  }
};

const nextPage = async () => {
  if (page.value != ProjectStore.maxPage) {
    page.value = page.value - 1;
    await getData();
  }
};
//fetch data project
const getData = async () => {
  await ProjectStore.get(page.value, filter.value);
};

const filter = ref("");
const handleDelete = async (id) => {
  if (!deleteData.value) return;
  try {
    console.log(id);
    //delete data
    await ProjectStore.delete(deleteData.value.id);
    console.log(deleteData.value.id);

    //hide modal
    remove.value = false;
    //success modal
    success.value = true;
    //hide success modal
    setTimeout(() => {
      success.value = false;
    }, 3000);

    //refresh data
    await getData();
  } catch (error) {
    console.log(error);
  }
  // ProjectStore.remove(removeId.value)
};
</script>
