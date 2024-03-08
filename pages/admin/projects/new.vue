<template>
  <div>
    <AdminAlertSuccess class="mb-3" :show="success" />
    <AdminModalConfirm :show="confirm" @close="confirm = false" :data="formData" @yes="handleSave" text_confirm="Save" >
      <div class="text-xl font-semibold">Are you sure to save this new blog?</div>
    </AdminModalConfirm>
    <div class="flex items-center justify-between pb-3 text-xl font-semibold">
      <div class="flex items-center gap-3">
        <lucideFile :size="20" class="" />Create Project
      </div>
    </div>

    <div>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Title</span>
        </div>
        <input
          v-model="formData.title"
          type="text"
          placeholder="Title"
          class="input input-bordered w-full max-w-xs"
        />
        <div class="text-xs text-right text-error" v-if="errors.title">
          {{ errors.title }}
        </div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Content</span>
        </div>
        <textarea
          v-model="formData.content"
          placeholder="content"
          rows="7"
          class="textarea textarea-bordered w-full max-w-xs"
        />
        <div class="text-xs text-right text-error" v-if="errors.content">
          {{ errors.content }}
        </div>
      </label>

      <!-- TODO INI BENERIN NTAR -->
      <!-- TODO BENERIN DELETE ACTION BUTTONNYA -->
      <div>
        <div class="my-2">Photos</div>
        <div class="overflow-auto flex flex-nowrap gap-3 h-40 ">
          <div
          v-if="!photo_previews.length"
            class="aspect-video h-40 bg-base-200 rounded-lg"
          ></div>
          <div v-for="(photo, index) in photo_previews" class="flex h-40 flex-nowrap gap-2 relative rounded-xl">
            
            <img
            :src="photo"
            class="rounded-lg bg-base-300 max-h-full min-w-60 max-w-full flex justify-center items-center aspect-video"
            >
            <div
            class="dropdown dropdown-bottom dropdown-end absolute right-0 top-0"
          >
          <div
            tabindex="0"
            role="button"
            class="btn btn-sm dark:bg-white/40 btn-ghost btn-circle m-1"
          >
            <LucideMoreVertical :size="16" class="text-accent"/>
          </div>
      
          <div class="">
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  @click="photo_previews.splice(index, 1); file_photos.splice(index, 1)"
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
          </img>

        <!-- avatar edit -->
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

        <div class="flex gap-2 my-3">
          <NuxtLink to="/admin/blogs" class="btn text-white btn-error"
            >Cancel</NuxtLink
          >
          <button @click="confirm = true" class="btn text-white btn-success">
            Save
          </button>
          <span class="text-error" v-if="fetchError">{{ fetchError }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Joi from 'joi';
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});

const ProjectStore = useProjectStore();

const formData = ref({
  title: "",
  content: "",
  photos: [],
});

const errors = ref({
  title: "",
  content: "",
  photos: "",
});

const success = ref(false)
const confirm = ref(false);
const isLoading = ref(false);
const fetchError = ref('');

const photo_previews = ref([]);
const file_photos = [];

const handleFile = async (e) => {
  if (e.target.files.length) {
    for (const file of e.target.files) {
      const reader = new FileReader();
      console.log(file)
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

// const removePhotoPreview = (index) => {
//   photo_previews.value.splice(index, 1);
// };

const handleSave = async() => {
  errors.value =  {};
  fetchError.value = '';
  
  try {
    isLoading.value = true
    await ProjectStore.create(formData.value, file_photos);
    setTimeout(() => {
      success.value = false
    }, 3000);
    
    confirm.value = false
    success.value = true
    isLoading.value = false
    //reset form
    formData.value = {
      title: "",
      content: "",
      photos: [],
    }
    setTimeout(() => {
      navigateTo('/admin/projects')
    }, 3000);

  } catch (error) {
    console.log(error)
    isLoading.value = false
    if (error instanceof Joi.ValidationError) {
      //joi error
      errors.value = joiError(error)
    } else {
      if (error.data) {
        //fetch error
        console.log(error)
        console.log(error.status)
        console.log(error.message)
        fetchError.value = error.data.message
      }
      else{
        errors.value = error.message
        console.log('error codingan')
        console.log(error)
      }
    }
  }
};

watchEffect(() => {
  console.log(photo_previews.value);
});
</script>

<style></style>
