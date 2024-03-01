<template>
  <!-- modal -->
  <input type="checkbox" v-model="show_modal" class="modal-toggle" />
  <div class="modal" role="dialog">
    <div class="modal-box">
      <form method="dialog">
        <label @click="$emit('close')" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
      </form>
      <div class="text-xl font-semibold">Edit Education Data</div>
      <div>

        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">institution Name</span>
          </div>
          <input v-model="formData.institutionName" type="text" placeholder="institution Name"
            class="input input-bordered w-full max-w-xs" />
          <div class="text-xs text-right text-error">{{ errors.institutionName }}</div>
        </label>
        <!--  -->
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">City</span>
          </div>
          <input v-model="formData.city" type="text" placeholder="City" class="input input-bordered w-full max-w-xs" />
          <div class="text-xs text-right text-error">{{ errors.city }}</div>
        </label>
        <!--  -->
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Start Year</span>
          </div>
          <DatePicker v-model="formData.startYear" color="gray">
            <template #default="{ togglePopover }">
              <button @click="togglePopover" class="btn btn-outline border-neutral/90 font-normal">
                {{ dayjs(formData.startYear).format('YYYY') }}
              </button>
            </template>
          </DatePicker>
          <div class="text-xs text-right text-error" v-if="errors.startYear">{{ errors.startYear }}</div>
        </label>
        <!--  -->
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">End Year</span>
          </div>
          <DatePicker v-model="formData.startYear" color="gray">
            <template #default="{ togglePopover }">
              <button @click="togglePopover" class="btn btn-outline border-neutral/90 font-normal">
                {{ dayjs(formData.endYear).format('YYYY') }}
              </button>
            </template>
          </DatePicker>
          <div class="text-xs text-right text-error" v-if="errors.startYear">{{ errors.startYear }}</div>
        </label>
        <!--  -->
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Major</span>
          </div>
          <input v-model="formData.major" type="text" placeholder="Major" class="input input-bordered w-full max-w-xs" />
          <div class="text-xs text-right text-error">{{ errors.major }}</div>
        </label>
        <!--  -->
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Degree</span>
          </div>
          <input v-model="formData.degree" type="text" placeholder="Degree"
            class="input input-bordered w-full max-w-xs" />
          <div class="text-xs text-right text-error">{{ errors.degree }}</div>
        </label>

      </div>
      <div class="modal-action">
        <label @click="$emit('close')" class="btn text-white btn-error">Cancel</label>
        <label class="btn text-white btn-success" @click="handleUpdate">Confirm Edit</label>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <label @click="$emit('close')">close</label>
    </form>
  </div>
</template>

<script setup>
defineEmits(['close', 'yes'])

const props = defineProps({
  data: Object,
  show: Boolean
  // text_confirm: String
});

import dayjs from 'dayjs'
import { DatePicker } from 'v-calendar'

const formData = ref({})
const isLoading = ref(false)

const errors = ref({})

const EduStore = useEducationStore();

const handleUpdate = async () => {
  try {
    isLoading = true;

    if (!formData.value.endYear) formData.value.endYear = null;

    if (props.data) {
      await EduStore.update(props.data.id, formData.value)
      // emits('')
      isLoading = false
    }


  } catch (error) {

  }
}
const show_modal = ref(false)
watchEffect(() => {
  show_modal.value = props.show
  //reset form
  formData.value = {
    institutionName: props.data ? props.data.insituitionName : '',
    city: props.data ? props.data.city : '',
    startYear: props.data ? props.data.startYear : '',
    endYear: props.data ? props.data.endYear : '',
    major: props.data ? props.data.major : '',
    degree: props.data ? props.data.degree : '',
  };
  console.log(formData.value)

})

//TODO HAPUS SEMUANYA, PINDAHIN KE FORM

</script>

