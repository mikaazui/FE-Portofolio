<template>
  <AdminEducationForm :show="addEdu" @close="addEdu = false" @saved="saved" />
  <AdminEducationModalEdit :show="edit" :data="updateData" @close="edit = false" />
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
      <button @click="addEdu = true" class="btn btn-md btn-primary max-lg:w-12 flex items-center justify-center">
        <lucidePlus :size="20" />
        <div class="max-lg:hidden">Add Education</div>

      </button>
    </div>
    <input v-model="filter" type="text" placeholder="Search" class="w-full max-w-xs input input-sm input-bordered" />
    <div class="overflow-x-auto max-lg:hidden">
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
            <td class="text-center">{{ dayjs(edu.startYear).format('D MMMM YYYY') }} - {{ dayjs(edu.endYear).format('D MMMM YYYY') ? dayjs(edu.endYear).format('D MMMM YYYY') : "Present" }}</td>
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

    <div class="lg:hidden py-5">
      <div v-for="edu in dataTable" :key="edu.id" class="card-body bg-base-200 drop-shadow-lg">
        <div class="uppercase font-semibold">{{ edu.insituitionName }} </div>
        <div class="flex items-center justify-between">
        <div>{{ dayjs(edu.startYear).format('D MMMM YYYY') }} - {{ dayjs(edu.endYear).format('D MMMM YYYY') ?
            dayjs(edu.endYear).format('D MMMM YYYY') : "Present" }}</div>
          <div class="flex justify-between gap-2">

            <div class="dropdown dropdown-bottom dropdown-end">
              <div tabindex="0" role="button" class="btn bg-base-300 m-1">
                <LucideMoreVertical :size="16" />
              </div>

              <div class="">
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a @click="updateData = edu; edit = true" class="rounded-lg p-1.5">
                      <LucidePen :size="16" />
                      Edit
                    </a>
                  </li>
                  <li>
                    <a @click="deleteData = edu; remove = true" class="bg-error rounded-lg p-1.5">
                      <LucideTrash2 :size="16" />
                      Delete
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>

        </div>

        <div class="flex justify-between">
          <div class="flex items-center justify-between btn btn-accent">
            <div>Major</div>
            <div>{{ edu.major }}</div>
          </div>
          <div class="flex items-center justify-between btn btn-accent">
            <div>Degree</div>
            <div> {{ edu.degree }}</div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
// import { useEducationStore } from 'educationStore.js';
definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
})
import dayjs from 'dayjs'

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

const handleSave = async () => {
  try {
    isLoading = true;

    if (!formData.value.endYear) formData.value.endYear = null;

    if (!props.data) {
      //jika gaada >> create
      await EduStore.create(formData.value)
    } else {
      //jika ada >> update
      await EduStore.update(props.data._id, formData.value)
    }

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