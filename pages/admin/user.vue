<template>
  <div>
    <div class="capitalize font-semibold text-lg">User Setting</div>
    <div class="flex flex-col gap-3">

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
      <label class="btn grow mt-3 w-[320px]" for="confirm">Submit</label>
      <div class="text-xs text-error" v-if="fetchError">{{ fetchError }}</div>
    </div>
    <!-- Submit button to open modal -->
    <input type="checkbox" id="confirm" class="modal-toggle" />
    <div class="modal" role="dialog">
      <div class="modal-box">
        <form method="dialog">
          <label for="confirm" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
        </form>
        <h3 class="font-bold text-lg">Confirm To Proceed</h3>
        <p class="py-4">Are you sure?</p>
        <div class="modal-action">
          <label for="confirm" class="btn text-white btn-error">Cancel</label>
          <label for="confirm" class="btn text-white btn-success" @click="handleUpdate">Yes Update!</label>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <label for="confirm">close</label>
      </form>
    </div>



  </div>
</template>

<script setup>
import Joi from 'joi';
definePageMeta({
  layout: 'admin',
  middleware: ['auth']
});
const AuthStore = useAuthStore();

const errors = ref({});
const fetchError = ref('');

const formData = ref({
  name: AuthStore.user.name,
  email: AuthStore.user.email,
  password: '',
  current_password: '',
  confirm_password: ''
});

const handleUpdate = async () => {
  errors.value = {};
  fetchError.value = '';
  try {
    console.log('masuk handle update')
    await AuthStore.updateUser(formData.value);

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