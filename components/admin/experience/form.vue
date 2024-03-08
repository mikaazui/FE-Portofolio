<template>
  <!-- modal -->
  <input type="checkbox" v-model="show_modal" class="modal-toggle" />
  <div class="modal" role="dialog">
    <div class="modal-box">
      <form method="dialog">
        <label @click="$emit('close')" class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</label>
      </form>
      <h1 class="text-xl font-semibold">Add Experience</h1>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Company</span>
        </div>
        <input v-model="formData.company" type="text" placeholder="Company"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.company">{{ errors.company }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">location</span>
        </div>
        <input v-model="formData.location" type="text" placeholder="Location"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.location">{{ errors.location }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">title</span>
        </div>
        <input v-model="formData.title" type="text" placeholder="Title" class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.title">{{ errors.title }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Description</span>
        </div>
        <input v-model="formData.description" type="text" placeholder="Description"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.description">{{ errors.description }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Start Date</span>
        </div>
        <input v-model="formData.startDate" type="text" placeholder="Start Date"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.startDate">{{ errors.startDate }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">End Date</span>
        </div>
        <input v-model="formData.endDate" type="text" placeholder="End Date"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.endDate">{{ errors.endDate }}</div>
      </label>


      <div class="flex gap-3 py-3 justify-end">
        <button @click="$emit('close')" class="btn btn-error text-white">Close</button>
        <button @click="handleSave" class="btn btn-success text-white">Save</button>
        <div class="text-xs text-error" v-if="fetchError">{{ fetchError }}</div>
      </div>
    </div>
  </div>
</template>



<script setup>
import Joi from 'joi';
const props = defineProps({
  show: Boolean,
  text_confirm: String,

})

const errors = ({})
const fetchError = ref('')
const isLoading = ref(false)
const formData = ref({
  company: '',
  location: '',
  title: '',
  description: '',
  startDate: '',
  endDate: '',
})

const emits = defineEmits(['close', 'yes', 'saved'])
const show_modal = ref(false)
watchEffect(() => {
  show_modal.value = props.show

  //reset form
  formData.value = {
    company: '',
    location: '',
    title: '',
    description: '',
    startDate: '',
    endDate: '',
  }
})

const ExpStore = useExperienceStore()
const handleSave = async () => {
  isLoading.value = true
  try {
    errors.value = {}
    fetchError.value = ''
    console.log('handle save')
    console.log(formData.value)
    //ubah data endYEar jika kosong
    if (formData.value.endDate == '') formData.value.endDate = null

    await ExpStore.create(formData.value)
    console.log('data ready to post')
    console.log(formData.value)
    show_modal.value = false
    isLoading.value = false
    emits('saved')

  } catch (error) {
    isLoading.value = false
    if (error instanceof Joi.ValidationError) {
      //joi error
      errors.value = joiError(error)
      console.log(errors.value)
    } else {
      if (error.data) {
        //fetch error
        console.log(error)
        console.log(error.status)
        console.log(error.message)
        fetchError.value = error.message
      }
      else {
        console.log('error codingan')
        console.log(error)
      }
    }
  }
};



</script>