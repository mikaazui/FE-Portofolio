<template>
  <AdminEducationModalEdit :show="edit" @close="edit = false" />
  <AdminEducationRemoveConModal :show="remove" :data="deleteData" @close="remove = false" @yes="handleDelete">
    <div v-if="deleteData" class="pb-3 text-xl font-semibold">Are you sure to delete {{ deleteData.insituitionName }}?</div>
    <div>This operation cannot be undoed after executed</div>
  </AdminEducationRemoveConModal>
  <div>
    <AdminAlertSuccess :show="success" />
    <div class="pb-3 text-xl font-semibold">Education</div>
    <input v-model="filter" type="text" placeholder="Search" class="w-full max-w-xs input input-sm input-bordered" />
    <div class="overflow-x-auto">
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
        <tbody>
          <!-- row 1 -->
          <tr v-for="exp in dataTable" :key="exp.id">
            <td class="whitespace-nowrap">{{ exp.company }}</td>
            <td class="whitespace-nowrap">{{ exp.readableStartDate }} - {{ exp.readableEndDate ? exp.readableEndDate : "Present" }}</td>
            <td>{{ exp.title ? exp.title : "-" }}</td>
            <td>{{ exp.location ? exp.location : "-" }}</td>
            <!-- <td class="">{{ exp.description ? exp.description : "-" }}</td> -->
            <div class="flex items-center justify-normal">
              <button @click="deleteData = exp; remove = true" class="m-2 btn btn-outline btn-sm btn-circle">
                <LucideTrash2 :size="16" />
              </button>
              <button @click="edit = true" class="m-2 btn btn-outline btn-sm btn-circle">
                <lucidePen size="16" />
              </button>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
// import { useEducationStore } from 'educationStore.js';
definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
  ssr: true
})

const edit = ref(false);
const remove = ref(false);
const isLoading = (false);
const success = ref(false);

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

watchEffect(() => {
  console.log(deleteData.value)
});

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





</script>

<style></style>