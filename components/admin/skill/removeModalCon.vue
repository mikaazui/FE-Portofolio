<template>
  <!-- modal -->
  <input type="checkbox" v-model="show_modal" class="modal-toggle" />
  <div class="modal" role="dialog">
    <div class="text-black modal-box bg-warning">
      <form method="dialog">
        <label @click="$emit('close')" class="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</label>
      </form>
      <div class="flex items-center pb-3 text-xl font-semibold">
        <div>WARNING! </div>
        <lucideAlertTriangle :size="18" />
      </div>
    <slot />
      <div class="modal-action"> 
        <label @click="$emit('close')" class="btn btn-neutral">Cancel!</label>
        <label class="text-white btn btn-error" @click="$emit('yes'); isLoading = true;">
          Sure, Delete!
          <span class="px-3 loading loading-spinner loading-sm" v-show="isLoading"></span>
        </label>
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
const isLoading = ref(false)
defineEmits(['close', 'yes'])
const show_modal = ref(false)
const data = ref()
watchEffect(() => {
  show_modal.value = props.show
  if (props.show){
    isLoading.value = false
  }
})
</script>

<style></style>