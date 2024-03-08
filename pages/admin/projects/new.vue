<template>
  <div>
    <div
      class="font-semibold text-xl mb-4 pb-2 border-b border-b-neutral/10 flex items-center justify-between"
    >
      <div class="flex items-center gap-2">
        <LucideBriefcase :size="30" />New Project
      </div>
    </div>

    <label class="form-control w-full">
      <div class="label label-text pb-0">Title</div>
      <input
        v-model="formData.title"
        type="text"
        placeholder="Project Title"
        class="input input-bordered w-full font-bold"
      />
      <div class="text-error text-right text-sm pr-2" v-if="errors.title">
        {{ errors.title }}
      </div>
    </label>

    <!-- photos -->
    <div>
      <div class="my-2">Photos</div>
      <div class="overflow-auto flex flex-nowrap gap-3 h-40">
        <div
          v-if="!photo_previews.length"
          class="aspect-video h-40 bg-base-200 rounded-lg"
        ></div>
        <div
          v-for="(photo, index) in photo_previews"
          class="flex h-40 flex-nowrap gap-2 relative rounded-xl"
        >
          <img
            :src="photo"
            class="rounded-lg bg-base-300 max-h-full min-w-60 max-w-full flex justify-center items-center aspect-video"
          />
          <div
            class="dropdown dropdown-bottom dropdown-end absolute right-0 top-0"
          >
            <div
              tabindex="0"
              role="button"
              class="btn btn-sm dark:bg-white/40 btn-ghost btn-circle m-1"
            >
              <LucideMoreVertical :size="16" class="text-accent" />
            </div>

            <div class="">
              <ul
                tabindex="0"
                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button
                    @click="
                      photo_previews.splice(index, 1);
                      file_photos.splice(index, 1);
                    "
                    class="bg-error rounded-lg p-1.5"
                  >
                    <LucideTrash2 :size="16" />
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Upload Photos</span>
      </div>
      <div>
        <input
          type="file"
          @change="handleFile"
          multiple
          :disabled="photo_previews.length >= 10"
          accept="image/*"
          class="file-input file-input-md file-input-bordered w-full max-w-xs"
        />
      </div>
    </label>

    <!-- STATUS -->
    <div class="label label-text pb-0">Status Project</div>
    <div class="flex gap-4">
      <div class="form-control">
        <label class="label cursor-pointer flex justify-start gap-2">
          <input
            v-model="formData.status"
            type="radio"
            name="status"
            value="ON_PROGRESS"
            class="radio checked:bg-red-500"
          />
          <span class="label-text">ON PROGRESS</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer flex justify-start gap-2">
          <input
            v-model="formData.status"
            type="radio"
            name="status"
            value="MAINTENANCE"
            class="radio checked:bg-red-500"
          />
          <span class="label-text">MAINTENANCE</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label cursor-pointer flex justify-start gap-2">
          <input
            v-model="formData.status"
            type="radio"
            name="status"
            value="COMPLETE"
            class="radio checked:bg-red-500"
          />
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
            <button
              @click="togglePopover"
              class="btn btn-outline border-neutral/25 font-normal min-w-32"
            >
              {{ dayjs(formData.startDate).format("D MMMM YYYY") }}
            </button>
          </template>
        </DatePicker>
      </div>
      <div class="form-control w-min text-nowrap">
        <div class="label label-text pb-0">End Date</div>
        <div class="flex items-center gap-3">
          <DatePicker v-model="formData.endDate" color="gray">
            <template #default="{ togglePopover }">
              <button
                @click="togglePopover"
                class="btn btn-outline border-neutral/25 font-normal min-w-32"
                :disabled="isPresent"
              >
                {{
                  isPresent
                    ? "-"
                    : dayjs(formData.endDate).format("D MMMM YYYY")
                }}
              </button>
            </template>
          </DatePicker>
          <input
            type="checkbox"
            v-model="isPresent"
            class="checkbox"
            @change="handlePresent"
          />PRESENT
        </div>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 gap-2">
      <label class="form-control w-full">
        <div class="label label-text pb-0">Company</div>
        <input
          v-model="formData.company"
          type="text"
          placeholder="Company"
          class="input input-bordered w-full"
        />
        <div class="text-error text-right text-sm pr-2" v-if="errors.company">
          {{ errors.company }}
        </div>
      </label>
      <label class="form-control w-full">
        <div class="label label-text pb-0">Url</div>
        <input
          v-model="formData.url"
          type="text"
          placeholder="Url"
          class="input input-bordered w-full"
        />
        <div class="text-error text-right text-sm pr-2" v-if="errors.url">
          {{ errors.url }}
        </div>
      </label>
      <label class="form-control w-full">
        <div class="label label-text pb-0">Github</div>
        <input
          v-model="formData.github"
          type="text"
          placeholder="Github"
          class="input input-bordered w-full"
        />
        <div class="text-error text-right text-sm pr-2" v-if="errors.github">
          {{ errors.github }}
        </div>
      </label>
      <label class="form-control w-full">
        <div class="label label-text pb-0">Gitlab</div>
        <input
          v-model="formData.gitlab"
          type="text"
          placeholder="Gitlab"
          class="input input-bordered w-full"
        />
        <div class="text-error text-right text-sm pr-2" v-if="errors.gitlab">
          {{ errors.gitlab }}
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
        <button
          v-for="skill in selectedSkills"
          :key="skill.id"
          class="btn btn-neutral btn-sm w-max"
        >
          <div v-html="skill.svg" class="w-6 h-6"></div>
          {{ skill.title }}
        </button>
      </div>
    </div>

    <label class="form-control w-full">
      <div class="label label-text pb-0">Description</div>
      <textarea
        v-model="formData.description"
        rows="10"
        class="textarea textarea-bordered"
        placeholder="Description"
      ></textarea>
      <div class="text-error text-right text-sm pr-2" v-if="errors.description">
        {{ errors.description }}
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
  <AdminSkillSelector
    :show="showSkillSelector"
    :selected="selectedSkills"
    @close="showSkillSelector = false"
    @addSkill="addSkill"
  />

  <!-- modal confirmation -->

  <AdminModalConfirm
    :show="showCreateConfirmation"
    @close="showCreateConfirmation = false"
    @yes="handleSave"
    text_confirm="Save"
  >
    <div class="text-xl font-semibold">
      Are you sure to save this new Project
    </div>
  </AdminModalConfirm>
</template>

<script setup>
import Joi from 'joi';
import dayjs from "dayjs";
import { DatePicker } from "v-calendar";

definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});

const ProjectStore = useProjectStore();
const SkillStore = useSkillStore();
onBeforeMount(async () => {
  await SkillStore.getSkillsByCategory();
});

const formData = ref({
  title: "",
  description: "",
  startDate: new Date(),
  endDate: null,
  status: "ON_PROGRESS",
  url: "",
  github: "",
  // gitab: '',
  company: "",
});
const errors = ref({});

// handle present
const isPresent = ref(true);
const handlePresent = (e) => {
  const checked = e.target.checked;
  formData.value.endDate = checked ? null : new Date();
};

// photos
// skills
const showSkillSelector = ref(false);
const selectedSkills = ref([]);
const addSkill = (skill) => {
  const index = selectedSkills.value.findIndex((s) => s.id == skill.id);

  if (index == -1) {
    // tambahkan
    selectedSkills.value.push(skill);
  } else {
    // hapuskan
    selectedSkills.value.splice(index, 1);
  }
};

// handle save
const fetchError = ref("");
const showCreateConfirmation = ref(false);
const isLoading = ref(false);
const photo_previews = ref([]);
const file_photos = [];

const handleFile = async (e) => {
  if (e.target.files.length) {
    for (const file of e.target.files) {
      const reader = new FileReader();
      console.log(file);
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (photo_previews.value.length < 10) {
          //tampung file
          file_photos.push(file);

          //TAMPUNG PREVIEW
          photo_previews.value.push(reader.result);
        }
      };
    }
  }
  //reset input file selector
  e.target.value = "";
};

const handleSave = async () => {
  // reset
  fetchError.value = "";

  try {
    isLoading.value = false;
    const dataSave = { ...formData.value };

    // end date jika null, jadikan ''
    if (!dataSave.endDate) dataSave.endDate = "";

    // skill -> array of id
    const skill_ids = selectedSkills.value.map((s) => s.id);

    await ProjectStore.create(dataSave, skill_ids, file_photos);
    isLoading.value = true;
    showCreateConfirmation.value = false;

    console.log(dataSave);
    console.log(selectedSkills.value);

    navigateTo("/admin/projects");
  } catch (error) {
    showCreateConfirmation.value = false;
    isLoading.value = false;
    console.log(error);
    if (error instanceof Joi.ValidationError) {
      errorMessage.value = joiError(error);
    } else {
      // fetchError.value = error.data.message
      console.log(error);
      fetchError.value = error.data.message;
    }
    isLoading.value = false;
  }
};
</script>
