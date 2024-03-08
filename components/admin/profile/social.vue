<template>
  <AdminAlertSuccess :show="success" />
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Instagram</span>
    </div>
    <input v-model="formData.instagram" type="text" placeholder="Instagram"
      class="input input-bordered w-full max-w-xs" />
    <div class="text-xs text-right text-error" v-if="errors.instagram">{{ errors.instagram }}</div>
  </label>

  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Github</span>
    </div>
    <input v-model="formData.github" type="text" placeholder="Github" class="input input-bordered w-full max-w-xs" />
    <div class="text-xs text-right text-error" v-if="errors.github">{{ errors.github }}</div>
  </label>

  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Linkedin</span>
    </div>
    <input v-model="formData.linkedin" type="text" placeholder="Linkedin" class="input input-bordered w-full max-w-xs" />
    <div class="text-xs text-right text-error" v-if="errors.linkedin">{{ errors.linkedin }}</div>
  </label>

  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Discord</span>
    </div>
    <input v-model="formData.discord" type="text" placeholder="Discord" class="input input-bordered w-full max-w-xs" />
    <div class="text-xs text-right text-error" v-if="errors.discord">{{ errors.discord }}</div>
  </label>

  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Twitter</span>
    </div>
    <input v-model="formData.twitter" type="text" placeholder="Twitter" class="input input-bordered w-full max-w-xs" />
    <div class="text-xs text-right text-error" v-if="errors.twitter">{{ errors.twitter }}</div>
  </label>
  <!-- submit -->
  <label class="btn grow mt-3 w-[320px] flex items-center justify-center" @click="confirm = true">
    <span>Submit</span>
    <span class="loading loading-spinner loading-sm px-3" v-show="isLoading"></span>
  </label>
  <div class="text-xs text-error" v-if="fetchError">{{ fetchError }}</div>
  <!-- modal -->
  <AdminModalConfirm :show="confirm" @close="confirm = false" @yes="handleUpdate">
    <h1 class="font-bold text-xl my-2">Hold On!</h1>
    <p>Are you really gonna update your details?</p>
  </AdminModalConfirm>
</template>

<script setup>
import Joi from 'joi'
const ProfileStore = useProfileStore()
const success = ref(false);
const confirm = ref(false);
const isLoading = ref(false);
const fetchError = ref('');
const errors = ({})

const formData = ref({
  instagram: ProfileStore.profile.instagram,
  github: ProfileStore.profile.github,
  linkedin: ProfileStore.profile.linkedin,
  discord: ProfileStore.profile.discord,
  twitter: ProfileStore.profile.twitter
});

const handleUpdate = async () => {

  if (isLoading.value) return;
  //reset error
  errors.value = {};
  fetchError.value = '';
  confirm.value = false
  isLoading.value = true
  try {
    await ProfileStore.update(formData.value);
    console.log('formData.value================')
    console.log(formData.value)
    success.value = true
    isLoading.value = false
    setTimeout(() => {
      success.value = false
    }, 3000);

  } catch (error) {
    isLoading.value = false
    if (error instanceof Joi.ValidationError) {
      console.log('error from joi')
      console.log(error)
      //joi error
      errors.value = joiError(error)
    } else {
      //fetch error
      console.log('error from fetacherropr')
      console.log(error)
      fetchError.value = error.data.message
    }
  }
};

</script>

<style></style>