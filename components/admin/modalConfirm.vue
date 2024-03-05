<template>
    <!-- modal -->
    <input type="checkbox" v-model="show_modal" class="modal-toggle" />
    <div class="modal" role="dialog">
      <div class="modal-box">
        <form method="dialog">
          <label @click="$emit('close')" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
        </form>
        <slot />
        <div class="modal-action">
          <label @click="$emit('close')" class="btn text-white btn-error">Uhh..maybe later</label>
          <label class="btn text-white btn-success" @click="$emit('yes')">{{ text_confirm || 'Yes Update!'}} <span v-show="isLoading" class="loading loading-spinner loading-md"></span></label>
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
  text_confirm: String,
  isLoading: Boolean,
  data: Object
})
defineEmits(['close','yes'])
const show_modal = ref(false)
watchEffect(() => {
  show_modal.value = props.show
})

</script>