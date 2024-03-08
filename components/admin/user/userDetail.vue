<template>
  <div class="flex flex-col">
    <AdminAlertSuccess :show="success" />
    <!-- name -->
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Name</span>
      </div>
      <input v-model="formData.name" type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
      <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
    </label>

    <!-- email -->
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Email</span>
      </div>
      <!-- TODO ini email di-disabled -->
      <input v-model="formData.email" type="text" disabled placeholder="Email"
        class="input input-bordered input-disabled w-full max-w-xs" />
      <div class="text-xs text-right text-error" v-if="errors.email">{{ errors.email }}</div>
    </label>
  </div>
  <label class="btn grow mt-3 w-[320px] flex items-center justify-center" @click="confirm = true">
    <span>Submit</span>
    <span class="loading loading-spinner loading-sm px-3" v-show="isLoading"></span>
  </label>
  <div class="text-xs text-error" v-if="fetchError">{{ fetchError }}</div>
  <!-- modal -->
  <AdminModalConfirm :show="confirm" @close="confirm = false" @yes="handleUpdate" >
    <h1 class="font-bold text-xl my-2">Hold On!</h1>
    <p>Are you really gonna update your details?</p>
  </AdminModalConfirm>
</template>

<script setup>
import Joi from 'joi';
const AuthStore = useAuthStore();

const errors = ref({});
const fetchError = ref('');

const formData = ref({
  name: AuthStore.user.name,
  email: AuthStore.user.email
});

const success = ref(false)
const confirm = ref(false)
const isLoading = ref(false)
const handleUpdate = async () => {
  errors.value = {};
  fetchError.value = '';
  confirm.value = false
  isLoading.value = true
  try {
    console.log('masuk handle update')
    await AuthStore.updateUser(formData.value);
    success.value = true
    isLoading.value = false
    setTimeout(() => {
      success.value = false
    }, 3000);

  } catch (error) {
    isLoading.value = false
    console.log('ada error')
    console.log(error)
    if (error instanceof Joi.ValidationError) {
      //joi error
      errors.value = joiError(error)
    }
    else {
      //fetch error
      fetchError.value = error.data.message
    }
  }
};

</script>

<style></style>