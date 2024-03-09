<template>
  <LazyAdminExperienceForm :show="addExp" @close="addExp = false" @saved="saved" />
  <!-- //TODO ntar ubah ini ya -->
  <LazyAdminEducationModalEdit :show="edit" @close="edit = false" />
  <LazyAdminEducationRemoveConModal :show="remove" :data="deleteData" @close="remove = false" @yes="handleDelete">
    <div v-if="deleteData" class="pb-3 text-xl font-semibold">Are you sure to delete {{ deleteData.company }}?
    </div>
    <div>This operation cannot be undoed after executed</div>
  </LazyAdminEducationRemoveConModal>
  <div>
    <LazyAdminAlertSuccess :show="success" />
    <div class="pb-3 text-xl font-semibold">
      <div class="flex items-center justify-between  text-xl font-semibold">
        <div class="flex items-center gap-3">
          <LucideBriefcase :size="20" class="" />Experience
        </div>
        <button @click="addExp = true" class="btn btn-md btn-primary">
          <lucidePlus :size="20" />
          Add Experience
        </button>
      </div>
    </div>
    <input v-model="filter" type="text" placeholder="Search" class="w-full max-w-xs input input-sm input-bordered mb-5" />
    <div class="overflow-x-auto max-lg:hidden">
      <table class="table table-zebra">
        <!-- head -->
        <thead>
          <tr>
            <th>Company</th>
            <th>Periode</th>
            <th>Title</th>
            <th>Location</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody v-if="dataTable">
          <!-- row 1 -->
          <tr v-for="exp in dataTable" :key="exp.id">
            <td class="whitespace-nowrap">{{ exp.company }}</td>
            <td class="whitespace-nowrap">{{ exp.readableStartDate }} - {{ exp.readableEndDate ? exp.readableEndDate :
              "Present" }}</td>
            <td>{{ exp.title ? exp.title : "-" }}</td>
            <td>{{ exp.location ? exp.location : "-" }}</td>
            <td>
              <div class="flex items-center my-auto">
                <button @click="deleteData = exp; remove = true" class="m-2 btn btn-outline btn-sm btn-circle">
                  <LucideTrash2 :size="16" />
                </button>
                <button @click="edit = true" class="m-2 btn btn-outline btn-sm btn-circle">
                  <lucidePen size="16" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        <!-- skeleton loading -->
        <!-- TODO TAR BIKIN BUAT YANG EXP -->
        <tbody v-else>
          <AdminEducationSkeletonLoad />
        </tbody>
      </table>
    </div>

    <div class="lg:hidden py-5" v-if="dataTable">
      <div v-for="exp in dataTable" :key="exp.id" class="card-body bg-base-200 drop-shadow-lg">
        <div class="uppercase font-semibold">{{ exp.title }} </div>
        <div class="flex items-center justify-between">
          <div>{{ dayjs(exp.startDate).format('D MMMM YYYY') }} - {{ dayjs(exp.endDate).format('D MMMM YYYY') ?
            dayjs(exp.endDate).format('D MMMM YYYY') : "Present" }}</div>
          <div class="flex justify-between gap-2">

            <div class="dropdown dropdown-bottom dropdown-end">
              <div tabindex="0" role="button" class="btn bg-base-300 m-1">
                <LucideMoreVertical :size="16" />
              </div>

              <div class="">
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a @click="updateData = exp; edit = true" class="rounded-lg p-1.5">
                      <LucidePen :size="16" />
                      Edit
                    </a>
                  </li>
                  <li>
                    <a @click="deleteData = exp; remove = true" class="bg-error rounded-lg p-1.5">
                      <LucideTrash2 :size="16" />
                      Delete
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between gap-3">
          <div class="flex items-center grow justify-between btn btn-accent">
            <div>{{ exp.company }}</div>
          </div>
          <div class="flex items-center grow justify-between btn btn-accent">
            <div> {{  }} ntar aja diisinya</div>
          </div>

        </div>
      </div>
    </div>
    <!-- MOBILE SKELETON LOADING -->
    <!-- TODO TAR BIKIN BUAT YANG EXP -->

    <div v-else>
      <AdminEducationSkeletonMobile />
    </div>
  

  </div>
</template>

<script setup>
// import { useexpcationStore } from 'expcationStore.js';
definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
  ssr: true
})
import dayjs from 'dayjs'

const edit = ref(false);
const remove = ref(false);
const isLoading = (false);
const success = ref(false);
const addExp = ref(false);

const ExpStore = useExperienceStore();
onBeforeMount(async () => {
  await ExpStore.get();
});

const deleteData = ref(null);
const updateData = ref(null);

const filter = ref("");
const dataTable = computed(() => {
  console.log(filter.value)
  const search = filter.value.toLowerCase()

  if (search != '') {
    return ExpStore.experience.filter(exp => {
      //pastikan huruf lower
      const company = exp.company.toLowerCase();
      return company.includes(search)
    });
  } else {
    return ExpStore.experience
  }
});

// watchEffect(() => {
//   console.log(deleteData.value)
// });

const handleDelete = async () => {
  try {
    const id = deleteData.value.id;
    //proses hapus
    await ExpStore.delete(id);
    //hide modal
    remove.value = false
    //success modal
    success.value = true
    //hide success modal
    setTimeout(() => {
      success.value = false
    }, 3000);

    //referesh data
    await ExpStore.get()

  } catch (error) {
    console.log(error)
  }
};

const saved = async () => {
  addExp.value = false
  success.value = true
  //hide success modal
  setTimeout(() => {
    success.value = false
  }, 3000);
  //fetch 2
  await ExpStore.get();

}





</script>

<style></style>