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
        <div class="text-right text-error" v-if="errors.name">{{ errors.name }}</div>
      </label>

      <!-- email -->
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Email</span>
        </div>
        <input v-model="formData.email" type="text" placeholder="Email"
          class="input input-bordered input-disabled w-full max-w-xs" />
        <div class="text-right text-error" v-if="errors.email">{{ errors.email }}</div>

      </label>
      <!-- password -->

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Password</span>
        </div>
        <input v-model="formData.password" type="password" placeholder="Password"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-right text-error" v-if="errors.password">{{ errors.password }}</div>
      </label>
      <!-- confirm password -->

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Confirm Password</span>
        </div>
        <input v-model="formData.confirmPassword" type="password" placeholder="Confirm Password"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-right text-error" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</div>
      </label>
      <label class="btn grow mt-3 w-[320px]" for="confirm">Submit</label>
    </div>
    <!-- Submit button to open modal -->
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="confirm" class="modal-toggle" />
    <div class="modal" role="dialog">
      <div class="modal-box">
        <form method="dialog">
          <label for="confirm" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
        </form>
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Are you sure?</p>
        <div class="modal-action">
          <label for="confirm" class="btn text-white btn-error">Cancel</label>
          <label for="confirm" class="btn text-white btn-success">Yes</label>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <label for="confirm">close</label>
      </form>
    </div>



  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: ['auth']
});

const AuthStore = useAuthStore();

const errors = ref({});

const formData = ref({
  name: AuthStore.user.name,
  email: AuthStore.user.email,
  password: '',
  confirmPassword: ''
});

const handleupdate = () => {
  //konfirmasi
  //validasi
  //eksekusi

}

</script>

<style></style>