<template>
  <div>
    <AdminAlertSuccess :show="success" />
    <!--current password -->
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Current Password</span>
      </div>
      <input v-model="formData.current_password" type="password" placeholder="Enter Current Password"
        class="input input-bordered w-full max-w-xs" />
      <div class="text-xs text-right text-error" v-if="errors.current_password">{{ errors.current_password }}</div>
    </label>

    <!-- password -->
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">New Password</span>
      </div>
      <input v-model="formData.password" type="password" placeholder="Enter New Password"
        class="input input-bordered w-full max-w-xs" />
      <div class="text-xs text-right text-error" v-if="errors.password">{{ errors.password }}</div>
    </label>

    <!-- confirm password -->
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Confirm Password</span>
      </div>
      <input v-model="formData.confirm_password" type="password" placeholder="Confirm Password"
        class="input input-bordered w-full max-w-xs" />
      <div class="text-xs text-right text-error" v-if="errors.confirm_password">{{ errors.confirm_password }}</div>
    </label>
  </div>
  <label class="btn grow mt-3 w-[320px]" @click="confirm = true">
    Submit
    <span class="loading loading-spinner loading-sm px-3 flex items-center justify-center" v-show="isLoading"></span>
  </label>
  <div class="text-xs text-error" v-if="fetchError">{{ fetchError }}</div>
  <AdminModalConfirm :show="confirm" text_confirm="Update Password!" @close="confirm = false" @yes="handleUpdate">
    <h1 class="font-bold text-xl my-2">Hold On!</h1>
    <p>Are you really gonna update your Password?</p>
  </AdminModalConfirm>
  <!-- oke fixed -->
</template>

<script setup>
import Joi from 'joi';
const AuthStore = useAuthStore();

const errors = ref({});
const fetchError = ref('');

const formData = ref({
  password: '',
  current_password: '',
  confirm_password: ''
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
    }, 3000)
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