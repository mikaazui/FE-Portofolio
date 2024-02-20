<template>
  <div>
    <AdminAlertSuccess v-if="success" />
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
  <label class="btn grow mt-3 w-[320px]" @click="confirm = true">Submit</label>
  <div class="text-xs text-error" v-if="fetchError">{{ fetchError }}</div>
  <AdminModalConfirm :show="confirm" @close="confirm = false" @confirm="handleUpdate" />
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
const handleUpdate = async () => {
  errors.value = {};
  fetchError.value = '';
  confirm.value = false
  success.value = false
  try {
    console.log('masuk handle update')
    await AuthStore.updateUser(formData.value);
    success.value = true

  } catch (error) {
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