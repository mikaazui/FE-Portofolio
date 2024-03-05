<template>
  <div>
    <AdminAlertSuccess class="mb-3" :show="success" />
    <AdminModalConfirm :show="confirm" @close="confirm = false" :data="formData" @yes="handleSave" >
      <div class="text-xl font-semibold">Are you sure to save this new blog?</div>
    </AdminModalConfirm>
    <div class="flex items-center justify-between pb-3 text-xl font-semibold">
      <div class="flex items-center gap-3">
        <lucideFile :size="20" class="" />Create Blog
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
        <div class="overflow-auto flex flex-nowrap gap-3 h-40">
          <div v-for="(photo, index) in photo_previews" class="flex relative h-40 flex-nowrap gap-3 rounded-xl">
            <div
              v-if="!photo_previews.length"
              class="aspect-video h-40 w-full rounded-lg bg-gray-400"
            ></div>

            <img
              :src="photo"
              class="rounded-lg bg-base-300 max-h-full min-w-60 max-w-60 flex justify-center items-center aspect-video"
            >
          
            <div
            class="dropdown dropdown-bottom dropdown-end absolute right-0 top-0"
          >
            <div
              tabindex="0"
              role="button"
              class="btn btn-sm dark:bg-white/40 btn-ghost btn-circle m-1"
            >
              <LucideMoreVertical :size="16" />
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import joi from 'joi';
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});

const formData = reactive({
  title: "",
  content: "",
});

const errors = ref({
  title: "",
  content: "",
});

const success = ref(false)
const confirm = ref(false);
const isLoading = ref(false);
const fetchError = ref('');
const errors = ref({});

const photo_previews = ref([]);
const file_photos = [];

const handleFile = async (e) => {
  if (e.target.files.length) {
    for (const file of e.target.files) {
      const reader = new FileReader();
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

const handleSave = () => {
  errors.value =  {};
  fetchError.value = '';
  
  try {
    isLoading.value = true
    console.log(formData.value);
    console.log(file_photos);
    success.value = true
    
    isLoading.value = false
  } catch (error) {
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
        fetchError.value = error.message
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
