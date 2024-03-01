<template>
  <AdminEducationForm  />
  <!-- :show="addEdu" @close="addEdu = false" @saved="saved" -->
  <AdminEducationModalEdit  />
  <!-- :show="edit" :data="updateData" @close="edit = false" -->
  <AdminEducationRemoveConModal > 
    <!-- :show="-" :data="-" @close="-" @yes="-" -->
  <div v-if="deleteData" class="pb-3 text-xl font-semibold">Are you sure to delete {{ deleteData.title }}?
    </div>
    <div>This operation cannot be undoed after executed</div>
  </AdminEducationRemoveConModal>
  <div>
    <AdminAlertSuccess class="mb-3" :show="success" />
    <div class="flex items-center justify-between pb-3 text-xl font-semibold">
      <div class="flex items-center gap-3">
        <lucideBoxes :size="20" class="" />Skills
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
            <th>svg</th>
            <th>Title</th>
            <th>Category</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="skill in SkillStore.skills" :key="skill.id">
            <td class="w-24" v-html="skill.svg">
            </td>
            <td>{{ skill.title }}</td>
            <td>{{ skill.category.title }}</td>
            <td>{{ skill._count.projects }}</td>
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
      <div v-for="skill in SkillStore.skill" :key="skill.id" class="card-body bg-base-200 drop-shadow-lg">
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
            <div> {{  }}</div>
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
import dayjs from 'dayjs'

const SkillStore = useSkillStore();
onBeforeMount(async () => {
  try {
    await SkillStore.get();
    
  } catch (error) {
    console.log(error)
  }
});


const deleteData = ref();
const updateData = ref();
const edit = ref(false);
const remove = ref(false);


const filter = ref("");
const dataTable = computed(() => {
  try {
    console.log(filter.value)
    const search = filter.value.toLowerCase()
  
    if (search != '') {
      return SkillStore.skills.filter(skill => {
        //pastikan huruf lower
        const insituitionName = skill.insituitionName.toLowerCase();
        return insituitionName.includes(search)
      });
    } else {
      return SkillStore.skills
    }
    
  } catch (error) {
    console.log(error)
  }
});


</script>
