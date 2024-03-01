<template>
  <!-- modal -->
  <input type="checkbox" v-model="show_modal" class="modal-toggle" />
  <div class="modal" role="dialog">
    <div class="modal-box">
      <form method="dialog">
        <label @click="$emit('close')" class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</label>
      </form>
      <h1 class="text-xl font-semibold">Add Education</h1>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">institution Name</span>
        </div>
        <input v-model="formData.insituitionName" type="text" placeholder="institution Name"
          class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.insituitionName">{{ errors.insituitionName }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Major</span>
        </div>
        <input v-model="formData.major" type="text" placeholder="Major" class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.major">{{ errors.major }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Degree</span>
        </div>
        <input v-model="formData.degree" type="text" placeholder="Degree" class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.degree">{{ errors.degree }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">City</span>
        </div>
        <input v-model="formData.city" type="text" placeholder="city" class="input input-bordered w-full max-w-xs" />
        <div class="text-xs text-right text-error" v-if="errors.city">{{ errors.city }}</div>
      </label>

      <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Start Year</span>
        </div>
        <DatePicker v-model="formData.startYear" color="gray">
          <template #default="{ togglePopover }">
            <button @click="togglePopover" class="btn btn-outline border-neutral/90 font-normal">
              {{ dayjs(formData.startYear).format('D MMMM YYYY') }}
            </button>
          </template>
        </DatePicker>
        <div class="text-xs text-right text-error" v-if="errors.startYear">{{ errors.startYear }}</div>
      </label>

      <div class="flex items-center gap-3">
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">End Year</span>
          </div>
          <DatePicker v-model="formData.endYear" color="gray">
            <template #default="{ togglePopover }">
              <button @click="togglePopover" class="btn btn-outline border-neutral/90 font-normal" :disabled="isPresent">
                {{ dayjs(formData.endYear).format('D MMMM YYYY') }}
              </button>
            </template>
          </DatePicker>
          <div class="text-xs text-right text-error" v-if="errors.endYear">{{ errors.endYear }}</div>

        </label>
        <div class="flex items-center">
          <input v-model="isPresent" type="checkbox" @change="handlePresent" class="checkbox" />
          <label for="" class="label">Present</label>
        </div>


      </div>

      <div class="flex gap-3 py-3 justify-end">
        <button @click="$emit('close')" class="btn btn-error text-white">Close</button>
        <button @click="handleSave" class="btn btn-success text-white">Save</button>
        <div class="text-xs text-error" >{{ fetchError }}</div>
      </div>
    </div>
  </div>
</template>

<!-- TODO PINDAHIN METHOD UPDATE KESINI -->



<script setup>
import Joi from 'joi';
import dayjs from 'dayjs'
import { DatePicker } from 'v-calendar'
const props = defineProps({
  show: Boolean,
  text_confirm: String,

})

const errors = ({})
const fetchError = ref('')
const isLoading = ref(false)
const formData = ref({
  insituitionName: '',
  major: '',
  degree: '',
  city: '',
  startYear: '',
  endYear: ''
})

const emits = defineEmits(['close', 'yes', 'saved'])
const show_modal = ref(false)
watchEffect(() => {
  show_modal.value = props.show

  //reset form
  formData.value = {
    insituitionName: '',
    major: '',
    degree: '',
    city: '',
    startYear: new Date(),
    endYear: new Date()
  }
})

const EduStore = useEducationStore();
const handleSave = async () => {
  isLoading.value = true
  try {
    errors.value = {}
    fetchError.value = ''
    console.log('handle save')
    console.log(formData.value)
    //ubah data endYEar jika kosong
    if(isPresent.value) formData.value.endYear = null

    await EduStore.create(formData.value)
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

const handlePresent = (e) => {
  isPresent.value = e.target.checked
}
const isPresent = ref(false)


</script>