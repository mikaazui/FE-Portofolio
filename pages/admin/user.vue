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
    </div>
    <div class="flex">
      <button class="btn hover:border-primary grow">Submit</button>

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

const handleupdate() => {
  
}

</script>

<style></style>