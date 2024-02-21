<template>
  <AdminAlertSuccess :show="success" />
  <div class="grid grid-cols-2">
    <!-- profile -->
    <div>
      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">First Name</span>
        </div>
        <input v-model="formData.firstName" type="text" placeholder="First Name"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.firstName">{{ errors.firstName }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Last Name</span>
        </div>
        <input v-model="formData.lastName" type="text" placeholder="Last Name"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.lastName">{{ errors.lastName }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">City</span>
        </div>
        <input v-model="formData.city" type="text" placeholder="City" class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.city">{{ errors.city }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Country</span>
        </div>
        <input v-model="formData.country" type="text" placeholder="Country"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.country">{{ errors.country }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Job</span>
        </div>
        <input v-model="formData.job" type="text" placeholder="Job" class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.job">{{ errors.job }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Phone</span>
        </div>
        <input v-model="formData.phone" type="text" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.phone">{{ errors.phone }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Dob</span>
        </div>
        <DatePicker v-model="formData.dob" color="gray">
          <template #default="{ togglePopover }">
            <button @click="togglePopover" class="btn btn-outline border-neutral/25 font-normal">
              {{ dayjs(formData.dob).format('D MMMM YYYY') }}
            </button>
          </template>
        </DatePicker>
        <div class="text-xs text-right text-error" v-if="errors.dob">{{ errors.dob }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Address</span>
        </div>
        <input v-model="formData.address" type="text" placeholder="Address"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.address">{{ errors.address }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Website</span>
        </div>
        <input v-model="formData.website" type="text" placeholder="Website"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.website">{{ errors.website }}</div>
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
      <!-- avatar edit -->
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
        <div class="text-xs text-right text-error" v-if="errors.bio">{{ errors.bio }}</div>
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
    </div>

  </div>
</template>

<script setup>
import Joi from 'joi'
import dayjs from 'dayjs'
import { DatePicker } from 'v-calendar'
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;
const ProfileStore = useProfileStore()
const success = ref(false);
const confirm = ref(false);
const isLoading = ref(false);


const formData = ref({
  firstName: ProfileStore.profile.firstName,
  lastName: ProfileStore.profile.lastName,
  city: ProfileStore.profile.city,
  avatar: ProfileStore.profile.avatar,
  country: ProfileStore.profile.country,
  job: ProfileStore.profile.job,
  phone: ProfileStore.profile.phone,
  dob: ProfileStore.profile.dob,
  address: ProfileStore.profile.address,
  bio: ProfileStore.profile.bio,
  website: ProfileStore.profile.website
});
const errors = ref({});
const fetchError = ref('');
//confirmation

//handle update
const handleUpdate = async () => {
  //reset error
  errors.value = {};
  fetchError.value = '';
  confirm.value = false
  isLoading.value = true
  try {
    await ProfileStore.update(formData.value);
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
      console.log('error dari joi')
      errors.value = joiError(error)
      console.log('============')
      console.log(errors.lastName)
    } else {
      //fetch error
      console.log('error dari fetcherror')
      fetchError.value = error.data.message
    }
  }
};
</script>

<style></style>