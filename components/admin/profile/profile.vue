<template>
  <div class="grid grid-cols-2">
    <!-- profile -->
    <div>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">First Name</span>
        </div>
        <input v-model="formData.firstName" type="text" placeholder="First Name"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Last Name</span>
        </div>
        <input v-model="formData.lastName" type="text" placeholder="Last Name"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">City</span>
        </div>
        <input v-model="formData.city" type="text" placeholder="City" class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Country</span>
        </div>
        <input v-model="formData.country" type="text" placeholder="Country"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Job</span>
        </div>
        <input v-model="formData.job" type="text" placeholder="Job" class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Phone</span>
        </div>
        <input v-model="formData.phone" type="text" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Dob</span>
        </div>
        <input v-model="formData.dob" type="text" placeholder="Date Of Birth"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Address</span>
        </div>
        <input v-model="formData.address" type="text" placeholder="Address"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Website</span>
        </div>
        <input v-model="formData.website" type="text" placeholder="Website"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
      </label>
    </div>
    <!-- avatar -->
    <!-- TODO ntar jadiin modal aja -->
    <div>
      <div class="my-2">Avatar</div>
      <div>
        <div class="avatar">
          <div class="w-[230px] rounded-xl">
            <div v-if="!ProfileStore.profile.avatar" class="aspect-square w-[230px] rounded-xl bg-gray-400"></div>
            <img v-else :src="apiUri + ProfileStore.profile.avatar" />
          </div>
        </div>
      </div>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Pick an avatar</span>
        </div>
        <input type="file" class="file-input file-input-md file-input-bordered w-full max-w-xs" />
      </label>
      <!-- bio -->
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Description</span>
        </div>
        <textarea v-model="formData.bio" placeholder="Bio" rows="7" class="textarea textarea-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.name">{{ errors.name }}</div>
      </label>
    </div>

  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;

const ProfileStore = useProfileStore()
const errors = ref({});

const formData = ref({
  firstName: ProfileStore.profile.firstName,
  lastName: ProfileStore.profile.lastName,
  avatar: ProfileStore.profile.avatar,
  city: ProfileStore.profile.city,
  country: ProfileStore.profile.country,
  job: ProfileStore.profile.job,
  phone: ProfileStore.profile.phone,
  dob: ProfileStore.profile.dob,
  address: ProfileStore.profile.address,
  bio: ProfileStore.profile.bio,
  website: ProfileStore.profile.website
});

</script>

<style></style>