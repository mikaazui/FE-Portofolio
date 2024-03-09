<template>
   <!-- modal -->
   <input type="checkbox" v-model="show_modal" class="modal-toggle" />
   <div class="modal" role="dialog">
      <div class="modal-box">
         <form method="dialog">
            <label @click="$emit('close')" class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</label>
         </form>
         <h1 class="text-xl font-semibold"> {{ data ? `Update ${data.insituitionName}` : 'Add Education' }} </h1>

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
            <input v-model="formData.degree" type="text" placeholder="Degree"
               class="input input-bordered w-full max-w-xs" />
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
                     {{ dayjs(formData.startYear).format('YYYY') }}
                  </button>
               </template>
            </DatePicker>
            <div class="text-xs text-right text-error" v-if="errors.startYear">{{ errors.startYear }}</div>
         </label>

         <div class="flex items-center gap-3">
            <label class="form-control w-full max-w-xs">
            <div class="label">
               <span class="label-text">Start Year</span>
            </div>
            <DatePicker v-model="formData.endYear" color="gray">
               <template #default="{ togglePopover }">
                  <button @click="togglePopover" class="btn btn-outline border-neutral/90 font-normal">
                     {{ dayjs(formData.endYear).format('YYYY') }}
                  </button>
               </template>
            </DatePicker>
            <div class="text-xs text-right text-error" v-if="errors.endYear">{{ errors.endYear }}</div>
         </label>
            <div class="flex items-center">
               <!-- TODO CHECKBOXNYA ? JIKA ADA DATA > CHECKBOX TERCENTANG -->
               <input type="checkbox" v-model="isPresent" @change="handlePresent" class="checkbox" />
               <label for="" class="label">Present</label>
            </div>


         </div>

         <div class="flex gap-3 py-3 justify-end">
            <button @click="$emit('close')" class="btn btn-error text-white">Close</button>
            <button @click="handleSave" class="btn btn-success text-white">
               {{ data ? 'Update' : 'Save' }}
               <span v-show="isLoading" class="loading loading-spinner loading-md"></span>
            </button>
            <div class="text-xs text-error">{{ fetchError }}</div>
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
   data: Object,
   show: Boolean,
})

const errors = ({})
const fetchError = ref('')
const isLoading = ref(false)
const isPresent = ref(false)
const EduStore = useEducationStore();
const show_modal = ref(false)
const formData = ref({})
const emits = defineEmits(['close', 'saved'])


watchEffect(() => {
   show_modal.value = props.show

   //reset form
   formData.value = {
      insituitionName: props.data ? props.data.insituitionName : '',
      startYear: props.data ? props.data.startYear : new Date(),
      endYear: props.data ? props.data.endYear : new Date() || '',
      city: props.data ? props.data.city : '',
      major: props.data ? props.data.major : '',
      degree: props.data ? props.data.degree : ''
      //kondisi 1 props.data null
      //kondisi 2 props.data.endDate = null

};



if (props.data) {
      // tergantung kondisi endDate
      isPresent.value = props.data.endDate == null ? true : '';
   } else {
      // default
      isPresent.value = false;
   }

   console.log(props.data)
   
});



const handleSave = async () => {
   isLoading.value = true;
   try {
      
      // jika isPresent ter-centang
      if (isPresent.value) {
         // ubah endDate menjadi null
         formData.value.endDate = '';
      }

      if (!props.data) {
         // handle create
         await EduStore.create(formData.value)
      } else {
         //update
         const id = props.data.id;
         await EduStore.update(id, formData.value)
      }
      isLoading.value = false;
      
      // emit saved
      emits('saved');
   } catch (error) {
      isLoading.value = false;
      console.log(formData.value)
      console.log('error =============')
      console.log(error)
      
      if (error instanceof Joi.ValidationError) {
         errors.value = joiError(error);
      } else {
         if (error.data) {
            fetchError.value = error.data.message
         } else {
            console.log(error)
         }
      }
   }
};


const handlePresent = (e) => {
   isPresent.value = e.target.checked
   if (isPresent.value) {
      formData.value.endYear = null
   }
}


</script>