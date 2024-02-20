<template>
  <div class="flex flex-col">
    <AdminAlertSuccess v-if="success"/>
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
  <label class="btn grow mt-3 w-[320px]" @click="confirm = true">Submit</label>
  <div class="text-xs text-error" v-if="fetchError">{{ fetchError }}</div>
  <!-- modal -->
  <AdminModalConfirm  :show="confirm" @close="confirm=false" @confirm="handleUpdate" />
  <!-- <input type="checkbox" id="confirm" class="modal-toggle" />
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
  </div> -->
</template>

<script setup>
import Joi from 'joi';
const AuthStore = useAuthStore();

const errors = ref({});
const fetchError = ref('');

const formData = ref({
  name: AuthStore.user .name,
  email: AuthStore.user.email
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

<style></style>