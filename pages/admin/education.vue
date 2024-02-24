<template>
  <AdminEducationForm :show="addEdu" @close="addEdu = false" @saved="saved" />
  <AdminEducationModalEdit :show="edit" @close="edit = false" @yes="handleUpdate" />
  <AdminEducationRemoveConModal :show="remove" :data="deleteData" @close="remove = false" @yes="handleDelete">
    <div v-if="deleteData" class="pb-3 text-xl font-semibold">Are you sure to delete {{ deleteData.insituitionName }}?
    </div>
    <div>This operation cannot be undoed after executed</div>
  </AdminEducationRemoveConModal>
  <div>
    <AdminAlertSuccess class="mb-3" :show="success" />
    <div class="flex items-center justify-between pb-3 text-xl font-semibold">
      <div class="flex items-center gap-3">
        <lucideSchool :size="20" class="" />Education
      </div>
      <button @click="addEdu = true" class="btn btn-md btn-primary ">
        <lucidePlus :size="20" />
        Add Education
      </button>
    </div>
    <input v-model="filter" type="text" placeholder="Search" class="w-full max-w-xs input input-sm input-bordered" />
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <!-- head -->
        <thead>
          <tr>
            <th>institution</th>
            <th class="text-center">Periode</th>
            <th class="text-center">Major</th>
            <th class="text-center">Degree</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="edu in dataTable" :key="edu.id">
            <td>{{ edu.insituitionName }}</td>
            <td class="text-center">{{ edu.startYear }} - {{ edu.endYear ? edu.endYear : "Present" }}</td>
            <td class="text-center">{{ edu.major ? edu.major : "-" }}</td>
            <td class="text-center">{{ edu.degree ? edu.degree : "-" }}</td>
            <button @click="deleteData = edu; remove = true" class="m-2 btn btn-outline btn-sm btn-circle">
              <LucideTrash2 :size="16" />
            </button>
            <button @click="updateData = edu; edit = true" class="m-2 btn btn-outline btn-sm btn-circle">
              <lucidePen size="16" />
            </button>
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
const addEdu = ref(false);


const EduStore = useEducationStore();
onBeforeMount(async () => {
  await EduStore.get();
});

const deleteData = ref(null);
const updateData = ref(null);

const filter = ref("");
const dataTable = computed(() => {
  console.log(filter.value)
  const search = filter.value.toLowerCase()

  if (search != '') {
    return EduStore.education.filter(edu => {
      //pastikan huruf lower
      const insituitionName = edu.insituitionName.toLowerCase();
      return insituitionName.includes(search)
    });
  } else {
    return EduStore.education
  }
});

watchEffect(() => {
  console.log(updateData.value)
});

const handleDelete = async () => {
  try {
    const id = deleteData.value.id;
    //proses hapus
    await EduStore.delete(id);
    //hide modal
    remove.value = false
    //success modal
    success.value = true
    //hide success modal
    setTimeout(() => {
      success.value = false
    }, 3000);

    //referesh data
    await EduStore.get()

  } catch (error) {
    console.log(error)
  }
};

const handleUpdate = async () => {
  try {
    console.log('masuk method update')
    
  } catch (error) {
    
  }
}

const saved = async () => {
  addEdu.value = false
  success.value = true
  //hide success modal
  setTimeout(() => {
    success.value = false
  }, 3000);
  //fetch 2
  await EduStore.get();

}





</script>

<style></style>