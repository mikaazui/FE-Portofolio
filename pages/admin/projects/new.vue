<template>
  <div>
      <div class="font-semibold text-xl mb-4 pb-2 border-b border-b-neutral/10 flex items-center justify-between">
          <div class="flex items-center gap-2">
              <LucideBriefcase :size="30" />New Project
          </div>
      </div>

      <label class="form-control w-full">
          <div class="label label-text pb-0">Title</div>
          <input v-model="formData.title" type="text" placeholder="Project Title"
              class="input input-bordered w-full font-bold" />
          <div class="text-error text-right text-sm pr-2" v-if="errors.title">{{ errors.title }}
          </div>
      </label>


      <!-- // ON_PROGRESS
// MAINTENANCE
// COMPLETE -->

      <!-- STATUS -->
      <div class="label label-text pb-0">Status Project</div>
      <div class="flex gap-4">
          <div class="form-control">
              <label class="label cursor-pointer flex justify-start gap-2">
                  <input v-model="formData.status" type="radio" name="status" value="ON_PROGRESS"
                      class="radio checked:bg-red-500" />
                  <span class="label-text">ON PROGRESS</span>
              </label>
          </div>
          <div class="form-control">
              <label class="label cursor-pointer flex justify-start gap-2">
                  <input v-model="formData.status" type="radio" name="status" value="MAINTENANCE"
                      class="radio checked:bg-red-500" />
                  <span class="label-text">MAINTENANCE</span>
              </label>
          </div>
          <div class="form-control">
              <label class="label cursor-pointer flex justify-start gap-2">
                  <input v-model="formData.status" type="radio" name="status" value="COMPLETE"
                      class="radio checked:bg-red-500" />
                  <span class="label-text">COMPLETE</span>
              </label>
          </div>
      </div>

      <!-- PERIODE -->
      <div class="flex gap-3">
          <div class="form-control w-min text-nowrap">
              <div class="label label-text pb-0">Start Date</div>
              <DatePicker v-model="formData.startDate" color="gray">
                  <template #default="{ togglePopover }">
                      <button @click="togglePopover" class="btn btn-outline border-neutral/25 font-normal min-w-32">
                          {{ dayjs(formData.startDate).format('D MMMM YYYY') }}
                      </button>
                  </template>
              </DatePicker>
          </div>
          <div class="form-control w-min text-nowrap">
              <div class="label label-text pb-0">End Date</div>
              <div class="flex items-center gap-3">
                  <DatePicker v-model="formData.endDate" color="gray">

                      <template #default="{ togglePopover }">
                          <button @click="togglePopover"
                              class="btn btn-outline border-neutral/25 font-normal min-w-32" :disabled="isPresent">
                              {{ isPresent ? '-' : dayjs(formData.endDate).format('D MMMM YYYY') }}
                          </button>
                      </template>
                  </DatePicker>
                  <input type="checkbox" v-model="isPresent" class="checkbox" @change="handlePresent" />PRESENT
              </div>
          </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-2">
          <label class="form-control w-full">
              <div class="label label-text pb-0">Company</div>
              <input v-model="formData.company" type="text" placeholder="Company"
                  class="input input-bordered w-full" />
              <div class="text-error text-right text-sm pr-2" v-if="errors.company">{{ errors.company }}
              </div>
          </label>
          <label class="form-control w-full">
              <div class="label label-text pb-0">Url</div>
              <input v-model="formData.url" type="text" placeholder="Url" class="input input-bordered w-full" />
              <div class="text-error text-right text-sm pr-2" v-if="errors.url">{{ errors.url }}
              </div>
          </label>
          <label class="form-control w-full">
              <div class="label label-text pb-0">Github</div>
              <input v-model="formData.github" type="text" placeholder="Github" class="input input-bordered w-full" />
              <div class="text-error text-right text-sm pr-2" v-if="errors.github">{{ errors.github }}
              </div>
          </label>
          <label class="form-control w-full">
              <div class="label label-text pb-0">Gitlab</div>
              <input v-model="formData.gitlab" type="text" placeholder="Gitlab" class="input input-bordered w-full" />
              <div class="text-error text-right text-sm pr-2" v-if="errors.gitlab">{{ errors.gitlab }}
              </div>
          </label>
      </div>

      <!-- SKILL -->
      <div class="flex gap-2 items-center my-2">
          <div class="label label-text">Skills</div>
          <button class="btn btn-xs btn-neutral" @click="showSkillSelector = true">
              <LucidePlus :size="10" /> Add Skill
          </button>
      </div>
      <div class="card min-h-20 w-full bg-neutral/5 p-4">
          <div class="flex flex-wrap gap-2">
              <button v-for="skill in selectedSkills" :key="skill.id" class="btn btn-neutral btn-sm w-max">
                  <div v-html="skill.svg" class="w-6 h-6"></div>
                  {{ skill.title }}
              </button>
          </div>
      </div>


      <label class="form-control w-full">
          <div class="label label-text pb-0">Description</div>
          <textarea v-model="formData.description" rows="10" class="textarea textarea-bordered"
              placeholder="Description"></textarea>
          <div class="text-error text-right text-sm pr-2" v-if="errors.description">{{ errors.description }}
          </div>
      </label>

      <!-- photos-->

      <div class="flex justify-end gap-2 my-4">
          <NuxtLink to="/admin/projects" class="btn">Cancel</NuxtLink>
          <button @click="showCreateConfirmation = true" class="btn btn-neutral">
              Save
          </button>
      </div>
      <div class="text-error text-sm text-right">{{ fetchError }}</div>

  </div>

  <!-- skill selector -->
  <AdminSkillSelector :show="showSkillSelector" :selected="selectedSkills" @close="showSkillSelector = false"
      @addSkill="addSkill" />

  <!-- modal confirmation -->
  
      <AdminModalConfirm :show="showCreateConfirmation" @close="showCreateConfirmation = false" @yes="handleSave" text_confirm="Save" >
      <div class="text-xl font-semibold">Are you sure to save this new  Project</div>
    </AdminModalConfirm>
</template>

<script setup>
import dayjs from 'dayjs';
import { DatePicker } from 'v-calendar';

definePageMeta({
  layout: 'admin',
  middleware: ['auth']
});

const ProjectStore = useProjectStore();
const SkillStore = useSkillStore();
onBeforeMount(async () => {
  await SkillStore.getSkillsByCategory();
});

const formData = ref({
  title: '',
  description: '',
  startDate: new Date(),
  endDate: null,
  status: 'ON_PROGRESS',
  url: '',
  github: '',
  // gitab: '',
  company: '',
});
const errors = ref({});

// handle present
const isPresent = ref(true);
const handlePresent = (e) => {
  const checked = e.target.checked;
  formData.value.endDate = checked ? null : new Date()
}

// photos
// skills
const showSkillSelector = ref(false);
const selectedSkills = ref([]);
const addSkill = (skill) => {
  const index = selectedSkills.value.findIndex(s => s.id == skill.id);

  if (index == -1) {
      // tambahkan
      selectedSkills.value.push(skill);
  } else {
      // hapuskan
      selectedSkills.value.splice(index, 1);
  }
}


// handle save
const fetchError = ref({})
const showCreateConfirmation = ref(false)
const isLoading = ref(false)

const handleSave = () => {
  // reset
  fetchError.value = {};

  try {
      isLoading.value = false
      const dataSave = { ...formData.value };

      // end date jika null, jadikan ''
      if (!dataSave.endDate) dataSave.endDate = '';

      // skill -> array of id
      const skill_ids = selectedSkills.value.map(s => s.id);

      ProjectStore.create(dataSave, skill_ids);

      console.log(dataSave);
      console.log(selectedSkills.value);

  } catch (error) {
    console.log(error)
    if (error instanceof Joi.ValidationError) {
            errorMessage.value = joiError(error)
        } else {
            // fetchError.value = error.data.message
            console.log(error)
            fetchError.value = error.data.message

        }
        isLoading.value = false;

  }

}
</script>
