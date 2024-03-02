<template>
  <AdminAlertSuccess class="mb-3" :show="success" />
  <AdminSkillRemoveModalCon :show="remove" :data="deleteData" @close="remove = false" @yes="handleDelete">
    <div v-if="deleteData" class="pb-3 text-xl font-semibold">Are you sure to delete {{ deleteData.title }}?
    </div>
    <div>This operation cannot be undoed after executed</div>
  </AdminSkillRemoveModalCon>
  <AdminSkillForm :show="showForm" :data="updateData" @close="showForm = false" @saved="saved" />


  <div>
    <div class="flex items-center justify-between pb-3 text-xl font-semibold">
      <div class="flex items-center gap-3">
        <lucideBoxes :size="20" class="" />Skills
      </div>
      <button @click="showForm = true" class="btn btn-md btn-primary max-lg:w-12 flex items-center justify-center">
        <lucidePlus :size="20" />
        <div class="max-lg:hidden">Add Skill</div>

      </button>
    </div>
    <div class="flex gap-3 items-center">
      <input v-model="filter" type="text" placeholder="Search" class="w-full max-w-xs input input-sm input-bordered" />

      <select v-model="selectedCategory" @change="filter = ''" class="select select-sm select-bordered w-full max-w-xs">
        <option value="all">All Category</option>
        <option v-for="cat in SkillStore.categories" :key="cat.id" :value="cat.id">{{ cat.title }}</option>
      </select>
    </div>

    <div class="overflow-x-auto max-lg:hidden">
      <table class="table table-zebra">
        <!-- head -->
        <thead>
          <tr>
            <th>svg</th>
            <th>Title</th>
            <th>Category</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="skill in dataTable" :key="skill.id">
            <td class="w-24">
              <div v-html="skill.svg"></div>
            </td>
            <td>{{ skill.title }}</td>
            <td>{{ skill.category.title }}</td>
            <td>{{ skill._count.projects }}</td>
            <td>
              <button @click="deleteData = skill; remove = true" class="m-2 btn btn-outline btn-sm btn-circle">
                <LucideTrash2 :size="16" />
              </button>
              <button @click="updateData = skill; showForm = true" class="m-2 btn btn-outline btn-sm btn-circle">
                <lucidePen size="16" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="lg:hidden py-5">
      <div v-for="skill in dataTable" :key="skill.id" class="card-body bg-base-200 drop-shadow-lg">
        <div class="uppercase font-semibold">{{ skill.title }} </div>
        <div class="flex items-center justify-between">
          <div class="flex justify-between gap-2">

            <div class="dropdown dropdown-bottom dropdown-end">
              <div tabindex="0" role="button" class="btn bg-base-300 m-1">
                <LucideMoreVertical :size="16" />
              </div>

              <div class="">
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a @click="updateData = skill; edit = true" class="rounded-lg p-1.5">
                      <LucidePen :size="16" />
                      Edit
                    </a>
                  </li>
                  <li>
                    <a @click="deleteData = skill; remove = true" class="bg-error rounded-lg p-1.5">
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
            <div>{{ }}</div>
          </div>
          <div class="flex items-center justify-between btn btn-accent">
            <div>Degree</div>
            <div> {{ }}</div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
// import { useskillcationStore } from 'skillcationStore.js';
definePageMeta({
  layout: 'admin',
  middleware: ['auth'],
})
// import dayjs from 'dayjs'

const SkillStore = useSkillStore();
onBeforeMount(async () => {
  try {
    await getData();

  } catch (error) {
    console.log(error)
  }
});


const getData = (async () => {
  Promise.all([
    SkillStore.get(),
    SkillStore.getCategories(),
  ])
})

const remove = ref(false);
const showForm = ref(false);
const success = ref(false);
const deleteData = ref(null)
const updateData = ref(null)

const filter = ref("");
//selected category
const selectedCategory = ref('all');

const dataTable = computed(() => {
  try {
    // console.log(filter.value)
    const search = filter.value.toLowerCase()
    const selectedCatId = selectedCategory.value

    if (search != '') {
      return SkillStore.skills.filter(skill => {
        //pastikan huruf lower
        const skillTtitle = skill.title.toLowerCase();

        if (selectedCatId == 'all') {
          return skillTtitle.includes(search)
        } else {
          return skillTtitle.includes(search) && skill.skillCategoryId == selectedCatId
        }

      });
    } else {
      //return berdasarkan all
      if (selectedCatId == 'all') {
        return SkillStore.skills;
      }
      else {
        //rerun berdasarkan od
        return SkillStore.skills.filter(skill => {
          return skill.skillCategoryId == selectedCatId
        })
      }
    };

  } catch (error) {
    console.log(error)
  }
});

const handleDelete = async () => {
  try {
    const id = deleteData.value.id;
    console.log(deleteData)
    //proses hapus
    await SkillStore.delete(id);
    //hide modal
    remove.value = false
    //success modal
    success.value = true
    //hide success modal
    setTimeout(() => {
      success.value = false
    }, 3000);

    //referesh data
    await SkillStore.get()

  } catch (error) {
    console.log(error)
  }
};

const saved = async () => {
  showForm.value = false
  success.value = true
  //hide success modal
  setTimeout(() => {
    success.value = false
  }, 3000);
  //fetch 2
  await SkillStore.get();

}


</script>
