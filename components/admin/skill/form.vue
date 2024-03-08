<template>
   <!-- modal -->
   <input type="checkbox" v-model="show_modal" class="modal-toggle" />
   <div class="modal" role="dialog">
      <div class="modal-box">
         <form method="dialog">
            <label @click="$emit('close')" class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</label>
         </form>
         <h1 class="text-xl font-semibold"> {{ data ? `Update ${data.title}` : 'Add Skill' }} </h1>

         <!-- Skill Title -->
         <label class="form-control w-full max-w-xs">
            <div class="label">
               <span class="label-text">Title</span>
            </div>
            <input v-model="formData.title" type="text" placeholder="Skill Name"
               class="input input-bordered w-full max-w-xs" />
            <div class="text-xs text-right text-error" v-if="errors.title">{{ errors.title }}</div>
         </label>

         <!-- Category -->
         <label class="form-control w-full max-w-xs">
            <div class="label">
               <span class="label-text">Category</span>
            </div>
            <input v-model="formData.category" type="text" placeholder="Category"
               class="uppercase input input-bordered w-full max-w-xs" />
            <div class="text-xs text-right text-error" v-if="errors.category">{{ errors.category }}</div>

            <!-- <select @change="(e) => formData.category = e.target.value"
               class="select select-sm select-bordered w-full max-w-xs mt-3">
               <option value="all">All Category</option>
               <option v-for="cat in SkillStore.categories" :key="cat.id" :value="cat.title">{{ cat.title }}</option>
            </select> -->

            <div class="flex gap-1 flex-wrap mt-3">
               <button v-for="cat in SkillStore.categories" :key="cat.id" @click="formData.category = cat.title"
                  class="btn rounded-xl btn-outline btn-sm btn-ghost">{{ cat.title }}</button>

            </div>
         </label>

         <!-- Svg -->
         <label class="form-control w-full max-w-xs">
            <div class="label">
               <span class="label-text">SVG</span>
            </div>

            <div class="bg-base-200 p-3 rounded-lg mb-2">
               <div v-html="formData.svg"></div>
            </div>

            <textarea v-model="formData.svg" placeholder="SVG" rows="7"
               class="textarea textarea-bordered w-full max-w-xs" />
            <div class="text-xs text-right text-error" v-if="errors.svg">{{ errors.svg }}</div>
         </label>


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

<script setup>
const props = defineProps({
   data: Object,
   show: Boolean,
})


import dayjs from 'dayjs'
import { DatePicker } from 'v-calendar'
import Joi from 'joi'

const SkillStore = useSkillStore();
const errors = ({})
const fetchError = ref('')
const isLoading = ref(false)
const emits = defineEmits(['close', 'saved'])
const isPresent = ref(false)

const show_modal = ref(false)
const formData = ref({})

watchEffect(() => {
   show_modal.value = props.show

   formData.value = {
      title: props.data ? props.data.title : '',
      category: props.data ? props.data.category.title : '',
      svg: props.data ? props.data.svg : '',
   };
});

const handleSave = async () => {
   errors.value = {};
   fetchError.value = '';
   try {
      if (!props.data) {
         // handle create
         await SkillStore.create(formData.value)
      } else {
         //update
         const id = props.data.id;
         await SkillStore.update(id, formData.value)
      }
      isLoading.value = false;
      // emit saved
      emits('saved')
   } catch (error) {
      if (error instanceof Joi.ValidationError) {
         errors.value = joiError(error);
      } else {
         if (error.data) {
            fetchError.value = error.data.message
         } else {
            console.log(error)
         }
      }
   };


   // try {
   //   //sjow laoading
   //   isLoading.value = true;
   //   await SkillStore.create(formData.value)
   //   //disable laoading
   //   isLoading.value = false;
   //   emits('saved')

   // } catch (error) {
   //   //disable laoading
   //   isLoading.value = false;
   //   // emit saved
   //   emits('saved')

   //   if (error instanceof Joi.ValidationError) {
   //     errors.value = joiError(error);
   //   } else {
   //     if (error.data) {
   //       fetchError.value = error.data.message
   //     } else {
   //       console.log(error)
   //     }
   //   }

   // }
}

</script>
