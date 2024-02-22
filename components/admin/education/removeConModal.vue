<template>
  <!-- modal -->
  <input type="checkbox" v-model="show_modal" class="modal-toggle" />
  <div class="modal" role="dialog">
    <div class="modal-box bg-warning text-black">
      <form method="dialog">
        <label @click="$emit('close')" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
      </form>
      <div class="text-xl flex items-center font-semibold pb-3">
        <div>WARNING! </div>
        <lucideAlertTriangle :size="18" />
      </div>
    <slot />
      <div class="modal-action"> 
        <label @click="$emit('close')" class="btn btn-neutral">Cancel!</label>
        <label class="btn btn-error text-white" @click="handleDelete">Sure, Delete!</label>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <label @click="$emit('close')">close</label>
    </form>
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  data: Object
})
console.log(props.value)
const EduStore = useEducationStore();

defineEmits(['close', 'yes'])
const show_modal = ref(false)
watchEffect(() => {
  show_modal.value = props.show
})

const handleDelete = async () => {
  try {
    console.log(props.data.id)
    console.log('data deleted')
    // await EduStore.delete(props.data.id)
    // $emit('yes')
    // $emit('close')
    
  } catch (error) {
    console.log(error)
    
  }
  

}

</script>

<style></style>