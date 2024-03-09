<template>
  <LazyAdminEducationForm :data="updateData" :show="showForm" @close="showForm = false"  @saved="saved" />
  <LazyAdminEducationRemoveConModal :show="remove" :data="deleteData" @close="remove = false" @yes="handleDelete">
    <div v-if="deleteData" class="pb-3 text-xl font-semibold">Are you sure to delete {{ deleteData.insituitionName }}?
    </div>
    <div>This operation cannot be undoed after executed</div>
  </LazyAdminEducationRemoveConModal>
  <div>
    <LazyAdminAlertSuccess class="mb-3" :show="success" />
    <div class="flex items-center justify-between pb-3 text-xl font-semibold">
      <div class="flex items-center gap-3">
        <lucideSchool :size="20" class="" />Education
      </div>
      <button @click="updateData = null; showForm = true"
        class="btn btn-md btn-primary max-lg:w-12 flex items-center justify-center">
        <lucidePlus :size="20" />
        <div class="max-lg:hidden">Add Education</div>

      </button>
    </div>
    <input v-model="filter" type="text" placeholder="Search" class="w-full max-w-xs input input-sm input-bordered mb-5" />
    <div class="overflow-x-auto max-lg:hidden">
      <table class="table table-zebra">
        <!-- head -->
        <thead>
          <tr>
            <th>institution</th>
            <th class="text-center">Periode</th>
            <th class="text-center">Major</th>
            <th class="text-center">Degree</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody v-if="dataTable">
          <!-- row 1 -->
          <tr v-for="edu in dataTable" :key="edu.id">
            <td>{{ edu.insituitionName }}</td>
            <td class="text-center">{{ edu.readableStartYear }} - {{ edu.readableEndYear }}</td>
            <td class="text-center">{{ edu.major ? edu.major : "-" }}</td>
            <td class="text-center">{{ edu.degree ? edu.degree : "-" }}</td>
            <td class="text-center">
              <button @click="deleteData = edu; remove = true" class="m-2 btn btn-outline btn-sm btn-circle">
                <LucideTrash2 :size="16" />
              </button>
              <button @click="updateData = edu; showForm = true" class="m-2 btn btn-outline btn-sm btn-circle">
                <lucidePen size="16" />
              </button>

            </td>
          </tr>
        </tbody>
        <!-- skeleton loading -->
        <tbody v-else>
         <AdminEducationSkeletonLoad  />
        </tbody>
      </table>
    </div>
    <!-- mobile -->
    <div v-if="dataTable" class="lg:hidden py-5">
      <div v-for="edu in dataTable" :key="edu.id" class="card-body bg-base-200 drop-shadow-lg">
        <div class="uppercase font-semibold">{{ edu.insituitionName }} </div>
        <div class="flex items-center justify-between">
          <div>{{ edu.readableStartYear }} - {{ edu.endYear ?
           edu.readableEndYear : "Present" }}</div>
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
        <div class="flex justify-between gap-3">
          <div class="flex items-center grow justify-between btn btn-accent">
            <div>Major</div>
            <div>{{ edu.major }}</div>
          </div>
          <div class="flex items-center grow justify-between btn btn-accent">
            <div>Degree</div>
            <div> {{ edu.degree }}</div>
          </div>

        </div>
      </div>
    </div>

    <!-- mobile skeleton -->
    
    <div v-else class="lg:hidden">
     <AdminEducationSkeletonMobile />
    </div>
  </div>

</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
})
const edit = ref(false);
const remove = ref(false);
const isLoading = (false);
const success = ref(false);
const showForm = ref(false);

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



const saved = async () => {
  try {
    // addEdu.value = false
    success.value = true
    //hide success modal
    setTimeout(() => {
      success.value = false
    }, 3000);
    //fetch 2
    await EduStore.get();
    
  } catch (error) {
    console.log(error)
  }

}





</script>

<style></style>